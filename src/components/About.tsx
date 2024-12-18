import React from 'react';
import { Code2, Cpu, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Advanced machine learning models to generate high-quality images',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get your generated images in seconds',
    },
    {
      icon: Code2,
      title: 'Modern Tech',
      description: 'Built with React and cutting-edge web technologies',
    },
    {
      icon: Cpu,
      title: 'Smart Processing',
      description: 'Intelligent image processing and enhancement',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            About Our Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we transform your ideas into stunning visual content using
            state-of-the-art AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="relative group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300
                         transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 
                            group-hover:opacity-10 rounded-xl transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4
                              group-hover:bg-indigo-200 transition-colors duration-300">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;