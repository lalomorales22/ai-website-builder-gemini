
import { WebsiteStructure, WebsiteComponent } from '../types';

const generateHeader = (props: WebsiteComponent['props']): string => {
    const navLinks = props.navLinks || ['Home', 'About', 'Contact'];
    return `
        <header class="bg-white shadow-md sticky top-0 z-10">
            <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
                <div class="text-2xl font-bold text-gray-800">${props.title || 'Logo'}</div>
                <div class="hidden md:flex items-center space-x-6">
                    ${navLinks.map((link: string) => `<a href="#${link.toLowerCase()}" class="text-gray-600 hover:text-gray-900 transition-colors">${link}</a>`).join('')}
                </div>
            </nav>
        </header>
    `;
};

const generateHero = (props: WebsiteComponent['props']): string => {
    return `
        <section class="bg-gray-100 text-center py-24 px-6">
            <div class="container mx-auto">
                <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">${props.title || 'Welcome to Our Website'}</h1>
                <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">${props.subtitle || 'Discover amazing things here. We are dedicated to providing the best service.'}</p>
                ${props.ctaButton ? `<a href="#" class="mt-8 inline-block bg-black text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-transform transform hover:scale-105">${props.ctaButton}</a>` : ''}
            </div>
        </section>
    `;
};

const generateFeatures = (props: WebsiteComponent['props']): string => {
    const features = props.features || [];
    if (features.length === 0) return '';
    return `
        <section id="features" class="py-20 bg-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">${props.title || 'Our Features'}</h2>
                <p class="text-gray-600 mb-12 max-w-2xl mx-auto">${props.subtitle || 'Here are some of the great features we offer.'}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${features.map((feature) => `
                        <div class="p-8 bg-gray-50 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                            <div class="text-5xl mb-4">${feature.icon || '✨'}</div>
                            <h3 class="text-xl font-semibold mb-2 text-gray-900">${feature.title}</h3>
                            <p class="text-gray-600">${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
};

const generateAbout = (props: WebsiteComponent['props']): string => {
    return `
        <section id="about" class="bg-gray-100 py-20">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">${props.title || 'About Us'}</h2>
                    <p class="text-gray-600 leading-relaxed text-lg">${props.content || 'We are a passionate team dedicated to creating amazing products. Our mission is to solve complex problems with elegant solutions.'}</p>
                </div>
            </div>
        </section>
    `;
};

const generateContact = (props: WebsiteComponent['props']): string => {
    return `
        <section id="contact" class="bg-white py-20">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">${props.title || 'Get In Touch'}</h2>
                <p class="text-gray-600 mb-8 max-w-2xl mx-auto">${props.subtitle || 'We’d love to hear from you! Reach out to us with any questions.'}</p>
                <a href="#" class="bg-black text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition-transform transform hover:scale-105">${props.ctaButton || 'Contact Us'}</a>
            </div>
        </section>
    `;
};

const generateFooter = (props: WebsiteComponent['props']): string => {
    const socialLinks = props.socialLinks || ['Twitter', 'LinkedIn', 'GitHub'];
    return `
        <footer class="bg-gray-900 text-white py-10">
            <div class="container mx-auto px-6 text-center">
                <p>${props.content || `© ${new Date().getFullYear()} ${props.title || 'AI Company'}. All rights reserved.`}</p>
                <div class="mt-4 flex justify-center space-x-6">
                    ${socialLinks.map((link: string) => `<a href="#" class="hover:text-gray-400 transition-colors">${link}</a>`).join('')}
                </div>
            </div>
        </footer>
    `;
};

const componentGenerators: { [key in WebsiteComponent['type']]: (props: WebsiteComponent['props']) => string } = {
    header: generateHeader,
    hero: generateHero,
    features: generateFeatures,
    about: generateAbout,
    contact: generateContact,
    footer: generateFooter,
};

export const generateHtmlFromStructure = (structure: WebsiteStructure): string => {
    const bodyContent = structure.components
        .map(component => {
            const generator = componentGenerators[component.type];
            return generator ? generator(component.props) : `<!-- Unknown component type: ${component.type} -->`;
        })
        .join('\\n');

    return `
        <!DOCTYPE html>
        <html lang="en" class="scroll-smooth">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale-1.0">
            <title>${structure.title}</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-white text-gray-800">
            ${bodyContent}
        </body>
        </html>
    `;
};
