import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExhibitionShowcase from './components/ExhibitionShowcase'
import FeaturedArtists from './Components/FeaturedArtists'
import Testimonials from './Components/Testimonials'
import Ctabanner from './Components/Ctabanner'

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