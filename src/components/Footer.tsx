/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Instagram, Heart } from 'lucide-react';
import { CONTACT_INFO, IMAGES, SERVICES } from '../data';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earthy text-white pt-16 pb-24 sm:pb-12 border-t border-earthy-dark/40" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-earthy-dark/30">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="h-12 w-12 rounded-full bg-leaf-light text-earthy-dark flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 font-display font-black text-2xl shadow-sm">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-xl tracking-tight leading-none">
                  Devon Buds
                </span>
                <span className="text-[10px] uppercase font-bold text-leaf-light tracking-widest mt-0.5">
                  Garden Design
                </span>
              </div>
            </a>
            
            <p className="text-gray-300 text-sm font-light leading-relaxed">
              We create luxury outdoor living spaces that combine seamless functionality, premium timbers, quality stone paving, and gorgeous salt-hardy soft plantings across North Devon.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-earthy-dark hover:bg-leaf text-white flex items-center justify-center transition-colors border border-earthy-dark/50"
                aria-label="Instagram profile"
                id="footer-instagram-link"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-leaf-light">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-leaf-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-leaf-light transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-leaf-light transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-leaf-light transition-colors">Completed Work</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-leaf-light transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-leaf-light transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-leaf-light transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Gardening Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-leaf-light">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SERVICES.map(svc => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-leaf-light transition-colors truncate block">
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-leaf-light">Get in touch</h4>
            <ul className="space-y-3.5 text-sm text-gray-300">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-leaf-light flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-leaf-light transition-colors">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail className="h-4.5 w-4.5 text-leaf-light flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-leaf-light transition-colors truncate block max-w-[200px]">
                  {CONTACT_INFO.email}
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-leaf-light flex-shrink-0 mt-0.5" />
                <span>Braunton, North Devon, UK</span>
              </li>
            </ul>

            <button
              onClick={onOpenQuoteModal}
              className="w-full mt-4 py-2.5 rounded-lg bg-leaf hover:bg-leaf-dark text-white font-bold text-xs transition-colors shadow-md"
              id="footer-quote-cta"
            >
              Get a Free Quote
            </button>
          </div>

        </div>

        {/* Bottom copyright & credits bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <span>&copy; {currentYear} Devon Buds Garden Design. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="h-3.5 w-3.5 text-leaf fill-leaf animate-pulse" />
            <span>for North Devon homeowners</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
