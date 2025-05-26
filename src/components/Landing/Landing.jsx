import React from 'react'
import Navbar from '../Navbar'
import Hero from './_comps/Hero'
import Steps from './_comps/Steps'
import BrokerSec from './_comps/BrokerSec'
import FeatureSection from './_comps/FeatureSection'
import AppDownloadBanner from './_comps/AppDownloadBanner'
import TestimonialSlider from './_comps/Slider'
import PropertyShowcase from './_comps/Listing'
import Footer from './_comps/Footer'
import WhyUsSection from './_comps/WhyUs'

const Landing = () => {
  return (
    <div className='border-b-2 border-b-red-500'>
        <Hero />
        <Steps />
        <FeatureSection />
        <BrokerSec />
        <PropertyShowcase />
        <TestimonialSlider />
        <WhyUsSection />
        <AppDownloadBanner />
        <Footer />
    </div>
  )
}

export default Landing