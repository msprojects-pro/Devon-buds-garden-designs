/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-24">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-leaf font-semibold text-xs uppercase tracking-widest block">Client Reviews</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              What our clients say about us.
            </h2>
            <p className="text-gray-600 font-light max-w-xl text-base leading-relaxed">
              We take pride in our punctuality, mastercraft construction, and respectful site cleanliness. Read genuine reviews from residential transformations across the coast.
            </p>
          </div>

          {/* Aggregate Rating Banner */}
          <div className="lg:col-span-4 bg-white border border-earthy-pale p-6 rounded-2xl shadow-sm flex items-center gap-4 w-full sm:w-80 lg:w-auto ml-auto">
            <div className="h-14 w-14 rounded-xl bg-leaf-pale flex items-center justify-center text-leaf font-bold text-xl flex-shrink-0">
              5.0
            </div>
            <div>
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="block text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">
                Perfect Google Rating
              </span>
              <span className="block text-xs text-gray-400 font-medium">
                Based on 30+ verified local designs
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-earthy-pale/40 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              id={`testimonial-card-${t.id}`}
            >
              {/* Giant Quote icon overlay */}
              <div className="absolute top-6 right-8 text-earthy-pale/60 z-0">
                <Quote className="h-10 w-10 stroke-[1.5]" />
              </div>

              <div className="relative z-10 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Star rating */}
                  <div className="flex gap-0.5 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Body Text */}
                  <p className="text-gray-600 text-sm italic font-light leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                {/* Separator */}
                <div className="border-t border-gray-50 pt-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-earthy-pale text-earthy flex items-center justify-center font-bold text-sm">
                      {t.name.split(' ')[0][0]}
                      {t.name.split(' ').length > 1 ? t.name.split(' ')[1][0] : ''}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-display font-bold text-sm text-gray-900 leading-tight">
                          {t.name}
                        </span>
                        <CheckCircle2 className="h-3.5 w-3.5 text-leaf-light fill-leaf-pale" />
                      </div>
                      <span className="block text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge footer */}
        <div className="mt-16 text-center border-t border-gray-100 pt-10 flex flex-wrap justify-center gap-8 text-gray-400 font-sans font-semibold text-xs uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-leaf-light fill-leaf-pale" />
            <span>Recommended by Croyde Residents</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-leaf-light fill-leaf-pale" />
            <span>Braunton Chamber of Commerce</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-leaf-light fill-leaf-pale" />
            <span>100% Insured Landscapers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
