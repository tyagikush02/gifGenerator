import Random from "./components/Random"
import Tag from "./components/Tag"

function App() {
  

  return (
    <div className="bg-[url(./background.jpg)] h-[max-content]">
      <h1 className=" bg-white text-center text-4xl font-bold underline py-2 w-[50%] mx-auto mb-[2rem] relative top-4">RANDOM GIFS</h1>
      <div className="flex flex-col gap-24">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
