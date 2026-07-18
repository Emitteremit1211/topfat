import React from 'react';

const Ctabanner = () => {
  return (
    <section className="py-28 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-5">Ready to Explore?</p>
          <h2 className="text-5xl md:text-7xl font-black font-display text-white mb-6 leading-none">
            Discover Art Today.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Visit Topfat Art Gallery to experience contemporary and traditional artworks. Open from Tuesday to Sunday, 
            10 AM to 6 PM. Group bookings available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium btn-primary text-base">
              Book Your Visit
            </button>
            <button className="btn-premium btn-secondary text-base">
              View Schedule
            </button>
          </div>

          {/* Micro trust signals */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free admission options
            </span>
            <span className="hidden sm:block text-gray-700">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Group tours welcome
            </span>
            <span className="hidden sm:block text-gray-700">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Guided exhibitions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctabanner;