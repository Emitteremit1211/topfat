import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExhibitionShowcase from './components/ExhibitionShowcase'
import FeaturedArtists from './components/FeaturedArtists'
import Testimonials from './components/Testimonials'
import Ctabanner from './components/Ctabanner'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExhibitionShowcase />
      <Ctabanner />
      <FeaturedArtists/>
      <Testimonials/>
      <Footer />
    </>
  )
}

export default App