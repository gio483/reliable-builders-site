// Reliable Builders — customer testimonials.
//
// IMPORTANT (honesty rule): only REAL quotes from REAL clients go here. Michael
// has two testimonials to add — paste them below in this shape and they render
// automatically. Until then the Testimonials section shows a "references on
// request" card instead of inventing reviews.
//
// Example shape:
// { quote: 'They talked me out of a change that would have cost me $8k...',
//   name: 'Sarah M.', location: 'San Carlos', project: 'Kitchen remodel' }

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  // TODO: add Michael's two real testimonials here.
];
