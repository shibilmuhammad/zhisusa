import React from 'react'
import FeaturesCard from '../componets/FeaturesCard'
import SpecsCard from '../componets/SpecsCard'
import Features from '../componets/Features'
import PageIntro from '../componets/PageIntro'

const Works = () => {
  return (
    <div className=' h-[100vh]'>
        <PageIntro/>
        <Features/>
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12'>
            <SpecsCard/>
            <SpecsCard/>
            <SpecsCard/>
            <SpecsCard/>
        </div>
        
    </div>
  )
}

export default Works