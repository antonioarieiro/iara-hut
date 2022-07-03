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
                <p className="font-bold">R$: {val[0].price}</p>
              </div>
              <p className="truncate">
                {val[0].ingredients}
              </p>
              <p className="font-bold">
                {val[0].promotion ? `Desconto no valor de ${val[0].promotion} ` : ''}
              </p>
            </div>
            <button button
              onClick={() => { cartControl('remove', val[0].id) }}
              className="font-bold text-red-500 mt-2"
            >
              Remover
            </button>
          </>
        ))
      }
    </>
  );
}
