import React from 'react';
import { ArrowRight, Mic, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const WaveAnimation = () => (
  <div className="relative w-64 h-64">
    <motion.div
      className="absolute inset-0 border-4 border-indigo-500/20 rounded-full"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.1, 0.3],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute inset-0 border-4 border-indigo-400/30 rounded-full"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 0.1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.3,
      }}
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-600 p-6 rounded-full shadow-lg shadow-indigo-500/50"
      >
        <Mic className="w-12 h-12 text-white" />
      </motion.div>
    </div>
  </div>
);

const VoiceLines = () => (
  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1 bg-indigo-400/60 rounded-full"
        animate={{
          height: [8, 24, 8],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800/50" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              <span className="block mb-2 sm:mb-3">Faster Smarter</span>
              <span className="block text-gradient">Stress-Free Clinics</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300"
            >
              Automation that works behind the scenes, so you focus on patients
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25 flex items-center justify-center"
              >
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#solutions"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                Explore Solutions <Wand2 className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <div className="relative mx-auto max-w-[800px] aspect-[2/1]">
              <div className="absolute inset-0 flex items-center justify-center">
                <WaveAnimation />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <VoiceLines />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}