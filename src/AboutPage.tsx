import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from "./Header";

const AboutPage = () => {
  // Smooth scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Header />

      <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
    >
      {/* 🔷 Top Banner Image with Animated Title */}
      <motion.div
        className="relative w-full h-56 sm:h-72 overflow-hidden"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <img
          src="/images/about-banner.jpg"
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Title */}
        <motion.div
          className="absolute inset-0 flex items-center justify-left px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-center">
            <span className="text-teal-400">About</span>{' '}
            <span className="text-white">WEXX TECHNOLOGIES</span>
          </h1>

        </motion.div>
      </motion.div>

      {/* 🔷 Flowing Text on Background Image */}
      <div className="relative py-20 px-6 sm:px-10 lg:px-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/about-bg.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-white space-y-10 leading-loose text-lg max-w-5xl mx-auto z-10">
          {[
            `<strong>WEXX TECHNOLOGIES</strong> is a global consulting services and systems provider operating in Ghana, delivering solutions through a unique blend of digital innovation and robust, industry-strength processes. With our commitment to helping clients design digital success, we craft future-state solutions for industry leaders and deliver innovative digital experiences that enable them to accelerate transformation and growth.`,

            `Our goal is to empower enterprises, associates, and society at large to rise; fostering a more equitable world, future readiness, and sustainable value creation.`,

            `<strong>WEXX TECHNOLOGIES</strong> is led by seasoned, high-level professionals with in-depth knowledge of information technology; both locally and globally. Our valued clients are supported by experienced experts throughout every phase of an engagement.`,

            `We offer a fresh, distinctive approach to delivering multi-disciplinary and end-to-end technology services. Today and in the future, broader and more sophisticated skills are required to compete and meet clients’ diverse and evolving needs. The only constants in information technology are change and the ongoing need to significantly reduce solution costs while enhancing agility. That’s what <strong>WEXX TECHNOLOGIES</strong> does best; helping organizations and individuals manage change, increase flexibility, and minimize solution costs.`,

            `Our success depends on our clients’ success. That’s why <strong>WEXX TECHNOLOGIES</strong> continues to grow as a trusted force, even when competing against other firms. We pride ourselves on offering the most comprehensive and up-to-date customized technology services to help our clients maximize the value of their systems and investments.`,

            `We partner with our clients to envision, build, and deliver meaningful technical solutions. Our experience, knowledge, and ingenuity enable us to apply our services across a wide variety of projects.`,

            `These in-house service categories support the implementation of both short and long-term business strategies that align with our clients’ objectives. By coordinating multidisciplinary expertise and working collaboratively, <strong>WEXX TECHNOLOGIES</strong> helps clients optimize their resources, and their valuable time.`,

            `At <strong>WEXX TECHNOLOGIES</strong>, we don’t just meet expectations, we consistently exceed them.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              dangerouslySetInnerHTML={{ __html: text }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            />
          ))}
        </div>
      </div>
    </motion.div>

    </div>   
      
    
  );
};

export default AboutPage;
