import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ExhibitionShowcase from '../components/ExhibitionShowcase'
import FeaturedArtists from '../components/FeaturedArtists'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExhibitionShowcase />
      <FeaturedArtists />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  )
}