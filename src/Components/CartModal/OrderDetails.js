import React, { useEffect } from 'react';
import { IaraHutContext } from '../../Context/IaraHutContext';
import ListOrder from './ListOrder';

export default function OrderDetails() {
  const { setShowCart, items, cartControl, showCart, price, currentPrice, removeCart, descount } = React.useContext(IaraHutContext);
  useEffect(() => {
    currentPrice()
  }, [price, items, cartControl, removeCart])
  return (
    <>
      {
        showCart && items &&
        <div className="border-2 flex flex-col w-4/12 shadow-2xl p-8 mt-8">
          <p className="text-sm mt-4">Seu pedido em</p>
          <div className="flex items-center justify-between mt-6">
            <h1 className="font-bold text-2xl">Iara hut</h1>
            <button
              className="mr-4 text-yellow-500 font-bold"
              onClick={() => setShowCart(false)}
            >
              Voltar ao Cardápio
            </button>
          </div>
          <div className="w-full border-t-2 border-b-2 border-yellow-500 flex justify-center flex-col mt-8 mx-auto mb-10 overflow-y-scroll max-h-96">
            <div className="w-11/12 flex flex-col items-center">
              {
                showCart && items.length > 0 &&
                <ListOrder items={items} cartControl={cartControl} showCart={showCart} price={price} />
              }
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p>Subtotal: </p>
              <span>R$ {items.length > 0 && descount},00</span>
            </div>

            <div className="flex justify-between items-center">
              <p className="font-bold">Desconto:  </p>
              <span className="font-bold">R$: {descount - price},00</span>
            </div>
            <div className="flex justify-between items-center">
              <p>Taxa de entrega: </p>
              <span>5,99</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Total: </p>
              <span>
                <span className="font-bold"> R$ {price + 5.99}</span>
              </span>
            </div>
          </div>
        </div>
      }
    </>
  );
}

//   <span>{items.length > 0 && items[0].price && items[0].price + 5.99}</span>