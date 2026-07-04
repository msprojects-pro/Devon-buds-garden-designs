/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES, CONTACT_INFO } from '../data';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Premium Garden Landscaping Devon"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Modern multi-layer overlay to ensure deep text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand via-black/25 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-0">
        <div className="max-w-3xl">
          {/* Tagline / Sub-badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-leaf-pale/10 backdrop-blur-md border border-leaf-light/30 text-leaf-light text-xs sm:text-sm font-semibold tracking-wide mb-6"
            id="hero-badge"
          >
            <MapPin className="h-4 w-4" />
            <span>Braunton & North Devon Garden Designers</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            id="hero-heading"
          >
            We don’t just build gardens — <br />
            <span className="text-leaf-light">we create outdoor living spaces.</span>
          </motion.h1>

          {/* Tagline/Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-200 font-light leading-relaxed max-w-2xl"
            id="hero-description"
          >
            Transform your outdoor space with premium garden designs, natural stone patios, bespoke timber garden rooms, and outdoor kitchens across Braunton, Croyde, Saunton, and North Devon.
          </motion.p>

          {/* Bullet points of services */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300 font-medium"
            id="hero-features"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              <span>Bespoke Landscaping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              <span>Porcelain & Stone Patios</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              <span>Garden Rooms & Offices</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
            id="hero-ctas"
          >
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-leaf hover:bg-leaf-dark text-white font-bold tracking-wide shadow-lg shadow-leaf/30 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              id="hero-quote-btn"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 backdrop-blur-sm transition-all flex items-center justify-center gap-2 hover:border-white/40"
              id="hero-call-btn"
            >
              <Phone className="h-5 w-5 text-leaf-light animate-pulse" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* Small Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-3 text-white/80"
            id="hero-trust"
          >
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full bg-leaf flex items-center justify-center text-[10px] font-bold text-white border-2 border-earthy-dark">★</span>
              <span className="h-8 w-8 rounded-full bg-leaf flex items-center justify-center text-[10px] font-bold text-white border-2 border-earthy-dark">★</span>
              <span className="h-8 w-8 rounded-full bg-leaf flex items-center justify-center text-[10px] font-bold text-white border-2 border-earthy-dark">★</span>
              <span className="h-8 w-8 rounded-full bg-leaf flex items-center justify-center text-[10px] font-bold text-white border-2 border-earthy-dark">★</span>
              <span className="h-8 w-8 rounded-full bg-leaf flex items-center justify-center text-[10px] font-bold text-white border-2 border-earthy-dark">★</span>
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">5.0 Star Rated Local Service</span>
              <span className="text-gray-300">Based on 30+ garden transformations</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave/Angle transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-sand to-transparent z-0 pointer-events-none" />
    </section>
  );
}
