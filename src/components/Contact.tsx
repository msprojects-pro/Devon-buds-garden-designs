/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  ChevronDown, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormData } from '../types';
import { CONTACT_INFO, FAQS } from '../data';

export default function Contact() {
  // Form states
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    newsletter: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Accordion FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('--- CUSTOMER INQUIRY SUBMITTED ---', formData);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      newsletter: true
    });
    setIsSuccess(false);
  };

  return (
    <div className="bg-white" id="contact">
      {/* Section Content */}
      <div className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">Contact Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Let’s design your perfect garden.
          </h2>
          <p className="text-gray-600 mt-4 font-light text-base leading-relaxed">
            Ready to convert your outdoor space? Fill in our contact form for a free site appraisal, or reach out directly via phone or WhatsApp. We respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Direct info, FAQs */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Direct Contacts Block */}
            <div className="bg-sand rounded-2xl p-8 border border-earthy-pale/40 space-y-6">
              <h3 className="font-display text-xl font-bold text-gray-900">Direct Contact</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-all group border border-transparent hover:border-earthy-pale"
                >
                  <div className="h-10 w-10 rounded-lg bg-leaf-pale text-leaf flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Phone / WhatsApp</span>
                    <span className="block text-base font-bold text-gray-900 mt-0.5 group-hover:text-leaf transition-colors">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                    <span className="block text-[11px] text-gray-400">Tap to call or message</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-all group border border-transparent hover:border-earthy-pale"
                >
                  <div className="h-10 w-10 rounded-lg bg-leaf-pale text-leaf flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Email Address</span>
                    <span className="block text-base font-bold text-gray-900 mt-0.5 group-hover:text-leaf transition-colors truncate">
                      {CONTACT_INFO.email}
                    </span>
                    <span className="block text-[11px] text-gray-400">Tap to write an email</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3 rounded-xl border border-transparent">
                  <div className="h-10 w-10 rounded-lg bg-leaf-pale text-leaf flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Base Location</span>
                    <span className="block text-base font-bold text-gray-900 mt-0.5">
                      Braunton, North Devon
                    </span>
                    <span className="block text-[11px] text-gray-400">Serving EX31, EX32, EX33 & surrounding areas</span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-4 p-3 rounded-xl border border-transparent">
                  <div className="h-10 w-10 rounded-lg bg-leaf-pale text-leaf flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Business Hours</span>
                    <span className="block text-base font-bold text-gray-900 mt-0.5">
                      Mon – Sat: 8:00 AM – 6:00 PM
                    </span>
                    <span className="block text-[11px] text-gray-400">Sunday closed for family</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion FAQs Block */}
            <div id="faq" className="space-y-4">
              <div className="space-y-1">
                <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">Have Questions?</span>
                <h3 className="font-display text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-3 pt-2">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaqIdx === i;
                  return (
                    <div
                      key={i}
                      className="border border-gray-100 rounded-xl overflow-hidden transition-all bg-sand/30"
                    >
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between p-4 font-display font-bold text-sm text-left text-gray-800 hover:text-leaf hover:bg-sand/60 transition-colors"
                        id={`faq-btn-${i}`}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180 text-leaf' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-white border-t border-gray-50"
                          >
                            <p className="p-4 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact form, Map placeholder */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Form */}
            <div className="bg-white border border-earthy-pale p-8 rounded-2xl shadow-xl shadow-gray-100 relative">
              {isSuccess ? (
                <div className="text-center py-10 space-y-4" id="contact-success-banner">
                  <div className="h-16 w-16 bg-leaf text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900">Message Received!</h3>
                  <p className="text-gray-600 font-light max-w-sm mx-auto text-sm leading-relaxed">
                    Thank you for reaching out, {formData.name}. We have successfully received your inquiry and will respond within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 px-5 py-2 rounded-lg bg-sand border border-earthy text-earthy text-xs font-bold hover:bg-earthy-pale transition-colors"
                    id="contact-new-message-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="contact-message-form">
                  <h3 className="font-display text-xl font-bold text-gray-900 border-b border-gray-50 pb-4">
                    Send us a message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-semibold text-earthy uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full text-sm rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-semibold text-earthy uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="07876 434009"
                        className="w-full text-sm rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-semibold text-earthy uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full text-sm rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold text-earthy uppercase tracking-wider mb-1.5">
                      How can we help with your garden?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Devon Buds, we want to clear out our old timber deck in Braunton and install a new modern porcelain patio, custom lighting, and some low-maintenance shrub borders..."
                      className="w-full text-sm rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Newsletter Check */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter-check"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-leaf focus:ring-leaf/20"
                    />
                    <label htmlFor="newsletter-check" className="text-xs text-gray-500 font-light select-none">
                      I agree to receive seasonal garden care tips and project showcase emails (Opt-out anytime).
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-leaf hover:bg-leaf-dark disabled:bg-leaf-light/50 text-white font-bold rounded-xl shadow-lg shadow-leaf/20 hover:scale-[1.01] transition-all text-sm flex items-center justify-center gap-2"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
