import React, { useState } from 'react';
import axios from 'axios';
import Data from '../Data/IngredientsData';
import { IaraHutContext } from './IaraHutContext';

export const IaraHutProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('Pizzas');
  const [showCart, setShowCart] = useState(false);
  const [showItemDetails, setShowItemsDetails] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [selectedItemDetail, setSelectedItemDetail] = useState([]);
  const [items, setItems] = useState([]);
  const [qnt, setQnt] = useState(0);

  const api = axios.create({
    baseURL: "https://www.thecocktaildb.com/",
  });

  const fetchDrinks = async () => {
    await api.get("api/json/v1/1/search.php?f=a")
      .then((response) => setDrinks(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const addCart = (id) => {
    const added = Data.filter(val => val.id === id);
    setItems(added);
    localStorage.setItem('session', JSON.stringify(added))
  }
  const removeCart = (id) => {
    const added = items.filter(val => val.id != id);
    setItems(added);
    localStorage.setItem('session', JSON.stringify(added))
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
    if(type === 'show'){
      setShowItemsDetails(true);
      setSelectedItemDetail(item)
    }
    if(type === 'hidden'){
      setShowItemsDetails(false);
    }
  }

  return (
    <IaraHutContext.Provider
      value={{
        selectedOption,
        drinks,
        items,
        showCart,
        qnt,
        showItemDetails,
        selectedItemDetail,
        setShowCart,
        setSelectedOption,
        fetchDrinks,
        cartControl,
        setItems,
        setQnt,
        itemDetailsControl
      }}>
      {children}
    </IaraHutContext.Provider>
  )
}
