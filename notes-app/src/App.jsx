import React, { useState } from 'react'

const App = () => {

  const [title,setTitle]=useState('')
  const [details,setDetails]= useState('')

  const [task,setTask]=useState([])


  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task];

    copyTask.push({title,details})

    setTask(copyTask)
    console.log(task)
    setTitle('')
    setDetails('')
  }


  const deleteNote=(idx)=>{
    const copyTask=[...task]
    //console.log(copyTasks[idx]);

    copyTask.splice(idx,1)// here 1 represens no.of items to be removed.

    setTask(copyTask)
    
  }


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


        <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 border-2 rounded'>Add Note</button>
      </form>
      <div className=' lg:w-1/2 gap-5 lg:border-l-2 p-10 '>
      <h1 className='text-5xl font-bold'>Recent Notes</h1>
        
        <div id='scroll' className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%]  overflow-auto'>
            {task.map(function(elem,idx){
              return <div key={idx} className="flex justify-between flex-col items-start h-52 relative w-40 overflow-y-auto rounded-2xl text-black p-4 bg-white  ">
                <div>
                
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white'>Delete</button>
                
              </div>
            })}
            
            
        </div>
      </div>
    </div>
  )
}

export default App
