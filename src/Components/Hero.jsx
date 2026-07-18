import React, { useState, useEffect, useRef } from 'react';
import vid1 from '../assets/vid1i.mp4';
import vid2 from '../assets/vid2i.mp4';
import vid3 from '../assets/vid3i.mp4';

const videos = [vid1, vid2, vid3];

const Hero = () => {
  const [fade, setFade] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setFade(true);

    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);

      setFade(false);
    }, 500);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => { });
    }
  }, [currentVideo]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`w-full h-full object-cover absolute inset-0 z-0 transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"}`}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Black Fade Overlay */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 uppercase opacity-0 animate-fade-up [animation-delay:0.1s]">
          Topfat <span className="text-amber-400">Art Gallery</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 tracking-wide font-light max-w-2xl mx-auto opacity-0 animate-fade-up [animation-delay:0.35s]">
          Discover contemporary art, immersive exhibitions, and cultural experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up [animation-delay:0.6s]">
          <button className="btn-premium btn-primary w-full sm:w-auto transition-transform duration-300 hover:scale-105">
            Explore Gallery
          </button>
          <button className="btn-premium btn-secondary w-full sm:w-auto transition-transform duration-300 hover:scale-105">
            Book a Visit
          </button>
        </div>
      </div>

      {/* Hero Bottom Info */}
      <div className="absolute bottom-12 w-full flex justify-center space-x-12 md:space-x-24 text-center z-10 px-6 opacity-0 animate-fade-up [animation-delay:0.85s]">
        <div>
          <p className="text-2xl md:text-3xl font-bold">50+</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Artworks</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">Curated</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Collections</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">Ibadan</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Nigeria</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;