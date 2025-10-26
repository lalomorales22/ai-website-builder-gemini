export type SectionType = 'hero' | 'about' | 'gallery' | 'features' | 'contact' | 'text' | 'carousel';
export type IconName = 'star' | 'bolt' | 'shield' | 'code' | 'globe' | 'check';

export interface HeroContent {
  title: string;
  subtitle: string;
  imagePrompt: string;
  depthMapPrompt: string;
}

export interface AboutContent {
  title: string;
  text: string;
  imagePrompt?: string;
}

export interface GalleryContent {
  title: string;
  images: { imagePrompt: string }[];
}

export interface FeaturesContent {
  title: string;
  features: {
    icon: IconName;
    title: string;
    description: string;
  }[];
}

export interface ContactContent {
  title: string;
  email: string;
  text: string;
}

export interface TextContent {
  title: string;
  text: string;
}

export interface CarouselCard {
    title: string;
    description: string;
    imagePrompt: string;
}

export interface CarouselContent {
    title: string;
    cards: CarouselCard[];
}

export interface Section {
  type: SectionType;
  content: HeroContent | AboutContent | GalleryContent | FeaturesContent | ContactContent | TextContent | CarouselContent;
}

export interface WebsiteData {
  title:string;
  sections: Section[];
}


// Final data structures with image data
export interface FinalHeroContent extends Omit<HeroContent, 'imagePrompt' | 'depthMapPrompt'> {
  imageBase64: string;
  depthMapBase64: string;
}

export interface FinalAboutContent extends Omit<AboutContent, 'imagePrompt'> {
  imageBase64?: string;
}

export interface FinalGalleryContent extends Omit<GalleryContent, 'images'> {
    images: { imageBase64: string }[];
}

export interface FinalCarouselCard extends Omit<CarouselCard, 'imagePrompt'> {
    imageBase64: string;
}

export interface FinalCarouselContent extends Omit<CarouselContent, 'cards'> {
    cards: FinalCarouselCard[];
}


export interface FinalSection {
    type: SectionType;
    content: FinalHeroContent | FinalAboutContent | FinalGalleryContent | FeaturesContent | ContactContent | TextContent | FinalCarouselContent;
}

export interface FinalWebsiteData {
    title: string;
    sections: FinalSection[];
}