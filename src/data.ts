/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, GalleryItem, Testimonial } from './types';

// High-quality Unsplash CDN images to ensure they load flawlessly on production builds (Vercel, Cloudflare Pages, GitHub Pages) without absolute path compilation errors.
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200',
  patio: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  gardenRoom: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
  planting: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200',
  
  // Complementary premium unsplash landscaping images
  landscaping: 'https://images.unsplash.com/photo-1558904541-efa8c3a30fc9?auto=format&fit=crop&q=80&w=1200',
  pergola: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200',
  firepit: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  paving: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200'
};

export const SERVICES: Service[] = [
  {
    id: 'design-landscaping',
    title: 'Garden Design & Landscaping',
    description: 'Bespoke design concepts tailored to your lifestyle, executed with master craftsmanship.',
    longDescription: 'Our hallmark service. We translate your dreams into detailed 2D/3D design plans, considering soil, climate, topography, and aesthetic goals. Then, our in-house team brings it to life with precision construction.',
    iconName: 'Compass',
    image: IMAGES.hero,
    features: [
      'Site analysis & spatial planning',
      'Concept sketches & 3D renders',
      'Material & soft planting plans',
      'Full turnkey garden builds'
    ]
  },
  {
    id: 'patios-outdoor-living',
    title: 'Patios & Outdoor Living Spaces',
    description: 'Elegant porcelain & stone patios designed for entertaining, dining, and relaxation.',
    longDescription: 'Extend your interior living space outdoors. We specialize in high-end porcelain tiling, natural Indian sandstone, slate, and seamless transitions from indoor bi-fold doors to outdoor seating zones.',
    iconName: 'Sparkles',
    image: IMAGES.patio,
    features: [
      'Premium porcelain & sandstone paving',
      'Integrated fire pits & dining zones',
      'Built-in perimeter bench seating',
      'Ambient lighting installation'
    ]
  },
  {
    id: 'garden-rooms-kitchens',
    title: 'Garden Rooms & Outdoor Kitchens',
    description: 'Bespoke timber garden buildings, workshops, and fully integrated custom BBQ kitchens.',
    longDescription: 'Maximize your garden’s utility. From insulated cedar-clad garden offices to stunning masonry outdoor kitchens with integrated barbecues, pizza ovens, concrete worktops, and outdoor fridges.',
    iconName: 'Home',
    image: IMAGES.gardenRoom,
    features: [
      'Bespoke cedar/larch cladding garden offices',
      'Custom BBQ stations & concrete counters',
      'Full power, internet, and plumbing setup',
      'Built-in modern bar counters'
    ]
  },
  {
    id: 'hard-landscaping-paving',
    title: 'Hard Landscaping & Paving',
    description: 'Expert brickwork, retaining walls, fencing, and timber/composite decking solutions.',
    longDescription: 'The skeleton of your garden. We build robust structures that stand the test of North Devon’s coastal weather, including retaining walls, timber or composite decking, sleepers, and premium fencing.',
    iconName: 'Hammer',
    image: IMAGES.paving,
    features: [
      'Siberian Larch & Composite decking',
      'Brick, block, and natural stone walling',
      'Bespoke visual cedar panel fencing',
      'Driveways, pathways & sleeper beds'
    ]
  },
  {
    id: 'planting-soft-landscaping',
    title: 'Planting & Soft Landscaping',
    description: 'Curated coastal-hardy planting schemes for color, texture, and year-round interest.',
    longDescription: 'The soul of the garden. We create planting plans designed to thrive in North Devon’s unique microclimates. Whether you need sensory borders, low-maintenance gravel gardens, or lush wildlife havens.',
    iconName: 'Leaf',
    image: IMAGES.planting,
    features: [
      'Coastal-hardy and salt-tolerant selections',
      'Soil improvement & mulching schemes',
      'Specimen trees and mature hedge planting',
      'Instant turfed or seeded lawns'
    ]
  },
  {
    id: 'transformations-maintenance',
    title: 'Transformations & Maintenance',
    description: 'Complete garden makeovers and premium restoration to breathe life into older plots.',
    longDescription: 'Is your current garden overgrown or unusable? We undertake complete strip-outs and premium reconstructions, or provide scheduled seasonal tidy-ups to restore your space to its absolute best.',
    iconName: 'RotateCw',
    image: IMAGES.landscaping,
    features: [
      'Complete clearance and groundworks',
      'Restoration of neglected borders',
      'Drainage corrections & soil works',
      'Seasonal renovation services'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'croyde-living-space',
    title: 'Coastal Hillside Garden',
    category: 'Patios & Outdoor Living Spaces',
    location: 'Croyde, North Devon',
    image: IMAGES.hero,
    description: 'A multi-tier hillside garden overlooking the bay, featuring premium grey porcelain tiles, integrated dry-stone retaining walls, and salt-hardy ornamental grasses.'
  },
  {
    id: 'braunton-retreat',
    title: 'Cedar Garden Office & Decking',
    category: 'Garden Rooms & Outdoor Kitchens',
    location: 'Braunton, North Devon',
    image: IMAGES.gardenRoom,
    description: 'A luxury insulated home office clad in western red cedar, bordered by premium composite decking and soft sensory lighting for evening work and relaxation.'
  },
  {
    id: 'saunton-patio-kitchen',
    title: 'Bespoke Outdoor Kitchen & BBQ',
    category: 'Patios & Outdoor Living Spaces',
    location: 'Saunton, North Devon',
    image: IMAGES.patio,
    description: 'An elegant outdoor entertaining area with a built-in stone kitchen, premium Bull BBQ, wood-fired pizza oven, and comfortable modern seating around a granite fire pit.'
  },
  {
    id: 'woolacombe-coastal-planting',
    title: 'Modern Soft Planting Scheme',
    category: 'Planting & Soft Landscaping',
    location: 'Woolacombe, North Devon',
    image: IMAGES.planting,
    description: 'A vibrant, wind-resistant soft landscaping project featuring lavender, Verbena bonariensis, and specimen olive trees planted in white rendered raised planters.'
  },
  {
    id: 'barnstaple-modern-garden',
    title: 'Contemporary Townhouse Haven',
    category: 'Garden Design & Landscaping',
    location: 'Barnstaple, North Devon',
    image: IMAGES.paving,
    description: 'A low-maintenance modern layout combining sleek grey paving stones, custom slatted cedar screen fencing, and raised architectural planter beds.'
  },
  {
    id: 'instow-woodland-pergola',
    title: 'Woodland Pergola & Fire Pit',
    category: 'Hard Landscaping & Paving',
    location: 'Instow, North Devon',
    image: IMAGES.pergola,
    description: 'A cozy timber pergola dining area nestled under native trees, complete with a natural sandstone flagged base and a raw iron central fire bowl.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'David & Sarah Jenkins',
    role: 'Homeowners',
    location: 'Croyde, North Devon',
    quote: 'Devon Buds completely transformed our sloping back garden into a stunning, multi-tiered outdoor living room. The attention to detail on the porcelain paving and dry-stone walls is absolutely second to none. We couldn’t be happier with our new space!',
    rating: 5,
    date: 'May 2026'
  },
  {
    id: 'testimonial-2',
    name: 'Rebecca Finch',
    role: 'Remote Software Engineer',
    location: 'Braunton, North Devon',
    quote: 'The cedar garden office and composite deck built by Devon Buds have genuinely changed my life. They handled everything from the deep foundation groundworks to the elegant planting, electrical wiring, and ambient lighting. Professional, reliable, and incredibly talented.',
    rating: 5,
    date: 'April 2026'
  },
  {
    id: 'testimonial-3',
    name: 'Mark Henderson',
    role: 'Property Developer',
    location: 'Saunton, North Devon',
    quote: 'We hire Devon Buds for all of our high-end residential landscaping projects in North Devon. Their garden design concepts are always fresh and organic, and their build quality is consistently stellar. Outstanding local business!',
    rating: 5,
    date: 'June 2026'
  },
  {
    id: 'testimonial-4',
    name: 'Claire Townsend',
    role: 'Homeowner',
    location: 'Barnstaple, North Devon',
    quote: 'They built a brilliant outdoor kitchen and raised planters for our family. Even with our clay-heavy soil and difficult access, the team worked tirelessly. Efficient, polite, and clean throughout the entire build.',
    rating: 5,
    date: 'March 2026'
  }
];

export const FAQS = [
  {
    question: 'How does your garden design process work?',
    answer: 'It starts with an initial on-site consultation to discuss your ideas, lifestyle, and budget. We then create a detailed design proposal including 2D layout drawings, 3D renderings, and material palettes. Once you approve, our skilled hard landscaping team begins the physical transformation.'
  },
  {
    question: 'What locations do you cover?',
    answer: 'We are based in Braunton, North Devon, and cover the entire surrounding region, including Saunton, Croyde, Woolacombe, Barnstaple, Ilfracombe, Instow, Bideford, and South Molton.'
  },
  {
    question: 'Can you work with coastal-specific microclimates?',
    answer: 'Absolutely. Being based on the North Devon coast, we specialize in specifying wind-hardy, salt-tolerant, and drought-resistant plants that will thrive in sandy, exposed coastal gardens like Saunton and Croyde.'
  },
  {
    question: 'How long does a typical garden transformation take?',
    answer: 'Small projects (like a simple patio replacement or decking installation) take 1-2 weeks. Complete garden transformations, including excavation, drainage, masonry walls, paving, carpentry, and planting, typically range from 3 to 6 weeks depending on scale and weather conditions.'
  },
  {
    question: 'Are your estimates and quotes free?',
    answer: 'Yes! We provide free initial site visits and detailed, itemized estimates for all landscaping and construction work across North Devon.'
  }
];

export const CONTACT_INFO = {
  phone: '+44 7876 434009',
  phoneDisplay: '07876 434009',
  email: 'devonbuds@hotmail.com',
  address: 'Braunton, North Devon, EX33',
  googleMapsUrl: 'https://www.google.com/maps/place/Braunton/@51.1095,-4.1611,13z',
  instagram: 'https://instagram.com/devonbudsgardendesign',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 1:00 PM'
};
