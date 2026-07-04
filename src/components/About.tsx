/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ShieldCheck, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';

export default function About() {
  const coreValues = [
    {
      title: 'Local Expertise',
      description: 'Based in Braunton, we understand North Devon’s unique coastal soil, heavy wind, and salt air. We design gardens to withstand local elements beautifully.',
      icon: MapPin,
    },
    {
      title: 'Master Craftsmanship',
      description: 'From porcelain paving to cedar framing, we do not cut corners. Our structural bases, drainage systems, and timber joints are engineered for longevity.',
      icon: Award,
    },
    {
      title: 'Bespoke Design Philosophy',
      description: 'No two plots are the same. We custom design every inch to fit your personal lifestyle, whether you love cooking, gardening, or relaxed lounging.',
      icon: ShieldCheck,
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: '30+', label: 'Stunning Gardens Built' },
    { value: '5★', label: 'Google Rating' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">About Devon Buds</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Crafting luxury outdoor spaces in North Devon.
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
              Founded in Braunton, <strong>Devon Buds Garden Design</strong> is a premium landscaping and design studio serving the wider North Devon coastline. We combine creative architectural design with master-grade construction to build seamless transitions from your home to the outdoors.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Whether you are looking to install a state-of-the-art stone dining patio, construct a fully-equipped outdoor kitchen with a pizza oven, design a modern cedar garden room, or clear out an overgrown plot for a complete luxury makeover, our dedicated local team handles everything from first sketch to final sweep.
            </p>

            {/* Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-leaf mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">Fully Licensed & Local Insured</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-leaf mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">In-House Design & Build Team</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-leaf mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">Sourced Premium UK & Local Materials</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-leaf mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">Coastal planting specialists</span>
              </div>
            </div>

            {/* Stats Block */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <span className="block font-display font-bold text-3xl sm:text-4xl text-leaf">{stat.value}</span>
                  <span className="block text-xs text-gray-500 font-medium tracking-wide mt-1 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Collage Column */}
          <div className="lg:col-span-5 relative" id="about-image-showcase">
            {/* Background decorative solid shape */}
            <div className="absolute -inset-4 bg-earthy-pale/50 rounded-2xl -z-10 transform rotate-1" />
            
            {/* Primary Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-auto">
              <img
                src={IMAGES.planting}
                alt="Devon Buds garden design detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md flex items-center gap-3 border border-earthy-pale">
                <div className="h-10 w-10 rounded-full bg-leaf flex items-center justify-center text-white font-bold text-lg">DB</div>
                <div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider">Our Signature Styling</span>
                  <span className="block text-sm font-bold text-gray-900 leading-none">Organic, modern & timeless</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us Core Values Grid */}
        <div className="mt-20 md:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">The Devon Buds Advantage</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Why we do things differently</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="bg-sand hover:bg-earthy-pale/40 p-8 rounded-2xl border border-earthy-pale/40 hover:border-earthy-light/30 transition-all duration-300 flex flex-col group"
                >
                  <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-earthy-pale text-leaf group-hover:scale-110 transition-transform duration-300 mb-6">
                    <Icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
