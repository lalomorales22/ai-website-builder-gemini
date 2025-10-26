
import { GoogleGenAI, Type } from "@google/genai";
import { WebsiteStructure } from '../types';

// FIX: Initialize the GoogleGenAI client. Ensure API_KEY is set in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const websiteSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "The title of the website, for the browser's <title> tag." },
    components: {
      type: Type.ARRAY,
      description: "An array of components that make up the website's structure.",
      items: {
        type: Type.OBJECT,
        properties: {
          type: {
            type: Type.STRING,
            description: 'The type of component. Must be one of: "header", "hero", "features", "about", "contact", "footer".'
          },
          props: {
            type: Type.OBJECT,
            description: "An object containing properties specific to this component type. Only include relevant properties for the given 'type'.",
            properties: {
              title: { type: Type.STRING, description: "Primary text or heading for the component." },
              subtitle: { type: Type.STRING, description: "Secondary text or subheading." },
              content: { type: Type.STRING, description: "Main body text content." },
              ctaButton: { type: Type.STRING, description: "Text for a call-to-action button." },
              navLinks: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'An array of strings for navigation links, typically for a "header".'
              },
              socialLinks: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'An array of social media platform names, typically for a "footer".'
              },
              features: {
                type: Type.ARRAY,
                description: 'An array of feature objects, each with an icon, title, and description. For "features" type.',
                items: {
                  type: Type.OBJECT,
                  properties: {
                    icon: { type: Type.STRING, description: "A single emoji to represent the feature visually." },
                    title: { type: Type.STRING, description: "The title of the feature." },
                    description: { type: Type.STRING, description: "A brief description of the feature." }
                  },
                  required: ["icon", "title", "description"]
                }
              },
            }
          }
        },
        required: ['type', 'props']
      }
    }
  },
  required: ['title', 'components']
};

export const generateWebsite = async (prompt: string): Promise<WebsiteStructure> => {
    const fullPrompt = `
      Based on the following user request, generate a JSON structure for a complete, modern, single-page website.
      The website should look professional and aesthetically pleasing.
      Ensure the JSON output strictly adheres to the provided schema.

      User Request: "${prompt}"

      The website should include a header, a hero section, at least one content section (like features, about, or services), and a footer.
      Generate compelling and relevant content for all sections. The tone should match the user's request.
    `;

    // FIX: Use ai.models.generateContent to generate structured JSON data.
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: websiteSchema,
        }
    });
    
    // FIX: Access the text property and parse the JSON string.
    const jsonStr = response.text.trim();
    try {
        const parsedJson = JSON.parse(jsonStr);
        return parsedJson as WebsiteStructure;
    } catch (e) {
        console.error("Failed to parse Gemini response:", e);
        console.error("Received string:", jsonStr);
        throw new Error("Invalid JSON response from the API.");
    }
};
