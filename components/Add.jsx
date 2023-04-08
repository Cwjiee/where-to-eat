export default function Add({onAdd}) {
  return(
    <div className="w-1/5">
      <button 
        onClick={onAdd}
        className="block bg-sky-300 shadow-sky-200 text-white mx-auto rounded-lg h-8 w-20 sm:w-12 my-5 shadow-md hover:bg-sky-400 hover:shadow-sky-300 active:border-y-sky-500"
        >
        add
      </button>
    </div>
    
  )
}