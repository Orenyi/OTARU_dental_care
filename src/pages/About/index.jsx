import React from 'react'
import Hero from './Hero'
import HomeAbout from './HomeAbout'
import Testimonials from '../Home/Testimonials'
import Mission from './Mission'
import Ceo from './Ceo'

const index = () => {
  return (
    <section>
      <Hero/>
      <HomeAbout/>
      <Mission/>
      <Ceo/>
      <Testimonials/>

    </section>
  )
}

export default index