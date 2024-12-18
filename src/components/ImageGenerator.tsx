import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    // Simulated API call - replace with actual AI API integration
    setTimeout(() => {
      const mockImages = [
        'https://images.unsplash.com/photo-1699114053140-9c42dc9f7330?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1699391618617-e70493c00cd7?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1699116550661-bea051952f96?w=500&h=500&fit=crop',
      ];
      setImages([...mockImages, ...images]);
      setIsLoading(false);
      setPrompt('');
    }, 2000);
  };

  return (
    <section id="generate" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Generate Your Image
          </h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={handleGenerate}
                disabled={isLoading || !prompt.trim()}
                className={`px-6 py-3 rounded-lg font-semibold text-white 
                  ${isLoading || !prompt.trim() 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200'
                  }`}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Generate
                  </div>
                )}
              </button>
            </div>

            {/* Generated Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-200"
                >
                  <img
                    src={image}
                    alt={`Generated ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <a
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full"
                    >
                      <ImageIcon className="h-5 w-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;