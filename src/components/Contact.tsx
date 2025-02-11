import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Send, Calendar, Clock } from 'lucide-react';

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Generate time slots between 9 AM and 4 PM with 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 16; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        // Skip 4:30 PM slot
        if (hour === 16 && minutes === 30) continue;
        
        const timeString = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const submissionTime = new Date().toISOString();

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      preferredDate: formData.get('date'),
      preferredTime: formData.get('time'),
      message: formData.get('message'),
      submissionDetails: {
        timestamp: submissionTime,
        timezone: "Australia/Melbourne",
        source: window.location.href
      }
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/bbk25q6oj2ce1rbdomiyxbgrkqt38n56', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gradient sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-300">
              Ready to transform your business communication? Schedule a demo or reach out to learn more.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="mt-16 max-w-xl mx-auto">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-md text-green-200">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-md text-red-200">
                There was an error sending your message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300">
                    <Calendar className="inline-block w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={today}
                    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    Preferred Time (AEST)
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select a time</option>
                    {generateTimeSlots().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}