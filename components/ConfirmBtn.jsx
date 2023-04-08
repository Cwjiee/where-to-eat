export default function Confirm({onConfirm}) {
  return(
    <button
    className="text-center mx-auto block bg-sky-300 shadow-sky-200 text-white rounded-lg h-10 w-24 my-5 shadow-md hover:bg-sky-400 hover:shadow-sky-300 active:border-y-sky-500"
    onClick={onConfirm}
    >
      confirm
    </button>
  )
}