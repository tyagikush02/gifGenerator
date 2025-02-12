import useGif from '../hooks/useGif';
import Spinner from './Spinner';


function Random() {
    const {gif,loading,fetchData}=useGif();
    
    function clickHandle(){
      fetchData();
    }
    return (
    <div className='flex flex-col justify-between w-[fit-content] min-w-[600px] min-h-[500px] h-[max-content] mx-auto text-center bg-green-400 gap-4'>
        <h1 className="text-3xl">RANDOM GIFS</h1>
        {
          loading ? <Spinner/> : <img src={gif} className='mx-auto' width="450"/>
        }
        <button className="bg-white w-[50%] mx-auto rounded-md mb-[1rem] font-bold opacity-80 hover:opacity-100" onClick={clickHandle}>Generate</button>
    </div>
  )
}

export default Random
