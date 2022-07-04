import React, { useState } from 'react';
const options = ['Entrega', 'Retirada'];
const paymentMethod = ['Pix', 'Cartão']
export default function PaymentDetails() {
  const [optionSelected, setOptionSelected] = useState('Entrega');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Pix');
  return (
    <>
      <div className="header-cart flex flex-col mr-16 w-2/6 ">
        <h1 className="font-bold text-2xl mb-8">Finalize seu pedido</h1>
        <div className="process flex items-center">
          {
            options.map((val, index) => (
              <span
                key={index}
                className={
                  val === optionSelected
                    ? "mr-12 font-bold cursor-pointer border-b-2 border-yellow-500"
                    : "mr-12 cursor-pointer"
                }
                onClick={() => setOptionSelected(val)}
              >
                {val}
              </span>
            ))
          }
        </div>
        <div className="flex items-center justify-between">
          <img
            className="w-16 mt-4"
            alt=""
            src="https://img.freepik.com/vetores-gratis/vista-superior-3d-de-um-mapa-com-ponto-de-localizacao-de-destino-vista-aerea-limpa-superior-do-mapa-da-cidade-durante-o-dia-com-rua-e-rio-mapa-urbano-em-branco-conceito-de-navegador-de-mapa-gps_34645-1098.jpg" />
          <div className="flex flex-col ml-4">
            <p>Q. 107 Norte Avenida Ns5, s/n</p>
            <p>Palmas/TO</p>
          </div>
          <button
            className="points-btn rounded-lg font-bold cursor-not-allowed"
          >
            Trocar
          </button>
        </div>
        <div className="mt-4">
          <h4 className="font-bold text-xl">
            {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}, {new Date().getHours()}: {new Date().getMinutes()}
          </h4>
          <div className="flex flex-col w-5/6 border mt-4 border-yellow-200 rounded-lg">
            <div className="ml-8">
              <p className="text-sm mb-2">Padrão</p>
              <p className="mb-2"> Valor da Corrida:</p>
              <p className="font-bold">R$ 5,99</p>
            </div>
          </div>
        </div>
        <div className="border-t-2 mt-8 flex flex-col">
         <div className="mt-4 flex">
         {
            paymentMethod.map((val, index) => (
              <span
                className={
                  val === selectedPaymentMethod
                    ? 'font-bold text-lg mr-8 cursor-pointer border-b-2 border-yellow-500'
                    : 'text-lg mr-8 cursor-pointer'
                }
                onClick={() => { setSelectedPaymentMethod(val) }}
                key={index}
              >
                {val}
              </span>
            ))
          }
         </div>
         <div className="w-10/12 border rounded-lg border-yellow-500 mt-4 flex flex-col p-4">
          Metodo selecionado:
          {
            selectedPaymentMethod === 'Pix'
            ?
            <div className="flex items-center ">
              <img 
              className="w-10 p-2 "
              src="https://static-images.ifood.com.br/image/upload/t_thumbnail/icones/payments/brands/3dc38545-6c1b-43a0-a2d0-dd2e1ac3bc73" alt='pix'/>
            <p className="font-bold">Pague com {selectedPaymentMethod}</p>
            </div>
            :
            <div className="flex items-center ">
            <img 
            className="w-20 p-2 "
            src="https://i.pinimg.com/originals/51/ba/5c/51ba5cf6a6cf2477e29601662b584818.png" alt='cartao'/>
          <p className="font-bold">Pague com {selectedPaymentMethod}</p>
          </div>
          }
         </div>
        </div>
      </div>
    </>
  )
}
