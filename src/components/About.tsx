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
              At Civaro, our mission is to simplify medical operations by automating routine tasks, allowing healthcare professionals to focus on patient care. We strive to enhance efficiency, reduce administrative burdens, and improve the overall patient experience.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We envision a future where every clinic, regardless of size, operates seamlessly—minimizing wait times, eliminating errors, and providing effortless patient interactions through smart automation.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6} className="mt-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700">
            <div className="px-6 py-12 sm:px-12">
              <h3 className="text-2xl subheading-gradient mb-6">Our Story</h3>
              <p className="text-gray-300 leading-relaxed">
                Civaro was born from a passion for solving real-world challenges in communication and operations. Our founders, with years of experience in automation and business process optimization, saw how industries struggled with inefficiencies—especially in high-demand environments like healthcare.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                What started as a broad mission to enhance business operations soon evolved into a specialized focus on medical clinics, where reducing administrative burdens directly improves patient care. Through extensive research and collaboration with industry experts, we developed solutions tailored to the unique needs of healthcare providers.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Today, Civaro is dedicated to transforming medical workflows, ensuring that every interaction—whether scheduling an appointment or handling inquiries—is smooth, efficient, and stress-free.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}