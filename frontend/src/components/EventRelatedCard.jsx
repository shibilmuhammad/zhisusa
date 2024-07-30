import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const EventRelatedCard = ({data}) => {
  const navigate = useNavigate()
  const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = { month: 'short', day: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	  }
    const formatTime = (timeString) => {
      console.log(timeString);
      const [hour, minute] = timeString.split(':').map(Number);
      const period = hour >= 12 ? 'PM' : 'AM';
      const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format, handling midnight and noon
      return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
      }
  return (
    <div onClick={() => navigate('/eventDetails',{state: {title:data?.title}})} className='border-2 rounded-2xl '>
        <img className='rounded-t-2xl h-32 w-full object-cover' src={data?.details?.images[0]} alt="thumb" />
        <div className='font-poppins p-3'>
            <span className='text-skyBlue-dark_active text-sm'>{formatDate(data?.details?.schedule?.date)} | {formatTime(data?.details?.schedule?.time)}</span>
            <h3 className=' font-bold'>{data?.title}</h3>
            <div className='flex mt-1 items-center gap-1 text-skyBlue-dark_active'>
                <CiLocationOn/>
                <span className='text-sm'>{data?.details?.location?.venue}</span>
            </div>
        </div>
        
    </div>
  )
}

export default EventRelatedCard