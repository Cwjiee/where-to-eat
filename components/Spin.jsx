export default function Spin({onSpin}) {
  return(
    <div className=" ml-[18rem] w-full">
      <button 
      onClick={onSpin}
      className="block bg-sky-300 shadow-sky-200 text-white mx-5 rounded-lg h-10 w-24 my-5 shadow-md hover:bg-sky-400 hover:shadow-sky-300 active:border-y-sky-500"
      >
        spin
      </button> 
    </div>
    
  )
}