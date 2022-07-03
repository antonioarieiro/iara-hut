import React, { useState } from 'react';
import Data from '../Data/IngredientsData';
import { IaraHutContext } from './IaraHutContext';

let acc = []

export const IaraHutProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('Pizzas');
  const [showCart, setShowCart] = useState(false);
  const [showItemDetails, setShowItemsDetails] = useState(false);
  const [selectedItemDetail, setSelectedItemDetail] = useState([]);
  const [items, setItems] = useState([]);
  const [qnt, setQnt] = useState(0);
  const [price, setPrice] = useState(0);
  const [descount, setDescount] = useState(0)

  const addCart = (id) => {
    const added = Data.filter(val => val.id === id);
    acc.push(added);
    setItems(acc);
    localStorage.setItem('session', JSON.stringify(acc));
  }

  const removeCart = (id) => {
    const added = items.filter(val => val[0].id !== id);
    setItems(added);
    localStorage.setItem('session', JSON.stringify(added));
  }
  const cartControl = (type, id) => {
    if (type === "add") {
      const currentValue = qnt + 1;
      setQnt(currentValue);
      addCart(id);
      setShowItemsDetails(false);
    }
    if (type === 'remove') {
      const currentValue = qnt - 1;
      setQnt(currentValue);
      removeCart(id)
    }
  }

  const itemDetailsControl = (type, item) => {
    if (type === 'show') {
      setShowItemsDetails(true);
      setSelectedItemDetail(item)
    }
    if (type === 'hidden') {
      setShowItemsDetails(false);
    }
  }

  const clearCart = () => {
    acc = []
    localStorage.setItem('session', JSON.stringify([]))
    setItems([])
    setShowCart(false);
    setQnt(0);
    setPrice(0)
  }

  const currentPrice = () => {
    if(JSON.parse(localStorage.getItem('session'))) {
      let sum = 0;
      var descounted = 0;
      var aValue = JSON.parse(localStorage.getItem('session'));
      let prices = aValue.map((val) =>
        val[0].promotion ? sum += val[0].price - parseInt(val[0].promotion) / 100 * val[0].price : sum = sum + val[0].price
      );
      let total = aValue.map((val) => descounted += val[0].price);
      const end = total[total.length - 1];
      const last = prices[prices.length - 1]
      setPrice(last)
      setDescount(end)
    }
   
  }

  return (
    <IaraHutContext.Provider
      value={{
        selectedOption,
        items,
        showCart,
        qnt,
        price,
        showItemDetails,
        selectedItemDetail,
        descount,
        setShowCart,
        setSelectedOption,
        cartControl,
        setItems,
        setQnt,
        itemDetailsControl,
        clearCart,
        currentPrice
      }}>
      {children}
    </IaraHutContext.Provider>
  )
}
