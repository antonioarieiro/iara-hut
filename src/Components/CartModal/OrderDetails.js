import React from 'react';
import { IaraHutContext } from '../../Context/IaraHutContext';
export default function OrderDetails() {
  const { setShowCart, items, cartControl } = React.useContext(IaraHutContext);

  return (
    <>
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
        <div className="w-10/12 border-t-2 border-b-2 border-yellow-500 flex justify-center flex-col mt-8 mx-auto mb-20">
          {
            items.map((val, index) => (
              <>
                <div className="flex flex-col" key={index}>
                  <p>{val.isPizza ? 'Pizza' : 'Hamburger'}</p>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">{val.type}</p>
                    <p className="font-bold">R$: {val.price}</p>
                  </div>
                  <p className="truncate">
                    {val.ingredients}
                  </p>
                  <p className="font-bold">
                    {val.promotion ? `Desconto no valor de ${val.promotion} ` : ''}
                  </p>
                </div>
                <button button
                  onClick={() => { cartControl('remove', val.id) }}
                  className="font-bold text-red-500 mt-2"
                >
                  Remover
                </button>
              </>
            ))
          }

        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <p>Subtotal: </p>
            <span>R$ {items.length > 0 && items[0].price}</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Taxa de entrega: </p>
            <span>5,99</span>
          </div>
          {
            items.length > 0 && items[0].promotion &&
            <div className="flex justify-between items-center">
              <p className="font-bold">Desconto: {items[0].dayPizza ? 'Pizza do dia' : ''} </p>
              <span className="font-bold">{items[0].promotion}</span>
            </div>
          }
         
          <div className="flex justify-between items-center">
            <p className="font-bold">Total: </p>
            <span>
              {
                items.length > 0 &&
                items[0].promotion
                ?  <span className="font-bold"> R$ {items[0].price - (items[0].price / 100 ) * parseInt(items[0].promotion) + 5.99}</span>
                :  <span className="font-bold">R$ {  items.length > 0 && items[0].price + 5.99}</span>
              }
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

//   <span>{items.length > 0 && items[0].price && items[0].price + 5.99}</span>