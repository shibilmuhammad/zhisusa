import React from 'react'
import PageIntro from '../components/PageIntro'
import Features from '../components/Features'
import { eventFeatures, eventsFeaturesIntro, eventsIntro } from '../utils/events'
import HostEventIntro from '../components/HostEventIntro'
import ParticipateEventIntro from '../components/ParticipateEventIntro'

const Events = () => {
  return (
    <div>
        <PageIntro data={eventsIntro}/>
        <Features intro={eventsFeaturesIntro} data={eventFeatures}/>
        <HostEventIntro/>
        <ParticipateEventIntro/>
    </div>
  )
}

export default Events