import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import ExhibitionShowcase from '../Components/ExhibitionShowcase'
import FeaturedArtists from '../Components/FeaturedArtists'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
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