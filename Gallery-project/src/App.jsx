import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Buttons from './components/Buttons'
const App = () => {

  const [userData,setUserData]=useState([])

  const [index,setIndex]=useState(1)

  const getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
    //console.log(userData); displays Array[0] because we use props.userData([]) in buttons component for displaying Loading...
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData=<h1 className='text-gray-400 items-center absolute top-1/2 left-1/2 text-10xl -translate-x-1/2 -translate-y-1/2'>Loading.....</h1>
  
  if(userData.length>0){
    printUserData=userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white '>
     
      <div className='flex h-[90%] flex-wrap gap-5 p-2'>
        {printUserData}
      </div>

      <Buttons index={index} setIndex={setIndex} setUserData={setUserData}/>
    </div>
  )
}

export default App
