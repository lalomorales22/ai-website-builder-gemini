import { GoogleGenAI, Modality, Type } from "@google/genai";
// FIX: Import additional content types to allow for explicit casting and fix type errors.
import type { WebsiteData, Section, HeroContent, AboutContent, GalleryContent, CarouselContent, FinalWebsiteData, FinalSection, FeaturesContent, ContactContent, TextContent } from '../types';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const generateWebsiteStructure = async (prompt: string): Promise<WebsiteData> => {
    const model = 'gemini-2.5-pro';
    const systemInstruction = `You are an expert web developer and designer. Your task is to take a user's description of a website and generate a structured JSON object representing that website's layout and content.

    The user wants: "${prompt}"
    
    Based on this, create a JSON object that adheres to the following TypeScript interface:
    
    interface WebsiteData {
      title: string; // A concise title for the website.
      sections: Section[];
    }
    
    type SectionType = 'hero' | 'about' | 'gallery' | 'features' | 'contact' | 'text' | 'carousel';
    type IconName = 'star' | 'bolt' | 'shield' | 'code' | 'globe' | 'check';

    interface Section {
      type: SectionType;
      content: HeroContent | AboutContent | GalleryContent | FeaturesContent | ContactContent | TextContent | CarouselContent;
    }
    
    interface HeroContent {
      title: string;
      subtitle: string;
      imagePrompt: string; // A detailed DALL-E style prompt for a stunning, high-quality hero image.
      depthMapPrompt: string; // A prompt for a corresponding depth map. Black is far, white is near.
    }
    
    interface AboutContent {
      title: string;
      text: string;
      imagePrompt?: string;
    }
    
    interface GalleryContent {
      title: string;
      images: { imagePrompt: string }[];
    }

    interface FeaturesContent {
        title: string;
        features: {
            icon: IconName;
            title: string;
            description: string;
        }[];
    }
    
    interface ContactContent {
      title: string;
      email: string;
      text: string;
    }
    
    interface TextContent {
      title: string;
      text: string;
    }

    interface CarouselContent {
        title: string;
        cards: {
            title: string;
            description: string;
            imagePrompt: string; // Detailed prompt for a small card image.
        }[];
    }
    
    IMPORTANT RULES:
    1.  The website MUST have a minimum of 5 sections.
    2.  ONLY output the raw JSON object. Do not include explanation, markdown, or anything else.
    3.  The JSON must be valid and parseable.
    4.  For image prompts, be descriptive and creative.
    5.  For depth map prompts, clearly describe foreground (white) and background (black) elements.
    6.  Choose section types that best fit the user's request, and aim for variety.
    7.  Ensure the generated text content is well-written and fits the website's theme.
    `;
    
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            systemInstruction,
            responseMimeType: 'application/json'
        }
    });

    try {
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as WebsiteData;
    } catch (e) {
        console.error("Failed to parse JSON from Gemini:", response.text);
        throw new Error("AI failed to generate a valid website structure. Please try again.");
    }
};

const generateImage = async (prompt: string): Promise<string> => {
    const model = 'gemini-2.5-flash-image';
    const response = await ai.models.generateContent({
        model: model,
        contents: {
            parts: [{ text: prompt }],
        },
        config: {
            responseModalities: [Modality.IMAGE],
        },
    });

    const firstPart = response.candidates?.[0]?.content?.parts?.[0];
    if (firstPart && firstPart.inlineData) {
        return firstPart.inlineData.data;
    }
    throw new Error(`Image generation failed for prompt: ${prompt}`);
};

export const generateWebsite = async (prompt: string, setLoadingMessage: (msg: string) => void): Promise<FinalWebsiteData> => {
    setLoadingMessage('Generating website structure...');
    const structure = await generateWebsiteStructure(prompt);

    const finalSections: FinalSection[] = [];
    let imageCounter = 0;
    const totalImages = structure.sections.reduce((acc, section) => {
        if (section.type === 'hero') return acc + 2;
        if (section.type === 'about' && (section.content as AboutContent).imagePrompt) return acc + 1;
        if (section.type === 'gallery') return acc + (section.content as GalleryContent).images.length;
        if (section.type === 'carousel') return acc + (section.content as CarouselContent).cards.length;
        return acc;
    }, 0);

    for (const section of structure.sections) {
        let finalSection: FinalSection = { ...section, content: {} as any };

        if (section.type === 'hero') {
            const content = section.content as HeroContent;
            setLoadingMessage(`Generating images (hero)...`);
            const [imageBase64, depthMapBase64] = await Promise.all([
                generateImage(content.imagePrompt),
                generateImage(content.depthMapPrompt)
            ]);
            imageCounter += 2;
            // FIX: Destructure to omit prompt properties from the final content object, ensuring it matches FinalHeroContent type.
            const { imagePrompt, depthMapPrompt, ...restContent } = content;
            finalSection.content = { ...restContent, imageBase64, depthMapBase64 };
        } else if (section.type === 'about') {
            const content = section.content as AboutContent;
            // FIX: Destructure to omit imagePrompt and handle both cases (with/without image) correctly, ensuring content matches FinalAboutContent type.
            const { imagePrompt, ...restContent } = content;
            if (imagePrompt) {
                 setLoadingMessage(`Generating images (${imageCounter + 1}/${totalImages})...`);
                const imageBase64 = await generateImage(imagePrompt);
                imageCounter++;
                finalSection.content = { ...restContent, imageBase64 };
            } else {
                 finalSection.content = restContent;
            }
        } else if (section.type === 'gallery') {
            const content = section.content as GalleryContent;
            const imagePromises = content.images.map((img, i) => {
                 setLoadingMessage(`Generating images (${imageCounter + i + 1}/${totalImages})...`);
                return generateImage(img.imagePrompt);
            });
            const imageBase64s = await Promise.all(imagePromises);
            imageCounter += imageBase64s.length;
            finalSection.content = {
                title: content.title,
                images: imageBase64s.map(imageBase64 => ({ imageBase64 }))
            };
        } else if (section.type === 'carousel') {
            const content = section.content as CarouselContent;
            const cardImagePromises = content.cards.map((card, i) => {
                setLoadingMessage(`Generating images (${imageCounter + i + 1}/${totalImages})...`);
                return generateImage(card.imagePrompt);
            });
            const cardImageBase64s = await Promise.all(cardImagePromises);
            imageCounter += cardImageBase64s.length;

            finalSection.content = {
                title: content.title,
                cards: content.cards.map((card, i) => ({
                    title: card.title,
                    description: card.description,
                    imageBase64: cardImageBase64s[i]
                }))
            };
        } else {
            // FIX: This assignment is logically correct as Features, Contact, and Text sections don't change.
            // Add a type assertion to satisfy the TypeScript compiler which struggles with the wide union type here.
            finalSection.content = section.content as FeaturesContent | ContactContent | TextContent;
        }
        finalSections.push(finalSection);
    }
    
    return {
        title: structure.title,
        sections: finalSections,
    };
};