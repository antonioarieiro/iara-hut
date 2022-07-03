import React from 'react';
import CartButton from './CartButton';
import Logo from '../Assets/iara.gif';
import './style.scss';

export default function Header() {
  return (
    <>
      <header>
        <div className="max-w-[1920px] flex justify-center">
          <div className="flex justify-between items-center w-full mr-8 ml  -8">
            <img src={Logo} className='w-40' alt='logo' />
            <CartButton />
          </div>
        </div>
      </header>
    </>
  )
}