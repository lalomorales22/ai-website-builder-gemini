import type { FinalWebsiteData, FinalSection, IconName } from '../types';

const getIconSVG = (icon: IconName) => {
    const icons: Record<IconName, string> = {
        star: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>`,
        bolt: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
        shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" /></svg>`,
        code: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
        globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0 0 12 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0a11.953 11.953 0 0 1-2.288 2.247M3.284 14.253a11.953 11.953 0 0 1 2.288 2.247m0 0a8.959 8.959 0 0 1 2.918 2.288m-2.918-2.288a8.959 8.959 0 0 0-2.918 2.288m12.478-4.535a11.953 11.953 0 0 0-2.288-2.247m-10.19 0a11.953 11.953 0 0 1-2.288-2.247m12.478 0a8.959 8.959 0 0 0 2.918-2.288m-2.918 2.288a8.959 8.959 0 0 1 2.918-2.288" /></svg>`,
        check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`
    };
    return icons[icon] || icons.star;
};

const getSocialIcon = (name: 'x' | 'instagram' | 'facebook' | 'linkedin' | 'reddit' | 'github') => {
    const svgs = {
        'x': `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-1.78 13h2.683L4.032 2.15H1.241z"/></svg>`,
        'instagram': `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372.527-.205.973-.478 1.417-.923.445-.444.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.92c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.28-.24-.705-.276-1.485C1.44 10.39 1.442 10.147 1.442 8s.002-2.39.047-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.096-.047 3.232-.047zM8 3.882a4.102 4.102 0 1 0 0 8.204 4.102 4.102 0 0 0 0-8.204zm0 6.762a2.662 2.662 0 1 1 0-5.324 2.662 2.662 0 0 1 0 5.324zM12.5 3.168a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92z"/></svg>`,
        'facebook': `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0 0 3.603 0 8.049c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>`,
        'linkedin': `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>`,
        'reddit': `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.236 10.05c.168-.23.486-.23.654 0l1.24 1.686c.23.312.03.764-.348.764H3.218c-.378 0-.578-.452-.348-.764l1.24-1.686c.168-.23.486-.23.654 0l.85 1.152h2.97l.85-1.152zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-3.344 6.368a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0zm5.508 0a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0zM8 13.333a1.77 1.77 0 0 1-1.352-.64l-.004-.006a.71.71 0 0 1 1.056-.96l.3.348.3-.348a.71.71 0 0 1 1.056.96l-.004.006A1.77 1.77 0 0 1 8 13.333z"/></svg>`,
        'github': `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>`,
    };
    return svgs[name] || '';
};


const generateSectionHTML = (section: FinalSection): string => {
    switch (section.type) {
        case 'hero':
            const hero = section.content as import('../types').FinalHeroContent;
            return `
        <section id="hero-container" class="h-screen w-full relative overflow-hidden">
            <div id="hero-canvas" class="absolute top-0 left-0 w-full h-full"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40 p-4 z-10">
                <h1 class="text-5xl md:text-7xl font-black tracking-tighter animate-fade-in-down">${hero.title}</h1>
                <p class="mt-4 text-lg md:text-2xl font-light max-w-2xl animate-fade-in-up">${hero.subtitle}</p>
            </div>
            <script type="x-shader/x-vertex" id="vertexShader">
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            </script>
            <script type="x-shader/x-fragment" id="fragmentShader">
                varying vec2 vUv;
                uniform sampler2D uImage;
                uniform sampler2D uDepthMap;
                uniform vec2 uMouse;
                uniform float uIntensity;

                void main() {
                    vec4 depth = texture2D(uDepthMap, vUv);
                    float depthValue = depth.r;
                    vec2 displacedUv = vec2(vUv.x + uMouse.x * depthValue * uIntensity, vUv.y + uMouse.y * depthValue * uIntensity);
                    vec4 color = texture2D(uImage, displacedUv);
                    gl_FragColor = color;
                }
            </script>
            <script>
                // Store image data in window to be accessed by Three.js script
                window.heroImageData = {
                    image: 'data:image/png;base64,${hero.imageBase64}',
                    depthMap: 'data:image/png;base64,${hero.depthMapBase64}'
                };
            </script>
        </section>`;
        
        case 'about':
            const about = section.content as import('../types').FinalAboutContent;
            const hasImage = !!about.imageBase64;
            const gridClasses = hasImage ? 'md:grid-cols-2 gap-12' : 'md:grid-cols-1';
            const textOrder = hasImage ? 'md:order-1' : '';
            return `
            <section class="py-16 md:py-24 px-8 bg-white scroll-anim">
              <div class="max-w-6xl mx-auto grid ${gridClasses} items-center">
                ${hasImage ? `
                <div class="mb-8 md:mb-0">
                    <div class="aspect-square rounded-xl shadow-2xl overflow-hidden border-8 border-black">
                         <img src="data:image/png;base64,${about.imageBase64}" alt="${about.title}" class="w-full h-full object-cover">
                    </div>
                </div>` : ''}
                <div class="${textOrder}">
                  <h2 class="text-4xl font-bold mb-4 tracking-tight">${about.title}</h2>
                  <p class="text-lg text-gray-600 leading-relaxed">${about.text.replace(/\n/g, '<br/>')}</p>
                </div>
              </div>
            </section>`;

        case 'gallery':
            const gallery = section.content as import('../types').FinalGalleryContent;
            return `
            <section class="py-16 md:py-24 px-8 bg-gray-50 scroll-anim">
              <div class="max-w-7xl mx-auto">
                <h2 class="text-4xl font-bold text-center mb-12 tracking-tight">${gallery.title}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  ${gallery.images.map((img, i) => `
                    <div class="aspect-square bg-black rounded-lg shadow-lg overflow-hidden border-4 border-black group animate-stagger" style="--stagger-delay: ${i * 100}ms">
                      <img src="data:image/png;base64,${img.imageBase64}" alt="Gallery image ${i + 1}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>`;

        case 'features':
            const features = section.content as import('../types').FeaturesContent;
            return `
            <section class="py-16 md:py-24 px-8 bg-white scroll-anim">
              <div class="max-w-6xl mx-auto">
                <h2 class="text-4xl font-bold text-center mb-12 tracking-tight">${features.title}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  ${features.features.map((feature, i) => `
                    <div class="flex flex-col items-start p-6 border border-black rounded-lg shadow-md animate-stagger" style="--stagger-delay: ${i * 100}ms">
                      <div class="p-3 bg-black text-white rounded-full mb-4">
                        ${getIconSVG(feature.icon)}
                      </div>
                      <h3 class="text-xl font-bold mb-2">${feature.title}</h3>
                      <p class="text-gray-600">${feature.description}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>`;
        
        case 'carousel':
            const carousel = section.content as import('../types').FinalCarouselContent;
            const cardCount = carousel.cards.length;
            return `
            <section id="carousel-section" class="py-16 md:py-24 bg-gray-50 overflow-hidden" style="min-height: 250vh;">
                <div id="carousel-sticky-container" class="h-screen w-full sticky top-0 flex flex-col items-center justify-center">
                    <h2 class="text-4xl font-bold text-center mb-12 tracking-tight absolute top-16 md:top-24 z-10">${carousel.title}</h2>
                    <div id="carousel-ring" class="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    ${carousel.cards.map((card, i) => {
                        const angle = (i / cardCount) * 360;
                        return `
                        <div class="carousel-card" style="--angle: ${angle}deg;">
                          <div class="w-full h-2/5 rounded-md overflow-hidden mb-3 border-2 border-black">
                              <img src="data:image/png;base64,${card.imageBase64}" class="w-full h-full object-cover">
                          </div>
                          <h3 class="font-bold text-lg">${card.title}</h3>
                          <p class="text-sm text-gray-600">${card.description}</p>
                        </div>
                        `;
                    }).join('')}
                    </div>
                </div>
            </section>`;

        case 'contact':
            const contact = section.content as import('../types').ContactContent;
            return `
            <section class="py-16 md:py-24 px-8 bg-black text-white scroll-anim">
              <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-4xl font-bold mb-4 tracking-tight">${contact.title}</h2>
                <p class="text-lg text-gray-300 mb-8 max-w-xl mx-auto">${contact.text}</p>
                <a href="mailto:${contact.email}" class="inline-block bg-white text-black font-bold py-3 px-8 rounded-md shadow-lg transition-transform hover:scale-105">
                  ${contact.email}
                </a>
              </div>
            </section>`;
            
        case 'text':
             const text = section.content as import('../types').TextContent;
             return `
             <section class="py-16 md:py-24 px-8 bg-white scroll-anim">
               <div class="max-w-4xl mx-auto">
                 <h2 class="text-4xl font-bold mb-6 tracking-tight">${text.title}</h2>
                 <div class="prose lg:prose-xl text-gray-700">
                    ${text.text.split('\n').filter(l => l.trim()).map(p => `<p>${p}</p>`).join('')}
                 </div>
               </div>
             </section>`;

        default:
            return `<!-- Unknown section type -->`;
    }
};

export const generateFinalHtml = (data: FinalWebsiteData): string => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background-color: #000;
            color: #111827;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            cursor: none;
        }
        #cursor-dot {
            position: fixed; top: 0; left: 0; width: 8px; height: 8px; background-color: black; border-radius: 50%;
            pointer-events: none; transform: translate(-50%, -50%); z-index: 9999;
        }
        .trail {
            position: fixed; pointer-events: none; z-index: 9998; color: black;
            font-family: monospace; font-size: 14px;
        }
        @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out 0.5s forwards; opacity: 0; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.8s forwards; opacity: 0; }

        .scroll-anim {
            opacity: 0; transform: translateY(30px);
            animation: fade-in-up-scroll linear forwards;
            animation-timeline: view();
            animation-range-start: entry 10%; animation-range-end: entry 40%;
        }
        @keyframes fade-in-up-scroll { to { opacity: 1; transform: translateY(0); } }

        .animate-stagger {
            opacity: 0; transform: translateY(20px);
            animation: fade-in-up-scroll linear forwards; animation-delay: var(--stagger-delay, 0ms);
        }
        .prose { max-width: 65ch; } .prose p { margin-bottom: 1.25em; }
        .lg\\:prose-xl p { font-size: 1.25rem; line-height: 1.75; }

        #carousel-ring { transform-style: preserve-3d; transform: rotateX(-10deg); }
        .carousel-card {
            position: absolute; left: 50%; top: 50%;
            width: 224px; height: 288px; margin-left: -112px; margin-top: -144px;
            border-radius: 0.75rem; border: 4px solid black; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
            background-color: white; padding: 1rem;
            display: flex; flex-direction: column; align-items: center; text-align: center;
            transform: rotateY(var(--angle)) translateZ(400px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .carousel-card:hover { transform: rotateY(var(--angle)) translateZ(400px) scale(1.05); box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); }
    </style>
</head>
<body id="smooth-wrapper">
    <div id="cursor-dot"></div>
    <div id="smooth-content">
        <main>
            ${data.sections.map(generateSectionHTML).join('\n')}
        </main>
        <footer class="text-center py-8 bg-black text-gray-400 text-sm">
            <div class="flex justify-center items-center gap-6 mb-4">
                <a href="#" aria-label="X/Twitter" class="text-gray-400 hover:text-white transition-colors">${getSocialIcon('x')}</a>
                <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-white transition-colors">${getSocialIcon('instagram')}</a>
                <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-white transition-colors">${getSocialIcon('facebook')}</a>
                <a href="#" aria-label="LinkedIn" class="text-gray-400 hover:text-white transition-colors">${getSocialIcon('linkedin')}</a>
                <a href="#" aria-label="Reddit" class="text-gray-400 hover:text-white transition-colors">${getSocialIcon('reddit')}</a>
                <a href="#" aria-label="GitHub" class="text-gray-400 hover:text-white transition-colors">${getSocialIcon('github')}</a>
            </div>
            <p>Built with AI Website Builder</p>
        </footer>
    </div>
    
    <script src="https://unpkg.com/three@0.159.0/build/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

    <script>
        // Lenis Smooth Scroll
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);

        // Three.js Hero Parallax
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer && window.heroImageData) {
            let scene, camera, renderer, material, mouse = new THREE.Vector2();
            const initThree = () => {
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.z = 1;
                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setSize(window.innerWidth, window.innerHeight);
                document.getElementById('hero-canvas')?.appendChild(renderer.domElement);
                const loader = new THREE.TextureLoader();
                material = new THREE.ShaderMaterial({
                    uniforms: {
                        uImage: { value: loader.load(window.heroImageData.image) },
                        uDepthMap: { value: loader.load(window.heroImageData.depthMap) },
                        uMouse: { value: new THREE.Vector2(0, 0) }, uIntensity: { value: 0.05 },
                    },
                    vertexShader: document.getElementById('vertexShader').textContent,
                    fragmentShader: document.getElementById('fragmentShader').textContent,
                });
                scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
                window.addEventListener('resize', () => {
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                });
                document.addEventListener('mousemove', (e) => {
                    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                });
                const animate = () => {
                    requestAnimationFrame(animate);
                    material.uniforms.uMouse.value.x += (mouse.x - material.uniforms.uMouse.value.x) * 0.05;
                    material.uniforms.uMouse.value.y += (mouse.y - material.uniforms.uMouse.value.y) * 0.05;
                    renderer.render(scene, camera);
                };
                animate();
            };
            initThree();
        }

        // ASCII Trail Cursor
        const cursorDotEl = document.getElementById('cursor-dot');
        const trailChars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        const trailElements = Array.from({ length: 20 }, () => {
            const el = document.createElement('span');
            el.className = 'trail';
            el.style.opacity = 0;
            document.body.appendChild(el);
            return el;
        });
        let trailIndex = 0;
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorDotEl, { duration: 0.3, x: e.clientX, y: e.clientY, ease: 'power2.out' });
            
            const trailEl = trailElements[trailIndex];
            trailIndex = (trailIndex + 1) % trailElements.length;
            
            trailEl.textContent = trailChars[Math.floor(Math.random() * trailChars.length)];
            gsap.set(trailEl, { x: e.clientX, y: e.clientY, opacity: 1, scale: 1 });
            // FIX: Avoid nested template literals by using string concatenation, which resolves parsing errors.
            gsap.to(trailEl, {
                duration: 1.5, opacity: 0, scale: 0.5,
                x: '+=' + ((Math.random() - 0.5) * 100),
                y: '+=' + ((Math.random() - 0.5) * 100),
                ease: "power2.out"
            });
        });

        // GSAP General Scroll Animations
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.animate-stagger').forEach(el => {
            gsap.fromTo(el, { y: 30, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
                delay: (parseFloat(el.style.getPropertyValue('--stagger-delay')) || 0) / 1000
            });
        });

        // GSAP Carousel Animation
        const carouselSection = document.getElementById('carousel-section');
        if (carouselSection) {
            gsap.to('#carousel-ring', {
                rotateY: -360,
                ease: 'none',
                scrollTrigger: {
                    trigger: carouselSection,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                    pin: '#carousel-sticky-container'
                }
            });
        }
    </script>
</body>
</html>`;
};