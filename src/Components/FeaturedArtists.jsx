import React from 'react'
import Artist1 from '../assets/img4.jpg';
import Artist2 from '../assets/img5.jpg';
import Artist3 from '../assets/img6.avif';
const artists = [
  {
    name: 'Kunle Adeyemi',
    specialty: 'Contemporary Painter',
    image: Artist1,
    bio: 'Award-winning artist exploring themes of identity and culture through vibrant abstract works.',
    works: '12+ Exhibitions',
  },
  {
    name: 'Tayo Olorunto',
    specialty: 'Sculptor & Installations',
    image: Artist2,
    bio: 'Creating immersive spatial experiences that challenge perception and engage the viewer.',
    works: '8+ International Shows',
  },
  {
    name: 'Zainab Hassan',
    specialty: 'Digital & Mixed Media',
    image: Artist3,
    bio: 'Bridging traditional and digital art forms to create powerful contemporary narratives.',
    works: '15+ Collections',
  },
];

const FeaturedArtists = () => {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">Meet the Creatives</p>
          <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-5">
            Featured<br />
            <span className="text-gradient">Artists.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the talented artists whose work shapes our gallery's vision and mission.
          </p>
        </div>

        {/* Artist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-[#111] hover:border-amber-500/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[1/1]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Info */}
              <div className="p-8">
                <p className="text-xs text-amber-400 uppercase tracking-[0.2em] font-semibold mb-2">{artist.specialty}</p>
                <h3 className="text-2xl font-bold font-display text-white mb-3">{artist.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{artist.bio}</p>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-semibold">{artist.works}</span>
                  <button className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                    View Work →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArtists