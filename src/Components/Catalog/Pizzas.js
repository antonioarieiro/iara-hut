import React from 'react';
import PizzasData from '../../Data/IngredientsData';
import PromotionButton from './PromotionBtn';
import AddButton from './AddItemButton';
export default function Pizzas(props) {
  const { itemDetailsControl } = props
  return (
    <>
      <div className="md:w-11/12 flex-wrap flex ml-4 mr-4 p-2 justify-between">
        {
          PizzasData.map((val, index) => (
            val.isPizza &&
            <div
              key={index + 1}
              className="flex items-center justify-between w-96 mb-8 border p-2"
            >
              <img
               onClick={() =>itemDetailsControl('show', val)}
              src={val.img}
              alt=""
              className="w-20"
              />
              <div
                className="flex flex-col truncate ml-4"
              >
                <h1 
                className="font-bold cursor-default"
                onClick={() =>itemDetailsControl('show', val)}
                >
                  {val.type}
                </h1>
                <p 
                 onClick={() =>itemDetailsControl('show', val)}
                className="truncate cursor-default"
                >
                  {val.ingredients}
                </p>
                <p className="font-bold">
                  R$: {val.price}
                </p>
                <div className="w-full flex justify-end items-end">
                  <AddButton id={val.id} />
                </div>
              </div>
              {
                val.promotion && !val.dayPizza &&
                <div>
                  <PromotionButton promotion={val.promotion} />
                </div>
              }
              {
                val.dayPizza &&
                <div>
                  <PromotionButton promotion={val.dayPizza} />
                </div>
              }
            </div>
          ))
        }
      </div>
    </>
  );
}
