
import React from 'react';

interface PreviewPaneProps {
  htmlContent: string;
  isLoading: boolean;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ htmlContent, isLoading }) => {
  return (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300">
        {isLoading && !htmlContent ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
            <svg className="animate-spin h-8 w-8 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="font-semibold">Building your website...</p>
            <p className="text-sm">This may take a moment.</p>
          </div>
        ) : htmlContent ? (
          <iframe
            srcDoc={htmlContent}
            title="Website Preview"
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
             <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 01-6.23-.693L4.2 15.3m15.6 0-1.57.393m0 0l-1.57-.393m0 0l-1.57-.393m0 0l-1.57.393M12 12l-3.47 3.47m6.94 0L12 12m-3.47 3.47a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 010-1.061l1.59-1.59a.75.75 0 011.06 0l1.59 1.59a.75.75 0 010 1.061z" />
                </svg>
                <h3 className="font-semibold text-lg text-gray-600">Your website preview will appear here.</h3>
                <p className="mt-1">Describe your desired website and click "Generate Website" to start.</p>
            </div>
        )}
      </div>
    </div>
  );
};
