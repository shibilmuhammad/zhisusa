import React from 'react'
import PageIntro from '../components/PageIntro'
import Features from '../components/Features'
import { eventFeatures, eventsFeaturesIntro, eventsIntro } from '../utils/events'
import HostEventIntro from '../components/HostEventIntro'
import ParticipateEventIntro from '../components/ParticipateEventIntro'
import Header from '../components/Header';
const Events = () => {
  return (
    <div>
       <Header />
        <PageIntro data={eventsIntro}/>
        <Features intro={eventsFeaturesIntro} data={eventFeatures}/>
        <HostEventIntro/>
        <ParticipateEventIntro/>
    </div>
  )
}

export default Events