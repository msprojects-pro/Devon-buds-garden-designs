/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MapPin, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive categories dynamically plus "All"
  const categories = ['All', 'Garden Design & Landscaping', 'Patios & Outdoor Living Spaces', 'Garden Rooms & Outdoor Kitchens', 'Planting & Soft Landscaping', 'Hard Landscaping & Paving'];

  // Filter items
  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (itemId: string) => {
    const idx = GALLERY_ITEMS.findIndex(item => item.id === itemId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === null ? null : (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1)));
    }
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === null ? null : (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1)));
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? GALLERY_ITEMS[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">Our Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Completed garden transformations.
          </h2>
          <p className="text-gray-600 mt-4 font-light text-base leading-relaxed">
            Take a look through our portfolio of bespoke garden builds, luxury paved patios, timber framing, and rich coastal plantings crafted across North Devon.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="gallery-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-earthy text-white shadow-md'
                  : 'bg-sand hover:bg-earthy-pale/50 text-gray-700 border border-earthy-pale/30'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat.split(' & ')[0]}
            </button>
          ))}
        </div>

        {/* Grid Showcase */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item.id)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-sand border border-earthy-pale/30 shadow-sm cursor-pointer hover:shadow-xl transition-all"
                id={`gallery-item-${item.id}`}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* Content Box */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white transform translate-y-0 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-leaf-light tracking-widest mb-1.5">
                    <span>{item.category}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 mt-2">
                    <MapPin className="h-3.5 w-3.5 text-leaf-light" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Fullscreen indicator */}
                <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-overlay">
            {/* Dark Background Closes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLightbox}
              className="absolute inset-0"
              id="lightbox-backdrop"
            />

            {/* Lightbox Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-sand rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh] z-10"
              id="lightbox-container"
            >
              {/* Left Column: Visual */}
              <div className="relative md:w-3/5 bg-black flex items-center justify-center">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Carousel controls */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Column: Metadata Text */}
              <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between bg-white text-gray-900 overflow-y-auto">
                <div className="space-y-4">
                  {/* Category label */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-leaf uppercase tracking-widest">
                    <span>{currentLightboxItem.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                    {currentLightboxItem.title}
                  </h3>

                  {/* Location badge */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 font-medium pt-1">
                    <MapPin className="h-4 w-4 text-leaf-light" />
                    <span>{currentLightboxItem.location}</span>
                  </div>

                  <hr className="border-gray-100" />

                  {/* Narrative details */}
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {currentLightboxItem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>Completed 2026</span>
                  </div>
                  <button
                    onClick={handleCloseLightbox}
                    className="px-4 py-2 bg-earthy text-white font-bold rounded-lg text-xs hover:bg-earthy-dark transition-colors"
                    id="lightbox-close-btn"
                  >
                    Close Showcase
                  </button>
                </div>
              </div>

              {/* Floating Absolute Close Button (Mobile convenience) */}
              <button
                onClick={handleCloseLightbox}
                className="absolute right-4 top-4 md:right-auto md:left-4 md:top-4 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition-colors z-20 shadow-md"
                aria-label="Close lightbox"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
