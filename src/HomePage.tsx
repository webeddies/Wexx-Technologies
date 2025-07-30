import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import {
  MessageCircle, Menu, X, ChevronRight, Phone, MapPin, Clock, Users,
  Trophy, Target, Shield, Cloud, Settings, Building, ShoppingCart, Stethoscope, Smartphone
} from 'lucide-react';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrow'; // adjust path if needed

const HomePage = () => {
  const navigate = useNavigate(); // ✅ must be inside
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'industries', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState(false);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const [currentSlide, setCurrentSlide] = useState(0);


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
      color: "bg-blue-600",
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
      color: "bg-indigo-600",
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
      image: "/images/industries/retail.jpg"
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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-navy-900">
                <span className="text-blue-600">WEXX</span> TECHNOLOGIES
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {['home', 'about', 'services', 'industries', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium flex items-center gap-1 transition-all duration-300 ${activeSection === item
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item === 'contact' ? (
                    <>
                      <motion.span
                        className="inline-block"
                        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      >
                        <Phone className="w-4 h-4 text-blue-500" />
                      </motion.span>
                      Contact
                    </>
                  ) : item === 'home' ? 'Home' : item.replace('-', ' ')}
                </button>
              ))}

            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'services', 'industries', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 capitalize"
                >
                  {item === 'home' ? 'Home' : item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen relative text-white">
        {/* Slideshow Background */}
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
                              onClick={() => scrollToSection('contact')}
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

      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About WEXX TECHNOLOGIES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading digital transformation through innovative technology solutions and strategic consulting expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                At WEXX TECHNOLOGIES, we are digital change-makers dedicated to designing future-state solutions that help businesses evolve with agility and impact. Based in Accra, Ghana, we serve enterprise clients across Africa and beyond with customized IT services, digital transformation consulting, and comprehensive cloud and application services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of high-level professionals combines deep technical expertise with strategic business insight to deliver solutions that drive real transformation and sustainable growth.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose WEXX?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Trophy className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Cutting-edge solutions that keep you ahead of the curve</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
                    <p className="text-gray-600">Partnership approach ensuring your success is our success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">Unwavering commitment to delivering exceptional results</p>
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className={`${service.color} p-6 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Delivering specialized solutions across key business sectors with deep industry expertise.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
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
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p className="text-gray-400">TA/D 262 Off Star Clinic Road, Taifa, Accra</p>
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
              <form
                action="https://formspree.io/f/xanbbyyw"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="https://wexxtechnologies.netlify.app/thank-you" />


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
                  <label htmlFor="id number" className="block text-sm font-medium mb-2">ID Number</label>
                  <input
                    name="id" 
                    id="id number"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="GHA-CARD/ DRIVER'S LICENSE/ PASSPORT No./ VOTER'S ID"
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
                className="text-2xl font-bold mb-4 text-left focus:outline-none"
              >
                <span className="text-blue-400">WEXX</span> TECHNOLOGIES
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
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, -15, 15, -15, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  <Phone className="w-4 h-4 text-teal-400" />
                </motion.span>
                Contact
              </h4>

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
                <li>Taifa, Accra</li>
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
        href="https://wa.me/233248164701"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default HomePage;
