
import React from 'react';

interface HeaderProps {
    generatedHtml: string;
    isLoading: boolean;
    websiteTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ generatedHtml, isLoading, websiteTitle }) => {
    const handleDownload = () => {
        if (!generatedHtml) return;
        const blob = new Blob([generatedHtml], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${websiteTitle}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-black rounded-full"></div>
                <h1 className="text-xl font-bold text-gray-900">AI Website Builder</h1>
            </div>
            <button
                onClick={handleDownload}
                disabled={!generatedHtml || isLoading}
                className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md shadow-sm transition-colors
                           hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
                Download HTML
            </button>
        </header>
    );
};
