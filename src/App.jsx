import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Input from '../components/Input'
import Add from '../components/Add';
import Confirm from '../components/ConfirmBtn';
import Spin from '../components/Spin';
import Item from '../components/Item';

let nextId = 0;
const data = [
  {option: '1'},
  {option: '2'}
]

export default () => {
  const [item, setItem] = useState('');
  // const [data, setData] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  function handleInput(){
    if (item){
      setData([...data, { id: nextId++, option: item} ]);
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

  // if (confirm){
    return (
      <>
        <div className="w-2/4 h-3/4 mx-auto text-center rounded-lg p-10 sm:p-0 sm:w-auto sm:h-screen">
          <div className='w-full ml-32 sm:ml-0 sm:w-auto'>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              innerBorderWidth={3}
              outerBorderWidth={15}
              outerBorderColor='rgba(23,49,71,255)'
              backgroundColors={['#ffdd54','#ff8327']}  
              fontSize={20}

              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </div>
          
          <Spin onSpin={handleSpinClick}/>
        </div>
      </>
    )
  // }

  return (
    <>
        <div className="w-2/5 sm:w-4/5 h-1/4 mt-56 m-auto text-center rounded-2xl shadow-lg px-10 pt-10 pb-2 sm:px-3 bg-white">
          <label htmlFor="input" className="block font-medium leading-6 text-gray-900 text-xl">
            Items
          </label>
          <div className="relative p-0 rounded-md flex w-full">
            <Input value={item} onAdd={e => setItem(e.target.value)}/>
            <Add onAdd={() => handleInput() }/>
          </div>
          <div>
            { data && data.length ? (
              <Item data={data} />
            ) : (
              <p>add pls</p>
            )}
          </div>
          <Confirm onConfirm={() => setConfirm(true)}/>
          <div className='text-sm mt-10 border-t-2 border-solid'>Made by Wei Jie</div>
        </div>
    </>
  );
}