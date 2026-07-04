/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Used to look up the correct Lucide icon
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  timeframe: string;
  budget: string;
  message: string;
  location: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  newsletter: boolean;
}
