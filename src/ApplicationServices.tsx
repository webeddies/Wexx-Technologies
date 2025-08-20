import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

const ApplicationServices = () => {

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

      {/* Hero Section */}
      <section
        className="relative bg-fixed bg-center bg-cover text-white py-20 px-6 md:px-20"
        style={{
          backgroundImage: "url('/images/cloud-banner.jpg')", // replace with your image path
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* dark overlay for readability */}

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-6">
              <span className="text-teal-400">Transforming</span> Businesses with Next-Gen Application Services
              
            </h1>

          </motion.div>

        </div>

      </section>

      {/* Section 1 - Enterprise Platforms */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}

        >
          <h2 className="text-3xl font-bold mb-4">Enterprise Platform Integration</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            We move beyond simple software installation to architect the digital core of your enterprise.
            Our Enterprise Platform solutions are designed to solve inefficient
            processes and disconnected systems holding Ghanaian businesses back.
            We empower businesses with fully integrated digital ecosystems that
            seamlessly connect your ERP, CRM, and operational data.
            This eliminates data silos, provides real-time visibility across
            your entire operation, and unlocks a new level of agility, allowing you
            to make data-driven decisions faster than ever before.
            We ensure your digital foundation is not just for today but is scalable, secure,
            and built to evolve with your ambitious growth plans, both within Ghana and across the region.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}

        >
          <img
            src="/images/app-1.jpg"
            alt="Enterprise Platforms"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>


      </section>

      {/* Section 2 - Application Development */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center bg-gray-50">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}


        >
          <img
            src="/images/app-2.jpg"
            alt="Application Development"
            className="rounded-2xl shadow-lg"
          />

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}

        >
          <h2 className="text-3xl font-bold mb-4">
            Application Development & Management
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Don't just build an app; build a competitive advantage.
            Our application development and management services turn your unique ideas into intuitive, powerful digital tools that solve real business problems.
            Leveraging modern stacks like Python/Django, .NET, React Native, and cloud-native architectures, we build custom web apps, mobile solutions, and robust APIs to create seamless experiences for your customers and employees.
            Beyond launch, our managed services provide proactive monitoring, performance optimization, and continuous evolution to ensure your application remains a competitive asset, scaling seamlessly with your business growth across Ghana and beyond.
          </p>

        </motion.div>
      </section>

      {/* Section 3 - Oracle Solutions */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}

        >
          <h2 className="text-3xl font-bold mb-4">Oracle Solutions</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Our Oracle solutions are designed to integrate and automate your core functions
            i.e finance, supply chain, HR, and customer experience into a single, intelligent system.
            We provide the strategic guidance and technical skills  to help you make decisions about maintaining
            the E-Business Suite, moving databases to OCI, or deploying Oracle Fusion Applications.
            Our goal is to deliver more than just technology; we deliver streamlined processes,
            real-time analytics, and a clear competitive edge.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}

        >
          <img
            src="/images/app-3.jpg"
            alt="Oracle Services"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>


      </section>

      {/* Section 4 - Salesforce Services */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center bg-gray-50">


        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}


        >
          <img
            src="/images/app-4.webp"
            alt="Salesforce Services"
            className="rounded-2xl shadow-lg"
          />

        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}

        >
          <h2 className="text-3xl font-bold mb-4">Salesforce Services</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Transform your customer experience and drive revenue with a CRM solution built for your ambitions.
            We help Ghanaian businesses harness the full power of the Salesforce platform by ensuring
            seamless integration with their core systems, automating key processes, and providing ongoing support
            to power customer-centric growth.
          </p>

        </motion.div>
      </section>



      {/* Final CTA */}
      <section
        className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white text-center py-20 px-6"
        style={{ backgroundImage: "url('/images/advisory-cta.jpg')" }}
      >

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Let’s Build the Future of Your Applications
        </motion.h2>
        <motion.button
          onClick={navigateToContact}
          whileHover={{ scale: 1.05, backgroundColor: "#0d9488" }}
          whileTap={{ backgroundColor: "#0f766e" }}
          className="inline-block px-8 py-4 bg-white text-indigo-700 font-semibold rounded-2xl shadow-lg hover:bg-teal-600 hover:text-white transition-colors duration-300"
        >
          Speak To An Expert
        </motion.button>
      </section>
    </div>
  );
};

export default ApplicationServices;
