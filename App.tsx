import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { PromptControls } from './components/PromptControls';
import { PreviewPane } from './components/PreviewPane';
import { generateWebsite } from './services/geminiService';
import { generateFinalHtml } from './utils/htmlGenerator';
import type { FinalWebsiteData } from './types';

export default function App() {
  const [prompt, setPrompt] = useState<string>('A modern portfolio website for a 3D artist named "Alex Vortex". It should have a futuristic, cyberpunk theme. Include a hero section with a stunning 3D parallax effect of a neon-lit city, a gallery of their work, an interactive carousel of their services, a features section about their skills (real-time rendering, procedural generation), and a contact form.');
  const [generatedHtml, setGeneratedHtml] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [websiteTitle, setWebsiteTitle] = useState<string>('website');

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for your website.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedHtml('');

    try {
      const finalData: FinalWebsiteData = await generateWebsite(prompt, setLoadingMessage);
      setWebsiteTitle(finalData.title.replace(/\s+/g, '-').toLowerCase());
      setLoadingMessage('Constructing HTML file...');
      const html = generateFinalHtml(finalData);
      setGeneratedHtml(html);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  }, [prompt]);

  return (
    <div className="flex flex-col h-screen font-sans bg-white text-gray-900">
      <Header generatedHtml={generatedHtml} isLoading={isLoading} websiteTitle={websiteTitle} />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        <div className="lg:col-span-4 xl:col-span-3 p-4 md:p-6 flex flex-col border-r border-gray-200 bg-white">
          <PromptControls
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            isLoading={isLoading}
            loadingMessage={loadingMessage}
          />
          {error && <div className="mt-4 p-3 bg-red-100 text-red-700 border border-red-200 rounded-md text-sm">{error}</div>}
        </div>
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col overflow-hidden">
          <PreviewPane htmlContent={generatedHtml} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
}