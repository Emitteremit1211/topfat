import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import CtaBanner from '../Components/Ctabanner'
import ExhibitionShowcase from '../Components/ExhibitionShowcase'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import FeaturedArtists from '../Components/FeaturedArtists'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <CtaBanner/>
    <ExhibitionShowcase/>
    <FeaturedArtists/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Homepage