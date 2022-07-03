import React from 'react';
import MenuOptions from '../Data/MenuOptions';
import { IaraHutContext } from '../Context/IaraHutContext';

export default function Menu() {
  const {  selectedOption, setSelectedOption } = React.useContext(IaraHutContext);

  return (
    <>
      <div className="main-option w-3/6">
        <div className="w-full flex items-center justify-between">
          {
            MenuOptions.map((val, index) => (
              <button 
              key={index}
              onClick={() => {setSelectedOption(val)}}
              className={
                selectedOption === val
                ? 'btn-option-selected'
                : 'btn-option-defaul'
              }
              >
                {val}
              </button>
            ))
          }
        </div>
      </div>
    </>
  )
}
