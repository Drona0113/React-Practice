import React from 'react'

const Buttons = (props) => {
  return (
    <div className='flex justify-center items-center gap-5 p-4 '>
        <button 
        style={{opacity: props.index==1?0.5 : 1}}
        className='bg-amber-400 text-black text-sm cursor:pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={()=>{
          if(props.index>1)
          props.setIndex(props.index-1)
          props.setUserData([]) // for displaying the Loading...
        }}
        >
          Prev
        </button>
        <h4>Page {props.index}</h4>
        <button
        className='bg-amber-400 text-black  text-sm cursor:pointer active:scale-95 rounded px-4 py-2 font-semibold'
         onClick={()=>{
          props.setIndex(props.index+1)
          props.setUserData([]) // for displaying the loading...
        }}
        >
         Next
        </button>
      </div>
  )
}

export default Buttons
