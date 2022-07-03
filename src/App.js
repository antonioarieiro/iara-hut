import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IaraHutProvider } from './Context/IaraHutProvider';
import Pages from './Pages';
import Component from './Components/index';

export default function App() {
  return (
    <>
      <IaraHutProvider>
        <Component.Cart />
        <Component.Details />
        <Component.Header />
        <div className="default-home overflow-hidden">
          <Routes>
            <Route path='/' element={<Pages.Home />} />
          </Routes>
        </div>
      </IaraHutProvider>
    </>
  );
}
