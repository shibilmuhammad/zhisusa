import React from 'react'

const WorkCard = ({data}) => {
  return (
    <div className='border-2 border-orange-dark_hover rounded-3xl font-poppins'>
        <img className='rounded-t-3xl h-40 w-full object-cover' src={data?.thumbnail} alt="thumb" />
        <div className='flex flex-col justify-center w-full items-center gap-2 my-3'>
            <h1 className='text-xl font-bold'>{data?.title}</h1>
            <p className='text-center'>{data?.shortDec}</p>
            <button className='rounded-xl px-12 p-2 text-white bg-PrimaryBlue-normal'>
                {data?.buttonText}
            </button>
        </div>
    </div>
  )
}

export default WorkCard