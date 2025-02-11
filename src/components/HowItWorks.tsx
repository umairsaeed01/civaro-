import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Phone,
    title: "Call Reception",
    description: "A customer calls your business, and our AI agent answers immediately."
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "The agent checks available time slots, books an appointment, and collects necessary details."
  },
  {
    icon: MessageSquare,
    title: "Confirmation",
    description: "An automatic confirmation email is sent to the customer."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">How It Works</h2>
            <p className="mt-4 text-lg text-gray-300">
              Experience the future of business communication
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="text-center mt-8">
            <p className="text-xl text-indigo-400 font-semibold">
              Try medical appointment: <a href="tel:+61361550626" className="hover:text-indigo-300 transition-colors">Call on +61 3 6155 0626</a>
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                <div className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 h-0.5 w-full transform translate-x-1/2 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative flex flex-col items-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600/20 ring-2 ring-indigo-500/50">
                      <step.icon className="h-8 w-8 text-indigo-400" />
                    </div>
                    <h3 className="mt-6 text-xl subheading-gradient">{step.title}</h3>
                    <p className="mt-2 text-center text-gray-300">{step.description}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}