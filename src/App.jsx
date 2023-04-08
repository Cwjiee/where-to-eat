import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Input from '../components/Input'
import Add from '../components/Add';
import Confirm from '../components/ConfirmBtn';
import Spin from '../components/Spin';

export default () => {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  function handleInput(){
    if (item){
      setData([...data, {option: item } ]);
      setItem('');
    }
  }

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  if (confirm){
    return (
      <>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}

          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <Spin onSpin={handleSpinClick}/>
      </>
    )
  }

  return (
    <>
        <div className=" w-1/4 m-5">
          <label htmlFor="input" className="block font-medium leading-6 text-gray-900 text-xl">
            Items
          </label>
          <div className="relative p-0 rounded-md flex w-full content-center">
            <Input value={item} onAdd={e => setItem(e.target.value)}/>
            <Add onAdd={() => handleInput() }/>
          </div>
          <div>
            {data.map(data => (
                <li>{data.option}</li>
            ))}
          </div>
          <Confirm onConfirm={() => setConfirm(true)}/>
        </div>
    </>
  )
}