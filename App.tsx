
import React, { useState } from 'react';
import { Header } from './components/Header';
import { PromptControls } from './components/PromptControls';
import { PreviewPane } from './components/PreviewPane';
import { generateWebsite } from './services/geminiService';
import { generateHtmlFromStructure } from './utils/htmlGenerator';
import { WebsiteStructure } from './types';

function App() {
  const [prompt, setPrompt] = useState<string>('A modern landing page for a new AI-powered photo editing app called "EnhanceAI". It should have a clean, dark theme. Include a hero section with a catchy headline, a features section highlighting three key features (e.g., "Magic Retouch", "AI Sky Replacement", "Instant Filters"), and a simple contact section.');
  const [generatedHtml, setGeneratedHtml] = useState<string>('');
  const [websiteTitle, setWebsiteTitle] = useState<string>('My AI Website');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleGenerate = async () => {
    if (!prompt || isLoading) return;
    setIsLoading(true);
    setGeneratedHtml('');
    setError('');
    setLoadingMessage('Contacting AI assistant...');

    try {
      // FIX: Call gemini service to get website structure
      const websiteStructure: WebsiteStructure = await generateWebsite(prompt);
      
      setLoadingMessage('Assembling your website...');
      
      // FIX: Generate HTML from the received structure
      const html = generateHtmlFromStructure(websiteStructure);
      
      setWebsiteTitle(websiteStructure.title || 'AI Generated Website');
      setGeneratedHtml(html);
      
    } catch (err) {
      console.error("Failed to generate website:", err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Sorry, something went wrong. Please try again. Error: ${errorMessage}`);
      setGeneratedHtml(`<div style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 20px; text-align: center; color: red;">
          <p>${error}</p>
        </div>`);
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-100">
      <Header generatedHtml={generatedHtml} isLoading={isLoading} websiteTitle={websiteTitle} />
      <main className="flex-grow flex min-h-0">
        <aside className="w-full md:w-1/3 lg:w-1/4 p-4 border-r border-gray-200 bg-white flex flex-col">
          <PromptControls 
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            isLoading={isLoading}
            loadingMessage={loadingMessage}
          />
           {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}
        </aside>
        <section className="flex-grow">
          <PreviewPane htmlContent={generatedHtml} isLoading={isLoading} />
        </section>
      </main>
    </div>
  );
}

export default App;
