import React from 'react'
import PageIntro from '../components/PageIntro'
import Features from '../components/Features'
import SpecsCard from '../components/SpecsCard'
import Header from '../components/Header';
import { activityFeatures, activityFeaturesIntro, activityIntro, activitySpecsData } from '../utils/activities'

const Activities = () => {
  return (
    <div className=' h-[100vh]'>
       <Header />
        <PageIntro data={activityIntro}/>
        <Features page={'live'} intro={activityFeaturesIntro} data={activityFeatures}/>
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12 '>
          {activitySpecsData.map((item,index) => <SpecsCard id={index+1} data={item} page={'live'}/>)}
        </div>
        
    </div>
  )
}

export default Activities