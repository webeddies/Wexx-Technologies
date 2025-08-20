import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

const CloudServices = () => {

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
    <div className="bg-gray-100 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-fixed bg-center bg-cover text-white py-32 px-6 md:px-20"
        style={{
          backgroundImage: "url('/images/cloud-banner.jpg')", // replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay for readability */}

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-5xl font-bold mb-6"
          >
            <span className="text-teal-400">Cloud</span> Infrastructure & Security Services
            
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl"
          >

          </motion.p>
        </div>
      </section>


      {/* Storytelling Sections */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16 space-y-28">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Build a Reliable & Scalable Foundation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We start with resilient cloud infrastructure designed to scale as
              your business grows. Whether it’s private, public, or hybrid
              environments, our team devise solutions that provide both flexibility 
              and stability. We ensure your operations run seamlessly 
              while adapting to market demands without disruption.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/cloud-1.png"
              alt="Cloud infrastructure"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Security at the Core
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In an era of continuously evolving cyber threats, 
              your cloud environment requires vigilant, around-the-clock protection. 
              We integrate advanced security protocols, proactive threat-detection systems, 
              and compliance-focused frameworks into the foundation of every solution. 
              This ensures that your migration to the cloud is not only seamless but 
              also secure, enabling you to operate with confidence and resilience.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:order-1"
          >
            <img
              src="/images/cloud-2.jpg"
              alt="Cloud security"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              Optimized for Performance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Performance isn’t just about speed; it’s about efficiency. Our team 
              ensures your applications operate at their peak potential through 
              cost-optimized storage solutions, seamless networking, and 
              automated monitoring tools. Our goal is to ensure enhanced 
              reliability, minimized downtime, and a consistently superior experience for your users.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/cloud-3.jpg"
              alt="Cloud performance"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:order-2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Future-Ready Transformation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cloud is not the end of the journey, but the foundation of innovation. 
              We help you harness emerging technologies like artificial intelligence, 
              machine learning, and automation, all securely integrated into 
              your cloud environment. The future of your business is limitless 
              when powered by the right cloud strategy.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:order-1"
          >
            <img
              src="/images/cloud-4.jpg"
              alt="Future-ready cloud"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

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
            Let’s grow your business together
          </motion.h2>
          <motion.button
            onClick={navigateToContact}
            whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
            whileTap={{ backgroundColor: "#0f766e" }}
            className="inline-block px-8 py-4 bg-white text-indigo-700 font-semibold rounded-2xl shadow-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
          >
            Contact us Now
          </motion.button>
        </div>
      </section >



    </div>
  );
};

export default CloudServices;
