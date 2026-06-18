import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { CONTACT } from '@/constants/testIds';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white"
      data-testid={CONTACT.section}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4 text-[#0033CC]">
            GET IN TOUCH
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold heading-font text-[#0A0A0A] mb-6">
            Start your learning journey today
          </h2>
          <p className="text-base leading-relaxed text-[#6B7280] max-w-2xl mx-auto">
            Have questions? Want to learn more about our courses? We're here to help you take the next step in your education.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          data-testid={CONTACT.form}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0033CC] text-[#0A0A0A]"
                data-testid={CONTACT.nameInput}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0033CC] text-[#0A0A0A]"
                data-testid={CONTACT.emailInput}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0033CC] text-[#0A0A0A]"
              data-testid={CONTACT.subjectInput}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#0033CC] resize-none text-[#0A0A0A]"
              data-testid={CONTACT.messageInput}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0033CC] text-white px-8 py-4 hover:bg-[#002299] transition-colors btn-primary inline-flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            data-testid={CONTACT.submitButton}
          >
            {loading ? 'Sending...' : 'Send Message'}
            <Send className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
