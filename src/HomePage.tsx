import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import ScheduleModal from './ScheduleModal'; // adjust the path
import Header from './Header';



import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import {
  MessageCircle, ChevronRight, Phone, Mail, MapPin, Clock, Users,
  Trophy, Target, Shield, Cloud, Settings, Building, ShoppingCart, Stethoscope, Smartphone
} from 'lucide-react';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrow'; // adjust path if needed

const HomePage = () => {
  const navigate = useNavigate(); // ✅ must be inside


  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);


  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const heroImages = [
    {
      image: '/images/slide1.jpg',
      title: 'Customized Tech Solutions',
      subtitle: 'Consulting and Digital Transformation',
      description: 'We are digital change-makers who design future-state solutions...',
    },
    {
      image: '/images/slide2.jpg',
      title: 'Empower Your Business',
      subtitle: 'With Scalable IT Infrastructure',
      description: 'We bring agility, resilience and insight to enterprise technology.',
    },
    {
      image: '/images/slide3.jpg',
      title: 'Smarter Systems, Bigger Impact',
      subtitle: 'Transform with Confidence',
      description: 'Unlock new possibilities through intelligent platforms and cloud services.',
    }
  ];


  const services = [
    {
      category: "Cloud Infrastructure & Security Services",
      icon: <Cloud className="w-8 h-8" />,
      color: "bg-teal-600",
      services: [
        "Digital Security",
        "Digital Workplace",
        "Digital IT Operations",
        "Hybrid Cloud Services",
        "Intelligent Hybrid Information Systems"
      ]
    },
    {
      category: "Application Services",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-teal-600",
      services: [
        "Enterprise Platform Services",
        "Application Development & Management",
        "Oracle Services",
        "Salesforce Solutions"
      ]
    },
    {
      category: "Technology Advisory & Engagement",
      icon: <Target className="w-8 h-8" />,
      color: "bg-teal-600",
      services: [
        "Digital Transformation Consulting",
        "Data Analytics & Business Intelligence",
        "Marketing & Insights Consulting",
        "Product & Experience Strategy",
        "Digital Experience Platforms"
      ]
    }
  ];

  const industries = [
    {
      name: "Banking & Financial Services",
      icon: <Building className="w-12 h-12" />,
      description: "Secure, compliant solutions for financial institutions",
      image: "/images/industries/banking.jpg"
    },
    {
      name: "Insurance",
      icon: <Shield className="w-12 h-12" />,
      description: "Risk management and digital transformation for insurers",
      image: "/images/industries/insurance.jpg"
    },
    {
      name: "Retail & Consumer Services",
      icon: <ShoppingCart className="w-12 h-12" />,
      description: "Customer-centric solutions for retail excellence",
      image: "/images/industries/retail.webp"
    },
    {
      name: "Healthcare & Life Sciences",
      icon: <Stethoscope className="w-12 h-12" />,
      description: "Technology solutions improving patient outcomes",
      image: "/images/industries/healthcare.jpg"
    },
    {
      name: "Technology, Media & Telecom",
      icon: <Smartphone className="w-12 h-12" />,
      description: "Innovation-driven solutions for digital leaders",
      image: "/images/industries/tech.jpg"
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header />


      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen relative text-white">
        {/* Slideshow Background */}
        <div className="group relative h-screen">
          <Slider
            dots={true}
            infinite={true}
            speed={1200}  // 1.2 seconds is smooth and classy
            cssEase="ease-in-out"
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}                  // ✅ Autoplay is enabled
            autoplaySpeed={5000}
            pauseOnHover={false}
            pauseOnFocus={false}

            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            rtl={false}
            beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}

          >
            {heroImages.map((slide, index) => (
              <div key={index}>
                <div className="h-screen relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="h-full w-full bg-black/60 flex items-center">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          {/* 🔁 Key added to trigger animations on each slide change */}
                          <motion.div
                            key={currentSlide === index ? `active-${index}` : `inactive-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                          >
                            <motion.h1
                              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            >
                              <span className="text-teal-400">{slide.title.split(' ')[0]}</span>{' '}
                              {slide.title.split(' ').slice(1).join(' ')}
                            </motion.h1>

                            <motion.p
                              className="text-xl sm:text-2xl text-gray-300 font-light"
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                            >
                              {slide.subtitle}
                            </motion.p>

                            <motion.p
                              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                            >
                              {slide.description}
                            </motion.p>

                            <div className="flex flex-col sm:flex-row gap-4">
                              <motion.button
                                onClick={() => setShowModal(true)} // Open modal
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                              >
                                Schedule a Consultation
                              </motion.button>


                              <motion.button
                                onClick={() => scrollToSection('services')}
                                className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                              >
                                Explore Our Services
                              </motion.button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          </Slider>

        </div>

      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About WEXX TECHNOLOGIES</h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-700 leading-relaxed font-rubik">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                At WEXX TECHNOLOGIES, we are digital change-makers dedicated to designing future-state
                solutions that help businesses evolve with agility and impact. Based in Accra, Ghana,
                we serve enterprise clients across the country with customized IT services, digital
                transformation consulting, and comprehensive cloud and application services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of high-level professionals combines deep technical expertise with strategic
                business insight to deliver solutions that drive real transformation and sustainable growth.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Why choose us?</h3>
              <p className="text-gray-700 mb-6">
                We provide technology-driven solutions with first-rate customer service to:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Trophy className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Innovation</h4>
                    <p className="text-gray-600">Deliver forward-thinking technologies that position your business for long-term success.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Collaboration</h4>
                    <p className="text-gray-600">Work hand-in-hand with you to ensure shared goals and lasting impact.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Excellence</h4>
                    <p className="text-gray-600">Maintain a strong focus on quality to consistently exceed expectations.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/about')}

              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More About Us
            </button>

          </div>

        </div>

      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 relative bg-gray-900 text-white overflow-hidden"
      >
        {/* Background image (blurred or darkened for readability) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/services-bg.jpg')",
            backgroundAttachment: "fixed",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[8px] sm:text-xs text-blue-400 tracking-[0.35em] uppercase font-semibold mb-2 relative inline-block leading-none">
              WHAT WE DO
              <span className="block w-6 h-[1.5px] bg-blue-400 mt-1 mx-auto"></span>
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Our Services</h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              We can understand and support all aspects of your IT systems. Our goal is to create innovative technology solutions that enable your business to be more agile and competitive.
            </p>
          </div>




          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className={`${service.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.category}</h3>
                  </div>
                </div>

                {/* Body with services + Learn More */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More pinned at bottom */}
                  <p
                    onClick={() => navigate(`/services/${index}`)}
                    className="mt-6 w-fit px-4 py-2 border-2 border-teal-600 text-teal-600 font-medium rounded-lg cursor-pointer hover:bg-teal-600 hover:text-white transition"
                  >
                    Learn More →
                  </p>


                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with customized solutions built on deep sector expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${industry.image})` }}></div>
                <div className="p-6 text-center">
                  <div className="text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Talk to Us Today</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital goals and transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* 🔹 Contact Info + Image */}
            <div className="space-y-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">Phone Numbers</p>
                      <div className="text-gray-400 space-x-2">
                        <a href="tel:+233248164701" className="hover:text-white transition-colors duration-300">
                          0248164701
                        </a>
                        <span>•</span>
                        <a href="tel:+233209008393" className="hover:text-white transition-colors duration-300">
                          0209008393
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <div className="text-gray-400 space-x-2">
                        <a href="mailto:wexxtechnologies@gmail.com" className=" hover:underline break-all hover:text-white transition-colors duration-300">
                          wexxtechnologies@gmail.com
                        </a>

                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p className="text-gray-400">Prince Okai street, New Achimota, Accra</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-gray-400">Monday–Friday, 8:00am – 5:00pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🔹 Animated Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-800"
              >
                <img
                  src="/images/contact-desk.jpg" // ⬅️ Replace with your actual image path
                  alt="Contact Illustration"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <p className='text-lg leading-relaxed text-gray-400 mb-6'>We'll need just a few details from you, and one of our specialists will be in touch as soon as possible.</p>
              <form
                onSubmit={async (e) => {
                  e.preventDefault(); // prevent page refresh

                  const name = (document.getElementById('name') as HTMLInputElement).value.trim();
                  const email = (document.getElementById('email') as HTMLInputElement).value.trim();
                  const phone = (document.getElementById('number') as HTMLInputElement).value.trim();

                  const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();

                  if (!name || !email || !phone || !message) {
                    setFormError(true);
                    return;
                  }

                  setFormError(false);
                  setIsSending(true);

                  try {
                    const res = await fetch("https://formspree.io/f/movnvanj", {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: new FormData(e.target as HTMLFormElement),
                    });

                    if (res.ok) {
                      setFormSubmitted(true);
                      (e.target as HTMLFormElement).reset(); // Clear form fields
                    } else {
                      setFormError(true);
                    }
                  } catch (err) {
                    setFormError(true);
                  } finally {
                    setIsSending(false);
                  }
                }}
                className="space-y-6"
              >




                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="number" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    id="number"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="0241234567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project or questions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isSending ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

              </form>
              {formSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-400 mt-4 text-center font-medium"
                >
                  ✅ Message sent successfully. We'll get back to you soon!
                </motion.div>
              )}

              {formError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-red-400 mt-4 text-center font-medium"
                >
                  ⚠️ Please fill in all the fields before submitting.
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Clickable WEXX Logo */}
            <div className="lg:col-span-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-3xl sm:text-4xl font-extrabold tracking-wide mb-4 text-left focus:outline-none"
              >
                <span className="text-blue-400">WEXX</span>{' '}
                <span className="text-base font-semibold text-gray-300">TECHNOLOGIES</span>
              </button>

              <p className="text-gray-400 mb-4 max-w-md">
                Digital change-makers designing future-state solutions to help businesses evolve with agility and impact.
              </p>
            </div>

            {/* Quick Links with hover animation */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', target: 'home' },
                  { label: 'About', target: 'about' },
                  { label: 'Services', target: 'services' },
                  { label: 'Contact', target: 'contact' },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(item.target)}
                      className="text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <span className="capitalize font-medium transition-all duration-300 flex items-center gap-2">
                Contact Us
                <motion.span
                  className="inline-block"
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <Phone className="w-6 h-6 text-blue-500" />
                </motion.span>
              </span>




              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+233248164701" className="hover:text-white transition-colors duration-300">
                    0248164701
                  </a>
                </li>
                <li>
                  <a href="tel:+233209008393" className="hover:text-white transition-colors duration-300">
                    0209008393
                  </a>
                </li>

                <li>
                  <a href="mailto:wexxtechnologies@gmail.com" className=" hover:underline break-all hover:text-white transition-colors duration-300">
                    wexxtechnologies@gmail.com
                  </a>
                </li>
                <li>New Achimota, Accra</li>
              </ul>

            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WEXX TECHNOLOGIES. All rights reserved.</p>
          </div>
        </div>
      </footer>


      {/* WhatsApp Button */}
      <a
        href="https://wa.me/233249138201"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      <ScheduleModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default HomePage;
