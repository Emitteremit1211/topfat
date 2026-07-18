import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ExhibitionShowcase from '../Components/ExhibitionShowcase'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import FeaturedArtists from '../Components/FeaturedArtists'
import Ctabanner from '../Components/Ctabanner'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Ctabanner/>
    <ExhibitionShowcase/>
    <FeaturedArtists/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Homepage