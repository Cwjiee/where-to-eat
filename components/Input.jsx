export default function Input({value, onAdd}) {
  return (
        <input
          type="text"
          name="input"
          id="input"
          className="block w-4/5 rounded-md shadow-md border-0 px-9 py-2 pl-7 my-5 sm:h-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-400 focus:outline-sky-300 sm:text-sm sm:leading-6"
          placeholder="input"
          autoComplete="off"
          value={value}
          onChange={onAdd}
        />
     
  )
}