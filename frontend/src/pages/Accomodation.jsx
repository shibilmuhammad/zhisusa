import React from 'react'
import PageIntro from '../componets/PageIntro'
import Features from '../componets/Features'
import SpecsCard from '../componets/SpecsCard'
import { accomodationFeatures, accomodationFeaturesIntro, accomodationIntro, accomodationSpecsData } from '../utils/accomodation'


const Accomodation = () => {
  return (
    <div className=' h-[100vh]'>
        <PageIntro data={accomodationIntro}/>
        <Features page={'live'} intro={accomodationFeaturesIntro} data={accomodationFeatures}/>
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12 '>
          {accomodationSpecsData.map((item,index) => <SpecsCard id={index+1} data={item} page={'live'}/>)}
        </div>
        
    </div>
  )
}

export default Accomodation