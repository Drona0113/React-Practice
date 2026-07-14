import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
        <div>
            <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-15'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem possimus cum nulla porro molestias animi?</p>
            <div className='flex justify-between'>
                <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-8 py-3 rounded-full '>
                   {props.tag} </button>
                <button className=' text-gray-700 font-semibold px-4 py-3 rounded-full ml-4'><i class="ri-arrow-right-long-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
