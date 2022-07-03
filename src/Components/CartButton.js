import React from 'react';
import { IaraHutContext } from '../Context/IaraHutContext';
import { AiOutlineShoppingCart } from "react-icons/ai";
import './style.scss';

export default function CartButton() {
  const { setShowCart, qnt } = React.useContext(IaraHutContext);
  return (
    <>
      <button
        onClick={() => { setShowCart(true) }}
        className="points-btn rounded-lg flex items-center"
      >
        <AiOutlineShoppingCart />
        Selecionados:
        <span className="text-white ml-2">
          {qnt}
        </span>
      </button>

    </>
  )
}