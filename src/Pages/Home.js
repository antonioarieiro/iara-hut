import React from 'react';
import Components from '../Components/index';
import { IaraHutContext } from '../Context/IaraHutContext';

export default function Home() {
  const { showCart, showItemDetails } = React.useContext(IaraHutContext);
  return (
    <>
      <div
      className={
        showCart || showItemDetails
        ? 'flex justify-center items-center flex-col bluring overflow-hidden'
        : 'flex justify-center items-center flex-col overflow-hidden'
      }
      >
        <Components.MenuOptions />
        <Components.Catalog />
      </div>
    </>
  );
}
