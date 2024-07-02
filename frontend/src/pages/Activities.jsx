import React from 'react'
import PageIntro from '../componets/PageIntro'
import Features from '../componets/Features'
import SpecsCard from '../componets/SpecsCard'
import { activityFeatures, activityFeaturesIntro, activityIntro, activitySpecsData } from '../utils/activities'

const Activities = () => {
  return (
    <div className=' h-[100vh]'>
        <PageIntro data={activityIntro}/>
        <Features page={'live'} intro={activityFeaturesIntro} data={activityFeatures}/>
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12 '>
          {activitySpecsData.map((item,index) => <SpecsCard id={index+1} data={item} page={'live'}/>)}
        </div>
        
    </div>
  )
}

export default Activities