/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, PoundSterling, Phone, Mail, User, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteFormData } from '../types';
import { CONTACT_INFO, SERVICES } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function QuoteModal({ isOpen, onClose, initialServiceId }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'design-landscaping',
    timeframe: '1-3-months',
    budget: '5k-10k',
    message: '',
    location: ''
  });

  // Pre-fill service type when initialServiceId changes or modal opens
  useEffect(() => {
    if (initialServiceId && isOpen) {
      setFormData(prev => ({ ...prev, serviceType: initialServiceId }));
    }
  }, [initialServiceId, isOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('--- FREE QUOTE REQUEST SUBMITTED ---', formData);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'design-landscaping',
      timeframe: '1-3-months',
      budget: '5k-10k',
      message: '',
      location: ''
    });
    setIsSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            id="quote-modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-sand shadow-2xl border border-earthy-pale flex flex-col max-h-[90vh]"
            id="quote-modal-content"
          >
            {/* Header */}
            <div className="relative bg-earthy text-white px-6 py-6 md:px-8">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                Request a Free Quote
              </h3>
              <p className="mt-1 text-sm text-white/90 font-light">
                Let’s collaborate to create your perfect outdoor living space in North Devon.
              </p>
            </div>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                  id="quote-success-view"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-leaf text-white shadow-lg shadow-leaf/20">
                    <Check className="h-8 w-8 stroke-[3]" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-gray-900">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="mt-2 max-w-md text-gray-600">
                    Your request has been successfully sent. We will review your details and contact you within 24-48 hours to schedule a free site consultation.
                  </p>
                  
                  <div className="mt-8 rounded-xl bg-earthy-pale p-5 text-left w-full max-w-md border border-earthy-light/20">
                    <h5 className="font-semibold text-earthy text-sm uppercase tracking-wider mb-3">Submission Summary:</h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Selected Service:</strong> {SERVICES.find(s => s.id === formData.serviceType)?.title || formData.serviceType}</li>
                      <li><strong>Estimated Budget:</strong> {formData.budget.replace('-', ' - ')}</li>
                      <li><strong>Location:</strong> {formData.location || 'Braunton & surroundings'}</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg border border-earthy text-earthy font-medium hover:bg-earthy-pale transition-colors text-sm"
                      id="submit-another-quote-btn"
                    >
                      Submit Another
                    </button>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-lg bg-leaf hover:bg-leaf-dark text-white font-medium shadow-md hover:shadow-lg transition-all text-sm"
                      id="success-close-btn"
                    >
                      Return to Website
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="quote-request-form">
                  {/* Step Info */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Project Type */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                        Project Interest
                      </label>
                      <div className="relative">
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all appearance-none"
                          required
                        >
                          {SERVICES.map(service => (
                            <option key={service.id} value={service.id}>
                              {service.title}
                            </option>
                          ))}
                          <option value="other">Other Garden Services</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                        Your Location (North Devon)
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <input
                          type="text"
                          name="location"
                          placeholder="e.g. Braunton, Croyde, Saunton"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Timeframe */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                        Target Timeframe
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                          <Calendar className="h-4 w-4" />
                        </span>
                        <select
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all appearance-none"
                          required
                        >
                          <option value="immediate">As soon as possible</option>
                          <option value="1-3-months">Within 1 - 3 months</option>
                          <option value="3-6-months">Within 3 - 6 months</option>
                          <option value="flexible">Flexible / Planning stage</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                          <PoundSterling className="h-4 w-4" />
                        </span>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all appearance-none"
                          required
                        >
                          <option value="under-5k">Under £5,000</option>
                          <option value="5k-10k">£5,000 - £10,000</option>
                          <option value="10k-25k">£10,000 - £25,000</option>
                          <option value="25k-50k">£25,000 - £50,000</option>
                          <option value="over-50k">£50,000+</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Info Divider */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-start">
                      <span className="bg-sand pr-3 text-xs font-semibold uppercase tracking-wider text-earthy">
                        Your Contact Information
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                        <User className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="e.g. John Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="e.g. 07876 434009"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-earthy mb-1.5">
                      Tell us about your garden goals
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="e.g. We have a sloping back garden and want to replace the lawn with a multi-level porcelain patio, retaining walls, planting beds, and modern cedar-clad fencing."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex justify-end gap-3 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 transition-colors text-sm"
                      id="cancel-quote-btn"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-lg bg-leaf hover:bg-leaf-dark disabled:bg-leaf-light/50 text-white font-medium shadow-md hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2"
                      id="submit-quote-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Request Free Consultation'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
