import React from 'react'
import Hero from '../components/Hero.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ThingsHappenCard from '../components/ThingsHappenCard.jsx'

const Home = () => {
  return (
    <div>
        <Hero/>
        <ServicesSection/>
        <ThingsHappenCard/>
    </div>
  )
}

export default Home