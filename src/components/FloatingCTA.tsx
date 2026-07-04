/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface FloatingCTAProps {
  onOpenQuoteModal: () => void;
}

export default function FloatingCTA({ onOpenQuoteModal }: FloatingCTAProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-3 shadow-lg flex items-center justify-between sm:hidden"
      id="mobile-floating-cta-bar"
    >
      <div className="flex-1 flex gap-3">
        {/* Call Now Action */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-earthy text-white font-bold text-xs rounded-xl shadow-md active:bg-earthy-dark active:scale-[0.98] transition-all"
        >
          <Phone className="h-4 w-4 animate-pulse" />
          <span>Call Now</span>
        </a>

        {/* Free Quote Action */}
        <button
          onClick={onOpenQuoteModal}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-leaf hover:bg-leaf-dark text-white font-bold text-xs rounded-xl shadow-md active:scale-[0.98] transition-all"
          id="floating-quote-btn"
        >
          <Calendar className="h-4 w-4" />
          <span>Get Free Quote</span>
        </button>
      </div>
    </div>
  );
}
