import React from 'react'
import StripedIntro from '../components/StripedIntro'
import { workSpecsData } from '../utils/works'
import SpecsCard from '../components/SpecsCard'
import { eventsHostIntro, eventsSpecsData } from '../utils/events'
import MobileStripedIntro from '../components/MobileStripedIntro'
import Header from '../components/Header';
const HostEvents = () => {
  return (
    <div>
       <Header />
        <div className='hidden md:block'>
          <StripedIntro type={'host'} data={eventsHostIntro}/>
        </div>
        <div className='md:hidden block'>
          <MobileStripedIntro type={'host'} data={eventsHostIntro}/>
        </div>
        
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12 '>
          {eventsSpecsData.map((item,index) => <SpecsCard id={index+1} data={item} page={'work'}/>)}
        </div>
    </div>
  )
}

export default HostEvents