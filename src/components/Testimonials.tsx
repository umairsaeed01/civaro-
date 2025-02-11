import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Since integrating Civaro AI's AI receptionist, our clinic has seen a 30% improvement in appointment scheduling efficiency.",
    author: "Sarah Johnson",
    role: "Clinic Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The AI agent handles calls flawlessly, freeing up our staff to focus on patient care.",
    author: "Dr. Michael Chen",
    role: "Healthcare Administrator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">Success Stories</h2>
          </div>
        </AnimatedSection>
        
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700"
              >
                <div className="relative">
                  <svg
                    className="absolute -top-4 -left-4 h-8 w-8 text-indigo-400/40"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-lg text-gray-300">{testimonial.quote}</p>
                </div>
                <div className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500/50"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}