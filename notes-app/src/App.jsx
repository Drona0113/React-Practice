import React from 'react'

const App = () => {
  return (
    <div className='h-screen  bg-black text-white'>
      <form className='flex flex-col gap-4  p-10 '>
        <input 
        type="text"
        placeholder='Enter Notes Heading'
        className='px-5 py-2 border-2 rounded'
         
         />
        <input
          type="text"
          placeholder='Write Details'
          className='px-5 h-20 py-2 border-2 rounded'
          />
        <button className='bg-white text-black px-5 py-2 border-2 rounded'>Add Note</button>
      </form>
    </div>
  )
}

export default App
