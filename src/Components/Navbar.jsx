import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Exhibitions", path: "/exhibitions" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-black/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 py-3 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">
            Topfat<span className="text-amber-400">Art</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-white/80 hover:text-amber-400 transition-colors duration-300 group"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/visit"
              className="px-5 py-2 rounded-full bg-amber-400 text-black font-bold hover:bg-amber-500 transition"
            >
              Visit Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-white z-[1000] relative w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-amber-400/10 transition"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-[999] ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-24 bg-black/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-2xl shadow-black/30">
          <div className="container mx-auto px-6 py-6 flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
                className={`py-4 text-lg font-medium border-b border-white/10 text-white hover:text-amber-400 transition-all duration-300 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/visit"
              onClick={() => setIsOpen(false)}
              className="mt-6 px-6 py-3 rounded-full bg-amber-500 text-black font-bold text-center shadow-xl shadow-amber-500/30 hover:scale-[1.02] active:scale-95 transition-transform"
            >
              Visit Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;