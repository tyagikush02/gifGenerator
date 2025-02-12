import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=import.meta.env.VITE_APP_GIPHY_API_KEY;
function Tag() {
  const [tag,setTag]=useState('car');
  const {gif,loading,fetchData}=useGif(tag);

    function clickHandle(){
      fetchData();
    }

    function changeHandler(event){
      setTag(event.target.value);
    }

    return (
    <div className=' flex flex-col justify-between w-[fit-content] min-w-[600px] min-h-[500px] h-[max-content] mx-auto text-center bg-blue-400 gap-4'>
        <h1 className="text-3xl">RANDOM {tag} GIFS</h1>
        {
          loading ? <Spinner/> : <img src={gif} className='mx-auto' width="450"/>
        }

        <input type="text" className='w-[50%] mx-auto text-center' onChange={changeHandler} value={tag}/>

        <button className="bg-white w-[50%] mx-auto rounded-md mb-[1rem] font-bold opacity-80 hover:opacity-100" onClick={clickHandle}>Generate</button>
    </div>
  )
}

export default Tag
