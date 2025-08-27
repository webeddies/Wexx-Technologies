
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';


interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(false);
    setFormSubmitted(false);
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrbabzay", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok && result.ok !== false) {
        setFormSubmitted(true);
        form.reset(); // clear the form
      } else {
        setFormError(true);
      }
    } catch (error) {
      setFormError(true);
    } finally {
      setIsSending(false);
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Schedule a Consultation
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0241234567"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Company / Organization <span className="text-red-500">*</span>
            </label>
            <input
              name="company"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
            <select
              name="service"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a Service --</option>
              <option>Cloud Infrastructure & Security</option>
              <option>Application Services</option>
              <option>Technology Advisory</option>
              <option>Custom Project</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Brief Description
            </label>
            <textarea
              name="message"
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What would you like us to assist you with?"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSending ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        </form>

        {/* Feedback Messages */}
        <AnimatePresence>
          {formSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-green-500 mt-4 text-center font-medium"
            >
              ✅ Your request has been sent! We'll get back to you soon.
            </motion.div>
          )}

          {formError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-red-500 mt-4 text-center font-medium"
            >
              ⚠️ Something went wrong. Please try again.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ScheduleModal;
