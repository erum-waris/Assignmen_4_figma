import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import RecentPost from './components/Recent-Post'
import FeatureWork from './components/Feature-Work'
import Footer from './components/Footer'

function Home() {
  return (
    
     <div className="flex justify-center overflow-hidden  w-[full] h-[250rem] sm:h-[250rem] md:h-[2457px] lg:h-[2457px] bg-[#CFA6A61C] "> 
    <Navbar />
      < HeroSection />
      <RecentPost />
      <FeatureWork />
      <Footer />
    </div>
  )
}

export default Home