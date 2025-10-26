
import React from 'react';
import { Spinner } from './Spinner';

interface PromptControlsProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  loadingMessage: string;
}

export const PromptControls: React.FC<PromptControlsProps> = ({
  prompt,
  setPrompt,
  onGenerate,
  isLoading,
  loadingMessage,
}) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Describe Your Website</h2>
      <p className="text-sm text-gray-500 mb-4">
        Tell the AI what kind of website you need. Be as descriptive as possible. Mention the purpose, style, and content you'd like to see.
      </p>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., A sleek, modern portfolio for a photographer..."
        className="w-full flex-grow p-3 border border-gray-300 rounded-md shadow-sm resize-none
                   focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent
                   text-sm"
        disabled={isLoading}
      />
      <button
        onClick={onGenerate}
        disabled={isLoading}
        className="mt-4 w-full px-4 py-3 bg-black text-white text-sm font-bold rounded-md shadow-lg
                   hover:bg-gray-800 transition-all duration-200 ease-in-out
                   disabled:bg-gray-400 disabled:cursor-wait
                   flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Spinner />
            <span>{loadingMessage || 'Generating...'}</span>
          </>
        ) : (
          'Generate Website'
        )}
      </button>
    </div>
  );
};
