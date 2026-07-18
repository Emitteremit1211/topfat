import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ExhibitionShowcase from './components/ExhibitionShowcase'
import FeaturedArtists from './Components/FeaturedArtists'
import Testimonials from './Components/Testimonials'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExhibitionShowcase />
      <CtaBanner />
      <FeaturedArtists/>
      <Testimonials/>
      <Footer />
    </>
  )
}

export default App