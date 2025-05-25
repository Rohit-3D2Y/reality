import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Steps from './Steps'
import BrokerSec from './BrokerSec'
import FeatureSection from './FeatureSection'
import AppDownloadBanner from './AppDownloadBanner'
import TestimonialSlider from './Slider'
import PropertyShowcase from './Listing'
import Footer from './Footer'
import WhyUsSection from './WhyUs'

const Landing = () => {
  return (
    <div className='border-b-2 border-b-red-500'>
        <Navbar />
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