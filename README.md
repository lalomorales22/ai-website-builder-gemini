# AI Website Builder with Gemini

<div align="center">

A powerful web application that uses Google's Gemini AI to generate complete, professional websites from simple text descriptions. Transform your ideas into stunning, fully-functional HTML websites in seconds.

</div>

## 🚀 Overview

AI Website Builder is an intelligent tool that leverages Google's Gemini AI to create complete, modern single-page websites based on your text descriptions. Simply describe what you want, and the AI will generate a professionally styled website with multiple sections, complete with responsive design and modern aesthetics.

## ✨ Features

- **AI-Powered Generation**: Uses Google Gemini 2.5 Flash model to understand your requirements and generate appropriate website structures
- **Structured JSON Output**: Generates websites using a well-defined schema for consistent, high-quality results
- **Multiple Component Types**: Supports headers, hero sections, feature showcases, about sections, contact forms, and footers
- **Modern Design**: Automatically creates websites with Tailwind CSS for beautiful, responsive layouts
- **Live Preview**: Real-time preview of your generated website in an embedded iframe
- **One-Click Download**: Export your generated website as a standalone HTML file
- **Customizable Content**: Generates compelling content including headings, descriptions, and call-to-action buttons
- **Responsive Design**: All generated websites are mobile-friendly and adapt to different screen sizes

## 🎯 Use Cases

- Rapid prototyping of landing pages
- Creating portfolio websites
- Building product showcase pages
- Generating event or conference pages
- Quick mockups for client presentations
- Learning web design patterns

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Google Gemini API Key** - Get one from [Google AI Studio](https://aistudio.google.com/app/apikey)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lalomorales22/ai-website-builder-gemini.git
   cd ai-website-builder-gemini
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   Create a `.env.local` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```
   
   Replace `your_api_key_here` with your actual Gemini API key.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` to start using the app.

## 💻 Usage

1. **Describe Your Website**: In the left panel, enter a detailed description of the website you want to create. Be specific about:
   - The purpose (e.g., landing page, portfolio, product showcase)
   - The style (e.g., modern, minimalist, colorful)
   - The content sections you want (e.g., features, about, contact)
   - The tone and theme

2. **Generate**: Click the "Generate Website" button to let the AI work its magic

3. **Preview**: View your generated website in the live preview panel on the right

4. **Download**: Click "Download HTML" to save your website as a standalone HTML file

### Example Prompts

```
A modern landing page for a new AI-powered photo editing app called "EnhanceAI". 
It should have a clean, dark theme. Include a hero section with a catchy headline, 
a features section highlighting three key features, and a contact section.
```

```
A sleek portfolio website for a freelance photographer specializing in landscape 
photography. Use a minimalist design with a light theme. Include a hero section 
with a welcome message, an about section describing the photographer's style, 
and a contact section.
```

```
A vibrant landing page for a music festival called "Summer Beats 2024". 
Use energetic colors and modern design. Include a hero section with event details, 
a features section about the lineup and venue, and a ticket purchase section.
```

## 🏗️ Technology Stack

- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **AI Model**: Google Gemini 2.5 Flash
- **Styling**: Tailwind CSS (via CDN)
- **Language**: TypeScript 5.8.2

## 📁 Project Structure

```
ai-website-builder-gemini/
├── components/
│   ├── Header.tsx          # Top navigation and download button
│   ├── PromptControls.tsx  # Text input and generate button
│   ├── PreviewPane.tsx     # Website preview iframe
│   └── Spinner.tsx         # Loading animation
├── services/
│   └── geminiService.ts    # Gemini API integration and schema
├── utils/
│   └── htmlGenerator.ts    # HTML generation from AI structure
├── App.tsx                 # Main application component
├── index.tsx               # React entry point
├── types.ts                # TypeScript interfaces
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🔧 How It Works

1. **User Input**: The user enters a description of their desired website
2. **AI Processing**: The description is sent to Google's Gemini AI with a structured schema
3. **JSON Generation**: Gemini returns a JSON structure containing:
   - Website title
   - Component definitions (header, hero, features, etc.)
   - Content for each component (text, icons, buttons)
4. **HTML Generation**: The JSON structure is transformed into HTML using predefined templates
5. **Styling**: Tailwind CSS classes are applied for modern, responsive design
6. **Preview**: The generated HTML is displayed in an iframe
7. **Export**: Users can download the complete HTML file

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

## 📦 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Component Types

The AI can generate the following website components:

- **Header**: Navigation bar with logo and links
- **Hero**: Main banner with headline, subtitle, and CTA
- **Features**: Grid of features with icons and descriptions
- **About**: Information about the company or person
- **Contact**: Contact section with CTA button
- **Footer**: Footer with copyright and social links

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- View the app in AI Studio: [https://ai.studio/apps/drive/1wKGKrfGFEYu3cdCHcv1O2bctEUGoV6wx](https://ai.studio/apps/drive/1wKGKrfGFEYu3cdCHcv1O2bctEUGoV6wx)
- Get your Gemini API Key: [Google AI Studio](https://aistudio.google.com/app/apikey)

## 🙏 Acknowledgments

- Built with [Google Gemini AI](https://deepmind.google/technologies/gemini/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [React](https://react.dev/) and [Vite](https://vitejs.dev/)

---

Made with ❤️ by [lalomorales22](https://github.com/lalomorales22)
