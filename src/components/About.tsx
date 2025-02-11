import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.4}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">Our Mission & Vision</h2>
            <p className="mt-8 text-lg leading-8 text-gray-300">
              At Civaro AI, our mission is to revolutionize everyday business interactions by delivering intelligent, reliable, and efficient AI agents. We believe that by automating routine tasks, businesses can unlock greater creativity and focus on building meaningful relationships.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We envision a future where every business, regardless of size, leverages AI to enhance productivity and customer satisfaction—making complex operations seamless and intuitive.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6} className="mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700">
            <div className="px-6 py-12 sm:px-12">
              <h3 className="text-2xl subheading-gradient mb-6">Our Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Founded by AI enthusiasts with decades of experience in business process optimization, Civaro AI emerged from a simple observation: businesses spend countless hours on routine communication tasks that could be automated intelligently. Our founder's passion for AI and commitment to simplifying business processes led to the development of our cutting-edge voice AI technology.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Today, we're proud to be at the forefront of the AI revolution, helping businesses across industries transform their operations and deliver exceptional customer experiences.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}