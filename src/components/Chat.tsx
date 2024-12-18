import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hello! How can I help you with image generation today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { type: 'user', content: input }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I understand you'd like help with image generation. You can try using specific descriptions, including details about style, colors, and composition for better results."
      }]);
    }, 1000);
  };

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 bg-indigo-600">
            <h2 className="text-xl font-semibold text-white">AI Assistant Chat</h2>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${message.type === 'user' ? 'bg-indigo-100' : 'bg-gray-100'}`}>
                  {message.type === 'user' ? (
                    <User className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <Bot className="h-5 w-5 text-gray-600" />
                  )}
                </div>
                <div className={`max-w-[75%] px-4 py-2 rounded-lg
                  ${message.type === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                  }`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-2 rounded-lg ${
                  input.trim() 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;