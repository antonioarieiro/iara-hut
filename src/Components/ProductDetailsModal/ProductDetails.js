import React, { useState } from 'react';
import { IaraHutContext } from '../../Context/IaraHutContext';
import { BsFillStarFill } from "react-icons/bs";
import { RiMotorbikeLine } from "react-icons/ri";
import { GrSubtractCircle } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
export default function ProductDetails() {
  const { showItemDetails, selectedItemDetail, itemDetailsControl, cartControl } = React.useContext(IaraHutContext);
  const [number, setNumber] = useState(0);
  return (
    <>
      {
        showItemDetails && selectedItemDetail &&
        <div className={
          showItemDetails
            ? 'absolute w-full z-50 text-black top-40 flex flex-col h-full'
            : 'hidden'
        }>
          <div className=" w-full md:flex shadow-inner border h-4/5 w-10/12 mx-auto bg-white">
            <button
              className="bg-red-500 w-8 h-10 items-center justify-center flex text-white font-bold absolute"
              onClick={() => itemDetailsControl('hidden')}
            >
              x
            </button>
            <div className="w-3/6 flex  justify-center">
              <img src={selectedItemDetail.img} alt="img" />
            </div>
            <div className="w-3/6 flex  justify-center">

              <div className="flex flex-col mt-2 w-full items-center">
                <p className="font-bold text-center text-2xl">
                  {selectedItemDetail.isPizza && 'Pizza: '}
                  {selectedItemDetail.isHamburguer && 'Hamburger: '}
                  {selectedItemDetail.type}
                </p>
                <p className="flex flex-wrap mt-4">
                  {selectedItemDetail.ingredients}
                </p>
                <p className="font-bold mt-4">R$ {selectedItemDetail.price}</p>
                <div className="border w-full mt-4 flex-col p-4 w-10/12 justify-center items-center mx-auto">
                  <div className="flex items-center justify-between">
                    <p> Iara Hut</p>
                    <p className="flex items-center"><BsFillStarFill color="yellow" /> 4,5</p>
                  </div>
                  <hr className="mt-4  mb-2" />
                  <div className="flex items-center">
                    <p className="font-bold">28-37 min</p>
                    <p className="flex items-center ml-4 font-bold"><RiMotorbikeLine /> R$ 5,99</p>
                  </div>
                </div>
                <div className=" w-11/12 mt-8 flex items-center flex-col overflow-y-scroll scrollbar max-h-48">
                  <p className="font-bold text-lg text-center justify-center flex my-auto bg-gray-300 min-h-20 border w-11/12"
                  >
                    Escolha o tipo de Massa
                  </p>
                  <div className="w-11/12 mt-2">
                    {
                      selectedItemDetail.massa &&
                      selectedItemDetail.massa.map((val, index) => (
                        <div
                          key={index + 1}
                          className="w-full flex justify-between"
                        >
                          <span className="font-semibold">Massa- {val}</span>
                          <input type="checkbox" />
                        </div>
                      ))
                    }
                  </div>
                  <p className="font-bold text-lg mt-4 text-center justify-center flex my-auto bg-gray-300 min-h-20 border w-11/12"
                  >
                    Adicionais
                  </p>
                  <div className="w-11/12 mt-2">
                    {
                      selectedItemDetail.add &&
                      selectedItemDetail.add.map((val, index) => (
                        <div
                          key={index + 1}
                          className="w-full flex justify-between"
                        >
                          <span className="font-semibold">Adicional - {val}</span>
                          <input
                            type="checkbox" />
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="w-full justify-end items-end flex p-2 mt-8">
                  <div className="border w-20 h-8 mr-4 flex items-center justify-between">
                 
                    <button
                    className={
                      number >=1
                      ? ''
                      : 'opacity-0'
                    }
                    onClick={() => { number >= 1 ? setNumber(number - 1) : '' }}
                  >
                    <GrSubtractCircle/>
                  </button>
              
                   <span className="font-black">
                   {number}
                   </span>
                    <button
                      onClick={() => { setNumber(number + 1) }}
                    >
                      <GrAddCircle />
                    </button>
                  </div>
                  <button
                  className="points-btn rounded-lg font-bold mr-2"
                  onClick={() => {cartControl('add', selectedItemDetail.id)}}
                  >Adicionar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      }
    </>
  );
}

