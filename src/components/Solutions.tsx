import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Clock, Calendar, Shield, CheckCircle, MessageSquare, Building2, Scale, Wrench, Store } from 'lucide-react';

const solutions = [
  {
    title: "Medical Clinic Reception",
    description: "Reduce wait times and administrative workload with our voice AI agent that efficiently manages incoming calls, schedules appointments, and sends automated confirmations.",
    features: [
      { icon: Clock, text: "24/7 availability" },
      { icon: Calendar, text: "Seamless calendar integration" },
      { icon: Shield, text: "Reduced human error" },
      { icon: CheckCircle, text: "Improved patient experience" }
    ]
  },
  {
    title: "Real Estate Agencies",
    description: "Boost lead conversion and client engagement with our AI agent tailored for real estate. It qualifies leads, handles property inquiries, and automates follow-ups to maximize opportunities.",
    features: [
      { icon: MessageSquare, text: "Automated lead qualification" },
      { icon: Clock, text: "Timely follow-ups" },
      { icon: Building2, text: "Enhanced client communication" },
      { icon: CheckCircle, text: "Streamlined inquiry management" }
    ]
  },
  {
    title: "Law Firms",
    description: "Improve client intake and operational efficiency with our AI legal assistant. It answers basic client queries, schedules consultations, and automates document processes, ensuring a smoother workflow.",
    features: [
      { icon: MessageSquare, text: "Efficient client intake" },
      { icon: Calendar, text: "Automated consultation scheduling" },
      { icon: Scale, text: "Streamlined document handling" },
      { icon: CheckCircle, text: "Consistent, responsive support" }
    ]
  },
  {
    title: "Home Service Businesses",
    description: "Capture more appointments and minimize missed opportunities with our AI-powered call handler. It efficiently manages service bookings and client inquiries, even when your team is on-site.",
    features: [
      { icon: Clock, text: "24/7 call handling" },
      { icon: Wrench, text: "Automated service scheduling" },
      { icon: MessageSquare, text: "Improved customer response" },
      { icon: CheckCircle, text: "Reduced missed calls" }
    ]
  },
  {
    title: "E-commerce & Local Retail Stores",
    description: "Elevate your online customer experience with our AI chatbot that offers product recommendations, order tracking, and real-time support. It enhances customer interactions while reducing staffing needs.",
    features: [
      { icon: Store, text: "Instant product assistance" },
      { icon: MessageSquare, text: "Automated order tracking" },
      { icon: CheckCircle, text: "Enhanced customer support" },
      { icon: Building2, text: "Scalable solution for growth" }
    ]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">Our AI Solutions</h2>
            <p className="mt-4 text-lg text-gray-300">
              Discover how our AI solutions can transform your business operations
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 space-y-24">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={0.2 * (index + 1)}>
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">{solution.title}</h3>
                <p className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + featureIndex * 0.1 }}
                      className="flex items-center p-5 bg-gray-800/50 rounded-xl border border-gray-700"
                    >
                      <feature.icon className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                      <span className="ml-3 text-base sm:text-lg text-gray-200">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}