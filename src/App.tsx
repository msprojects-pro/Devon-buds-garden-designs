/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <div className="min-h-screen bg-sand font-sans text-gray-800 antialiased overflow-x-hidden relative">
      {/* Global Navigation Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />
      
      {/* Page Sections */}
      <main>
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <About />
        <Services onOpenQuoteModal={handleOpenQuoteModal} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Mobile-Only Action Utilities */}
      <FloatingCTA onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Quote Dialog */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}

