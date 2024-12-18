import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageGenerator from './components/ImageGenerator';
import About from './components/About';
import Chat from './components/Chat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <About />
        <ImageGenerator />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;