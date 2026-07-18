import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const exhibitions = [
  {
    name: 'Contemporary Pulse',
    tagline: 'Modern Installations',
    image: img1,
    artist: 'Curated Collection',
    duration: 'Till Dec 2024',
  },
  {
    name: 'Heritage Reflections',
    tagline: 'Traditional & Modern',
    image: img2,
    artist: 'Nigerian Artists',
    duration: 'Ongoing',
  },
  {
    name: 'Digital Canvas',
    tagline: 'New Media Art',
    image: img3,
    artist: 'Emerging Creatives',
    duration: 'Till Sep 2024',
  },
];

const ExhibitionShowcase = () => {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">Current Exhibitions</p>
            <h2 className="text-5xl md:text-6xl font-bold font-display text-white leading-tight">
              Curated<br />
              <span className="text-gray-600">Collections.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500 text-base max-w-xs text-right leading-relaxed">
              Explore our diverse collection of contemporary and traditional artworks from talented Nigerian and international artists.
            </p>
            <button className="mt-4 text-sm font-semibold text-amber-400 hover:text-amber-300 border-b border-amber-400 pb-0.5 transition-colors float-right">
              View All Exhibitions →
            </button>
          </div>
        </div>

        {/* Exhibition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {exhibitions.map((exhibit, index) => (
            <div
              key={index}
              className="group cursor-pointer border border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-2 bg-[#111]"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={exhibit.image}
                  alt={exhibit.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Info */}
              <div className="p-7">
                <p className="text-xs text-amber-400 uppercase tracking-[0.2em] font-semibold mb-1">{exhibit.tagline}</p>
                <h3 className="text-2xl font-bold font-display text-white mb-3">{exhibit.name}</h3>

                {/* Details */}
                <div className="flex gap-6 mb-5">
                  <div>
                    <p className="text-lg font-bold text-white">{exhibit.artist}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">By</p>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <p className="text-lg font-bold text-white">{exhibit.duration}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">Duration</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <p className="text-sm text-gray-500 font-medium">Featured</p>
                  <button className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionShowcase;