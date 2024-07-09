import React from 'react'
import Header from '../components/Header'
import BookRoomProgressCard from '../components/BookRoomProgressCard'
import RoomDeatilsModificationButton from '../components/RoomDeatilsModificationButton'
import MutlitpleRoomBooking from '../components/MutlitpleRoomBooking'
import PersonalizeBookingSection from '../components/PersonalizeBookingSection'

const PersonalizeBooking = () => {
  return (
    <div>
        <Header bgColor={"white"} />
      <div className="mt-16">
        <BookRoomProgressCard/>
      </div>

    <RoomDeatilsModificationButton />
    <MutlitpleRoomBooking />
    <PersonalizeBookingSection/>
    </div>
  )
}

export default PersonalizeBooking