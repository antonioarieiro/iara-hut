import React from 'react';
import PizzasData from '../../Data/IngredientsData';
import PromotionButton from './PromotionBtn';
import AddButton from './AddItemButton';

export default function Hamburguers() {
  return (
    <>
      <div className="md:w-11/12 flex-wrap flex ml-4 mr-4 p-2 justify-between">
        {
          PizzasData.map((val, index) => (
           !val.isPizza &&
           <div
           key={index}
           className="flex items-center justify-between w-96 mb-8 border p-2"
         >
           <img src={val.img} alt="" className="w-20" />
           <div
             className="flex flex-col truncate ml-4"
           >
             <h1>
               {val.type}
             </h1>
             <p className="truncate">
               {val.ingredients}
             </p>
             <div className="w-full flex justify-end items-end">
             <AddButton id={val.id} />
             </div>
           </div>
           {
             val.promotion &&
             <div>
               <PromotionButton promotion={val.promotion}/>
             </div>
           }
           {
             val.dayHamburguer &&
             <div>
               <PromotionButton promotion={val.dayHamburguer}/>
             </div>
           }
         </div>
          ))
        }
      </div>
    </>
  );
}