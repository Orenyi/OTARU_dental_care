import React from 'react'
import Hero from './Hero'
import HomeAbout from './HomeAbout'
import Services from './Services'
import OurPartner from './OurPartner'
import Testimonials from './Testimonials'
import Faq from './Faq'

const index = () => {
  return (
    <section>
        <Hero/>
        <HomeAbout/>
        <Services/>
        <OurPartner/>
        <Testimonials/>
        <Faq/>
    </section>
  )
}

export default index