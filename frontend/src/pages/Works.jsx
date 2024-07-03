import React from 'react'
import SpecsCard from '../components/SpecsCard'
import Features from '../components/Features'
import PageIntro from '../components/PageIntro'
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