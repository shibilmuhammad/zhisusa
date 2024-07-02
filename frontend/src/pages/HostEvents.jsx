import React from 'react'
import StripedIntro from '../componets/StripedIntro'
import { workSpecsData } from '../utils/works'
import SpecsCard from '../componets/SpecsCard'
import { eventsSpecsData } from '../utils/events'
import MobileStripedIntro from '../componets/MobileStripedIntro'

const HostEvents = () => {
  return (
    <div>
        <div className='hidden md:block'>
          <StripedIntro/>
        </div>
        <div className='md:hidden block'>
          <MobileStripedIntro/>
        </div>
        
        <div className=' py-8 flex flex-col gap-5 md:gap-10 md:mt-12 '>
          {eventsSpecsData.map((item,index) => <SpecsCard id={index+1} data={item} page={'work'}/>)}
        </div>
    </div>
  )
}

export default HostEvents