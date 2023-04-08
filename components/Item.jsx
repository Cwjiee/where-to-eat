export default function Item({data}){
  return (
    <div className='container border-2 border-solid border-sky-500 rounded'>
      {data.map(data => (
        <div key={data.id}>{data.option}</div>
      ))}   
    </div>
  )
}