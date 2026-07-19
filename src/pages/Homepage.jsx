import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ExhibitionShowcase from '../components/ExhibitionShowcase'
import FeaturedArtists from '../components/FeaturedArtists'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Ctabanner from '../Components/Ctabanner'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExhibitionShowcase />
      <FeaturedArtists />
      <Testimonials />
      <Ctabanner />
      <Footer />
    </>
  )
}