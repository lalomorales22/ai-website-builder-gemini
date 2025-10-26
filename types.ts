
export interface WebsiteComponent {
  type: 'header' | 'hero' | 'features' | 'about' | 'contact' | 'footer';
  // Using a flexible props object, but specific properties are expected by the htmlGenerator
  props: {
    title?: string;
    subtitle?: string;
    content?: string;
    ctaButton?: string;
    navLinks?: string[];
    socialLinks?: string[];
    features?: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

export interface WebsiteStructure {
  title: string;
  components: WebsiteComponent[];
}
