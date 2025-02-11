import React from 'react';
import { ArrowRight, Brain, Calendar, CheckCircle, Clock, MessageSquare, Phone, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-gray-900/80 glass-nav z-50 border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Civaro AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <main>
        <Hero />
        <About />
        <Solutions />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <footer className="bg-gray-950 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-xl font-bold text-white">Civaro AI</span>
              </div>
              <p className="mt-4 text-gray-400">Transforming business communication with intelligent voice AI solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Civaro AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;