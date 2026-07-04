/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Home, 
  Hammer, 
  Leaf, 
  RotateCw, 
  ArrowRight, 
  Check, 
  Info,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

// Icon mapper for dynamic icon rendering
const iconMap: Record<string, any> = {
  Compass: Compass,
  Sparkles: Sparkles,
  Home: Home,
  Hammer: Hammer,
  Leaf: Leaf,
  RotateCw: RotateCw,
};

export default function Services({ onOpenQuoteModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenDetailModal = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseDetailModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-sand relative">
      {/* Decorative leafy vectors or subtle graphics could be drawn, let's keep it clean */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">Our Expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Complete garden transformations across North Devon.
          </h2>
          <p className="text-gray-600 mt-4 font-light leading-relaxed">
            We don’t just offer simple gardening. We provide end-to-end design, construction, carpentry, and planting to engineer durable and gorgeous outdoor sanctuaries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Compass;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-earthy-pale hover:shadow-xl hover:border-leaf-light/30 transition-all duration-300 flex flex-col group h-full"
                id={`service-card-${service.id}`}
              >
                {/* Thumbnail Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center text-leaf shadow-md border border-earthy-pale z-10">
                    <Icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-leaf transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-light mt-3 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Bullet features list preview */}
                  <ul className="mt-5 space-y-2 border-t border-gray-50 pt-4 flex-shrink-0">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="h-3.5 w-3.5 text-leaf flex-shrink-0 stroke-[2.5]" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button bar */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3 flex-shrink-0">
                    <button
                      onClick={() => handleOpenDetailModal(service)}
                      className="text-xs text-earthy hover:text-leaf font-bold flex items-center gap-1 transition-colors"
                      id={`detail-btn-${service.id}`}
                    >
                      <Info className="h-3.5 w-3.5" />
                      <span>Learn More</span>
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(service.id)}
                      className="text-xs bg-leaf hover:bg-leaf-dark text-white font-bold py-2 px-3.5 rounded-lg transition-colors flex items-center gap-1 group-hover:scale-[1.02] transform"
                      id={`quote-btn-${service.id}`}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learn More / Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetailModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              id="service-modal-backdrop"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-earthy-pale max-h-[85vh] flex flex-col"
              id="service-detail-modal"
            >
              {/* Cover Image */}
              <div className="relative h-56 bg-gray-100">
                <button
                  onClick={handleCloseDetailModal}
                  className="absolute right-4 top-4 text-white/95 hover:text-white bg-black/40 hover:bg-black/60 p-1.5 rounded-full z-10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-earthy mb-2">Service Overview</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-earthy mb-3">Key Features & Deliverables</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <span className="h-4 w-4 rounded-full bg-leaf-pale flex items-center justify-center text-leaf font-bold text-[9px] mt-0.5 flex-shrink-0">✓</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-sand border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={handleCloseDetailModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 text-xs hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const svcId = selectedService.id;
                    handleCloseDetailModal();
                    onOpenQuoteModal(svcId);
                  }}
                  className="px-5 py-2.5 bg-leaf hover:bg-leaf-dark text-white font-bold rounded-lg text-xs shadow-md transition-all flex items-center gap-1"
                >
                  <span>Request Quote for This Service</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Simple absolute close icon
function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
