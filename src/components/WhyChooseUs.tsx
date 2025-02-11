import React from 'react';
import { Zap, Shield, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: "Scalable Solution",
    description: "Our AI technology grows with your business, adapting to increased demand and new requirements without missing a beat."
  },
  {
    icon: Cpu,
    title: "Continuous Learning",
    description: "Our AI agents continuously learn and improve from interactions, ensuring better performance over time."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24">
          <AnimatedSection>
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">Why Choose Civaro AI?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our commitment to simplicity and reliability sets us apart. We combine advanced AI with user-friendly interfaces, ensuring that even non-tech-savvy users quickly understand and appreciate our solution. Our agents are designed to integrate seamlessly with your existing systems and enhance operational efficiency.
            </p>
          </AnimatedSection>
          
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-10">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={0.2 * (index + 1)}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex p-6 bg-gray-800/50 rounded-2xl border border-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600/20 ring-2 ring-indigo-500/50">
                        <feature.icon className="h-6 w-6 text-indigo-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg font-medium text-white">{feature.title}</dt>
                      <dd className="mt-2 text-gray-300">{feature.description}</dd>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}