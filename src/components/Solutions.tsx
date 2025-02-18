import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Clock, Calendar, Shield, CheckCircle, Bell, ClipboardCheck, Stethoscope, FileText, Pill, MessageSquare, TrendingUp, UserCheck, Activity, CreditCard } from 'lucide-react';

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
    title: "Automated Appointment Reminders",
    description: "Minimize no-shows and enhance scheduling efficiency with AI-driven SMS, email, and voice reminders for patient appointments.",
    features: [
      { icon: CheckCircle, text: "Fewer missed appointments" },
      { icon: Calendar, text: "Customizable reminders" },
      { icon: Clock, text: "Automatic rescheduling" },
      { icon: TrendingUp, text: "Improved clinic efficiency" }
    ]
  },
  {
    title: "Patient Triage & Symptom Checker",
    description: "AI-driven triage evaluates symptoms, prioritizes urgency, and guides patients to the right care, improving clinic workflow.",
    features: [
      { icon: CheckCircle, text: "Faster patient sorting" },
      { icon: ClipboardCheck, text: "Smart symptom analysis" },
      { icon: Clock, text: "Reduced wait times" },
      { icon: FileText, text: "Integrated with EHR" }
    ]
  },
  {
    title: "AI Medical Scribe",
    description: "Automate documentation with an AI scribe that transcribes and summarizes doctor-patient conversations in real time.",
    features: [
      { icon: CheckCircle, text: "Accurate medical notes" },
      { icon: FileText, text: "Reduced paperwork" },
      { icon: Shield, text: "EHR integration" },
      { icon: Clock, text: "More patient focus" }
    ]
  },
  {
    title: "Prescription Refill Automation",
    description: "AI processes refill requests, verifies patient eligibility, and notifies pharmacies, making prescription management seamless.",
    features: [
      { icon: CheckCircle, text: "Faster refill approvals" },
      { icon: Pill, text: "Reduced manual work" },
      { icon: Shield, text: "Pharmacy integration" },
      { icon: Bell, text: "Automatic patient alerts" }
    ]
  },
  {
    title: "AI-Powered Chat Support",
    description: "Enhance patient experience with an AI chatbot that answers common queries, reducing staff workload.",
    features: [
      { icon: CheckCircle, text: "24/7 instant support" },
      { icon: MessageSquare, text: "Handles FAQs" },
      { icon: Calendar, text: "Appointment booking" },
      { icon: TrendingUp, text: "Reduced call volume" }
    ]
  },
  {
    title: "Predictive Patient Flow Optimization",
    description: "AI analyzes historical data to forecast peak hours, optimize scheduling, and ensure efficient staffing.",
    features: [
      { icon: CheckCircle, text: "Better staff planning" },
      { icon: TrendingUp, text: "Predict patient load" },
      { icon: Clock, text: "Reduced wait times" },
      { icon: Shield, text: "Workflow optimization" }
    ]
  },
  {
    title: "Automated Post-Visit Follow-Ups",
    description: "AI sends personalized care instructions, medication reminders, and feedback requests after each visit.",
    features: [
      { icon: CheckCircle, text: "Improved patient care" },
      { icon: Pill, text: "Medication reminders" },
      { icon: Bell, text: "Automated check-ins" },
      { icon: TrendingUp, text: "Higher engagement" }
    ]
  },
  {
    title: "AI-Powered Health Risk Assessment",
    description: "AI analyzes patient history and lifestyle data to detect potential health risks and suggest preventive care.",
    features: [
      { icon: CheckCircle, text: "Early risk detection" },
      { icon: TrendingUp, text: "Data-driven insights" },
      { icon: Stethoscope, text: "Personalized screening" },
      { icon: Calendar, text: "Preventive care planning" }
    ]
  },
  {
    title: "Insurance Verification & Billing",
    description: "Streamline insurance claims and billing with AI that verifies patient coverage and processes claims with minimal human intervention.",
    features: [
      { icon: CheckCircle, text: "Faster claim approvals" },
      { icon: CreditCard, text: "Reduced billing errors" },
      { icon: FileText, text: "Automated eligibility checks" },
      { icon: Clock, text: "Less admin workload" }
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
              Discover how our AI solutions can transform your medical practice
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 space-y-24">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={0.2}>
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