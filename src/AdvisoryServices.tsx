import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import { ChevronRight } from "lucide-react";// arrow icon
import { useNavigate } from 'react-router-dom';
import {
  Lightbulb,
  BarChart3,
  Megaphone,
  Box,
  Layout,
} from "lucide-react";

type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  image: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    id: "dt",
    title: "Digital Transformation Consulting",
    summary:
      "We provide the strategy and roadmap to future-proof your business, boost efficiency, and unlock new growth channels. Many organizations adopt new technologies in isolation, leading to wasted investment and disjointed operations. We take a holistic view, aligning your technology, processes, and people with a clear, actionable strategy designed for the unique opportunities in our economic landscape.",
    bullets: [
      "Maturity assessments & transformation blueprints",
      "Target operating model",
      "Cloud strategy, migration & change acceleration",
      "Value tracking",
    ],
    image: "/images/digital-transformation.jpg",
    icon: <Lightbulb className="w-5 h-5" />,
  },
  {
    id: "da",
    title: "Data Analytics & Business Intelligence",
    summary:
      "We transform your raw data into a strategic asset, providing the clarity and insights you need to drive growth and optimize operations.",
    bullets: [
      "Modern data platform",
      "Data governance, quality & cataloging",
      "Dashboards, KPI frameworks & alerting",

    ],
    image: "/images/data-analytics.jpg",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: "mi",
    title: "Marketing & Insights Consulting",
    summary:
      "We build data-driven growth engines that attract, engage, and convert your target audience, maximizing your marketing ROI.",
    bullets: [
      "Audience segmentation & journey mapping",
      "Attribution, MMM & growth analytics",
      "MarTech selection & integration",
      "Experimentation & CRO programs",
    ],
    image: "/images/marketing.jpg",
    icon: <Megaphone className="w-5 h-5" />,
  },

  {
    id: "dxp",
    title: "Digital Experience Platforms",
    summary:
      "We design and implement integrated digital platforms that deliver personalized experiences across every touchpoint, driving engagement.",
    bullets: [
      "Strategic platform selection",
      "Integrated system architecture ",
      "Personalization & content workflows",
      "Performance, security & scalability",
    ],
    image: "/images/dxp.jpg",
    icon: <Layout className="w-5 h-5" />,
  },
];

const AdvisoryServices = () => {
  const [active, setActive] = useState<Service>(SERVICES[0]);


  const navigate = useNavigate();

  // Function to navigate to homepage contact section
  const navigateToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* HERO — distinct title */}
      <section
        className="relative bg-fixed bg-center bg-cover text-white py-28 px-6 md:px-20"
        style={{ backgroundImage: "url('/images/cloud-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-6">
              <span className="text-teal-400">Technology</span> Advisory & Engagement
              
            </h1>
            
          </motion.div>
          
        </div>
      </section>

      {/* SERVICE NAVIGATOR (tabs/pills) */}
      <section className="py-14 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {SERVICES.map((s) => {
              const isActive = s.id === active.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition
                    ${isActive ? "bg-indigo-600 text-white shadow-md" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                >
                  {s.icon}
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* FEATURE PANEL (animated swap) */}
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {active.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">{active.summary}</p>
                <ul className="space-y-3">
                  {active.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600 flex-shrink-0" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={navigateToContact}
                    className="px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                  >
                    Talk to an Advisor

                  </button>

                   
                </div>
              </motion.div>

              <motion.div
                key={active.id + "-image"}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2"
              >
                <motion.img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section >

       

      {/* HORIZONTAL PLAYBOOK (distinct layout) */}
      < section id="playbook" className="py-20 bg-gray-50 px-6 md:px-20" >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10"
          >
            Engagement Playbook
          </motion.h2>

          <div className="overflow-x-auto">
            <div className="flex items-center gap-6 min-w-full pb-2">
              {[
                {
                  step: "Discover",
                  text: "Assess your current state, align on a future vision, and pinpoint high-impact opportunities.",
                },
                {
                  step: "Strategy",
                  text: "Target operating model, build a roadmap, and a compelling business case for investment.",
                },
                {
                  step: "Pilot",
                  text: "Demonstrate value by launching a focused, minimal version of a data project, product feature, or DXP.",
                },
                {
                  step: "Scale",
                  text: "Build strong technical foundation and establish data governance.",
                },
                {
                  step: "Optimize",
                  text: "Measure results and refine your approach for continuous growth.",
                },
              ].map((card, i, arr) => (
                <div key={i} className="flex items-center gap-6">
                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="flex-none w-80 rounded-2xl bg-teal-600 p-6 shadow-md 
                         hover:bg-teal-500 transition-colors duration-300"
                  >
                    <div className="text-sm font-semibold text-white mb-2">
                      {`0${i + 1}`}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {card.step}
                    </h3>
                    <p className="text-teal-100">{card.text}</p>
                  </motion.div>

                  {/* Arrow (not after last card) */}
                  {i < arr.length - 1 && (
                    <ChevronRight className="text-teal-600 flex-shrink-0" size={28} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* CTA */}
      < section
        className="relative bg-cover bg-center text-white py-24 px-6"
        style={{ backgroundImage: "url('/images/advisory-cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            We're here to listen
          </motion.h2>
          <motion.button
            onClick={navigateToContact}
            whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
            whileTap={{ backgroundColor: "#0f766e" }}
            className="inline-block px-8 py-4 bg-white text-indigo-700 font-semibold rounded-2xl shadow-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
          >
            Get in touch
          </motion.button>
        </div>
      </section >
    </div >
  );
};

export default AdvisoryServices;
