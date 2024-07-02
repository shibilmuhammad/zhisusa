import React from 'react'
import FeaturesCard from '../componets/FeaturesCard'
import SpecsCard from '../componets/SpecsCard'
import Features from '../componets/Features'
import PageIntro from '../componets/PageIntro'
import { workFeatures, workFeaturesIntro, workSpecsData } from '../utils/works'
import { workIntro } from '../utils/works'

const Works = () => {
  return (
    <div className=' h-[100vh]'>
        <PageIntro data={workIntro}/>
        <Features intro={workFeaturesIntro} data={workFeatures}/>
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12 '>
          {workSpecsData.map((item,index) => <SpecsCard id={index+1} data={item} page={'work'}/>)}
        </div>
        
    </div>
  )
}

export default Works