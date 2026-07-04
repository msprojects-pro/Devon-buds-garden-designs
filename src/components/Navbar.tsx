/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO, IMAGES } from '../data';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner (Contact info & hours) */}
      <div className="bg-earthy text-white py-1.5 px-4 text-xs font-sans border-b border-earthy-dark/30 relative z-40 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1 hover:text-leaf-light transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1 hover:text-leaf-light transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="text-white/80">
            <span>Serving Braunton, Saunton, Croyde, Woolacombe & North Devon</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-0 sm:top-8 left-0 right-0 z-30 transition-all duration-300 px-4 max-w-7xl mx-auto`}
        id="app-header"
      >
        <div
          className={`w-full rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-lg border border-gray-100 py-3'
              : 'bg-white/70 backdrop-blur-sm sm:bg-transparent py-4 border-b border-white/10 sm:border-0'
          }`}
        >
          <div className="px-4 sm:px-6 flex items-center justify-between">
            {/* Logo and Brand */}
            <a href="#home" className="flex items-center gap-2.5 group" id="brand-logo-link">
              <div className="h-10 w-10 rounded-full bg-leaf text-white flex items-center justify-center font-display font-bold text-lg border border-leaf-light/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-gray-900 tracking-tight leading-none text-lg">
                  Devon Buds
                </span>
                <span className="text-[10px] uppercase font-semibold text-leaf tracking-widest mt-0.5">
                  Garden Design
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans font-medium text-sm text-gray-700 hover:text-leaf transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-leaf transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Quote Action */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="hidden lg:flex items-center gap-1.5 text-gray-700 hover:text-leaf transition-colors font-semibold text-sm"
              >
                <Phone className="h-4 w-4 text-leaf" />
                <span>Call Now</span>
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-xl bg-leaf hover:bg-leaf-dark text-white font-medium text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                id="header-quote-btn"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 rounded-lg bg-leaf hover:bg-leaf-dark text-white font-semibold text-xs transition-colors"
                id="header-quote-mobile-btn"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
                id="mobile-menu-trigger-btn"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Tablet Menu Trigger */}
            <div className="hidden sm:flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
                id="tablet-menu-trigger-btn"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 sm:top-24 z-20 px-4 lg:hidden"
            id="mobile-menu-dropdown"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-display font-semibold text-lg text-gray-800 hover:text-leaf py-1 border-b border-gray-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-gray-800 font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-4 w-4 text-leaf" />
                  Call: {CONTACT_INFO.phoneDisplay}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3 rounded-xl bg-leaf hover:bg-leaf-dark text-white font-bold shadow-md text-center transition-colors"
                  id="mobile-menu-quote-cta"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
