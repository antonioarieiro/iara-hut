import React, { useEffect } from 'react';
import { IaraHutContext } from '../../Context/IaraHutContext';
import OrderDetails from './OrderDetails';
import PaymentDetails from './PaymentDetails';

export default function Cart() {
  const { showCart, setShowCart, setItems, setQnt, items } = React.useContext(IaraHutContext);
  
  useEffect(() => {
    var aValue = JSON.parse(localStorage.getItem('session'));
    setItems(aValue)
  }, []);

  const clearCart = () => {
    localStorage.setItem('session', JSON.stringify([]))
    setItems([])
    setShowCart(false);
    setQnt(0);
  }
  return (
    <>
      <div className={
        showCart
          ? 'absolute w-full z-50 text-black top-32 flex flex-col overflow-hidden overflow-hidden '
          : 'hidden'
      }>
        <div className="border-t-2 w-full md:flex  justify-center overflow-hidden bg-white">
          <div
            className="w-full flex justify-end absolute mr-20"
          >
            <button
              className="bg-red-500 p-4 text-white font-bold mt-2"
              onClick={() => setShowCart(false)}
            >
              Sair do Carrinho
            </button>
          </div>
        <PaymentDetails />
          <OrderDetails />
        </div>
        <button 
        className="points-btn  w-28 flex mx-auto mt-2 font-bold rounded-lg mb-8"
        onClick={() => {clearCart()}}
        >
           { items.length > 0 ? 'Finalizar Pedido' : 'Carrinho vazio'}
        </button>
      </div>
    </>
  );
}
