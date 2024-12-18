import React, { useState } from 'react';
import { ImageIcon, MessageCircle, Info, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'about', label: 'About', icon: Info },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'generate', label: 'Generate', icon: ImageIcon },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2" onClick={() => setActiveTab('home')}>
              <ImageIcon className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">AI Generator</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${activeTab === id 
                      ? 'text-indigo-600 bg-indigo-50 shadow-indigo-100/50 shadow-inner' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setActiveTab(id);
                setIsOpen(false);
              }}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium
                ${activeTab === id 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;