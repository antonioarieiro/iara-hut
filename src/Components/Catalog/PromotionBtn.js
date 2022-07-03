import React from 'react';

export default function PromotionButton(props) {
  const { promotion } = props;
  return (
    <>
      <button
        className={
          promotion === 'Pizza do dia' ||  promotion === 'Top Burguer'
          ? "sm:-ml-8 sm:-mt-16 flex md:-mt-16 md:-ml-10 absolute justify-end items-end btn-dayPizza text-white flex-wrap max-w-[50px] text-[10px]"
          : "sm:-ml-8 sm:-mt-16 flex md:-mt-14 md:-ml-4 absolute justify-end items-end btn-promotion text-white flex-wrap max-w-[50px]"
        }>
        {promotion}
      </button>
    </>
  )
}