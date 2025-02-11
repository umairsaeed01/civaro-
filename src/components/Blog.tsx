import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "The Future of Business Communication",
    description: "Explore how AI is revolutionizing the way businesses interact with their customers.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "Mar 16, 2024"
  },
  {
    title: "Maximizing Efficiency with AI Receptionists",
    description: "Learn how businesses are saving time and resources with AI-powered communication solutions.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    date: "Mar 10, 2024"
  },
  {
    title: "AI in Healthcare: A Case Study",
    description: "How medical clinics are transforming patient experience with voice AI technology.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    date: "Mar 5, 2024"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">AI Insights & Updates</h2>
          </div>
        </AnimatedSection>
        
        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          {posts.map((post, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col overflow-hidden rounded-2xl shadow-xl bg-gray-800/50 border border-gray-700"
              >
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-400">
                      <time dateTime={post.date}>{post.date}</time>
                    </p>
                    <div className="mt-2">
                      <h3 className="text-xl subheading-gradient">{post.title}</h3>
                      <p className="mt-3 text-base text-gray-300">{post.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="text-base font-semibold text-indigo-400 hover:text-indigo-300 flex items-center"
                    >
                      Read full story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.a>
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