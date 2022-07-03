import React from 'react';
import PizzasData from '../../Data/IngredientsData';
import PromotionButton from './PromotionBtn';
import { GrAddCircle } from "react-icons/gr";
export default function Promotions() {
  return (
    <>
      <div className="md:w-11/12 flex-wrap flex ml-4 mr-4 p-2 justify-between">
        {
          PizzasData.map((val, index) => (

            val.promotion || val.dayPizza ?
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
                    <button className="btn-add">
                      <GrAddCircle />
                    </button>
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
            : ''
          ))
        }
      </div>
    </>
  );
}
