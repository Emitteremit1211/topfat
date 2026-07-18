import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ExhibitionShowcase from '../components/ExhibitionShowcase'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import FeaturedArtists from '../components/FeaturedArtists'
import Ctabanner from '../components/Ctabanner'

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