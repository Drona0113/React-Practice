import React, { useState } from 'react'

const App = () => {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(title,details)

    setTitle('')
    setDetails('')
  }

  const [title,setTitle]=useState('')
  const [details,setDetails]= useState('')
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      
      className='flex gap-4 lg:w-1/2 flex-col items-start  p-10 ' >
        <h1 className='text-5xl font-bold'>Add Notes</h1>

        {/* First Input for Heading*/}
        <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium py-2 outline-none border-2 rounded'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        {/* Detailed description*/}
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row outline-none border-2 rounded'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />


        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 border-2 rounded'>Add Note</button>
      </form>
      <div className=' lg:w-1/2 gap-5 lg:border-l-2  p-10'>
      <h1 className='text-5xl font-bold'>Recent Notes</h1>
        
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            <div className="h-52 w-40 rounded-2xl bg-white"></div>
            
        </div>
      </div>
    </div>
  )
}

export default App
