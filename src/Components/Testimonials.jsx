import React from 'react';

const testimonials = [
  {
    name: 'Chioma Okafor',
    role: 'Art Collector',
    avatar: 'CO',
    rating: 5,
    text: "Topfat has become my favorite gallery in Ibadan. The curated collections are thoughtfully presented, and the team's passion for art is infectious. A must-visit!",
    location: 'Ibadan, Nigeria',
  },
  {
    name: 'Segun Adeleke',
    role: 'Creative Director',
    avatar: 'SA',
    rating: 5,
    text: "The exhibitions here challenge my perspective on contemporary art. Every visit feels fresh and inspiring. Highly recommend for anyone serious about art.",
    location: 'Lagos, Nigeria',
  },
  {
    name: 'Amara Okonkwo',
    role: 'Student',
    avatar: 'AO',
    rating: 4.5,
    text: "Great space, amazing artists, and welcoming staff. The guided tours are educational and engaging. Perfect place to understand modern Nigerian art.",
    location: 'Ibadan, Nigeria',
  },
  {
    name: 'David Ogunwale',
    role: 'Photographer',
    avatar: 'DO',
    rating: 5,
    text: "The venue itself is a work of art. Beyond the exhibitions, the experience of being in this space is unforgettable. Topfat sets the standard for galleries.",
    location: 'Oyo State, Nigeria',
  },
];

const Stars = ({ count }) => {
  const fullStars = Math.floor(count);
  const hasHalf = count % 1 !== 0;

  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      {hasHalf && (
        <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGrad)"
            stroke="currentColor"
            strokeWidth="1"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      )}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-28 bg-[#080808] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">What Visitors Say</p>
          <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-5">
            Community<br />
            <span className="text-gradient">Voices.</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-amber-500/20 hover:bg-white/[0.04] transition-all duration-400"
            >
              <Stars count={t.rating} />

              <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                  <p className="text-gray-700 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl font-black text-white">4.9/5</p>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Average Rating</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div>
            <p className="text-3xl font-black text-white">2000+</p>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Happy Visitors</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div>
            <p className="text-3xl font-black text-white">50+</p>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Artworks Displayed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;