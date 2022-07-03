import React from 'react';
import Pizzas from './Pizzas';
import Hamburguers from './Hamburguers';
import Promotions from './Promotions';
import { IaraHutContext } from '../../Context/IaraHutContext';

export default function PizzaCard() {
  const { selectedOption, itemDetailsControl } = React.useContext(IaraHutContext);
  return (
    <>
      <div className="w-full mt-8">
        <div className="w-full flex flex-col flex-wrap items-center justify-center">
          {
            selectedOption === 'Pizzas' &&
            <Pizzas itemDetailsControl={itemDetailsControl}/>
          }
          {
            selectedOption === 'Hamburguers' &&
            <Hamburguers itemDetailsControl={itemDetailsControl}/>
          }
          {
            selectedOption === 'Promoção' &&
            <Promotions itemDetailsControl={itemDetailsControl}/>
          }
        </div>
      </div>
    </>
  )
}