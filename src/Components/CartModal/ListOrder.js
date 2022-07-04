import React from 'react';

export default function ListOrder(props) {
  const { items, cartControl, showCart } = props;

  return (
    <>
      {
        showCart && items[0][0] &&
        items.map((val, index) => (
          <>
            <div className="flex flex-col justify-center w-full " key={index}>
              <p>{val[0].isPizza ? 'Pizza' : 'Hamburger'}</p>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold">{val[0].type}</p>
                <p className="font-bold">R$: {val[0].price},00</p>
              </div>
              <p className="truncate cursor-default" title={val[0].ingredients}>
                {val[0].ingredients}
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold">
                  {val[0].promotion ? `Desconto no valor de ${val[0].promotion} ` : 'Desconto no valor de: 0'}
                </p>
                <p className="font-bold">R$: {val[0].promotion ? val[0].promotion && parseInt(val[0].promotion) / 100 * val[0].price : '0'},00</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-bold">
                 Total:
                </p>
                <p className="font-bold">R$: {val[0].promotion ? val[0].price - parseInt(val[0].promotion) / 100 * val[0].price : val[0].price.toFixed},00</p>
              </div>
            </div>
            <button button
              onClick={() => { cartControl('remove', val[0].id) }}
              className="font-bold text-red-700 mt-2 hover:bg-red-400 hover:p-2 mb-2"
            >
              Remover
            </button>
          </>
        ))
      }
    </>
  );
}
