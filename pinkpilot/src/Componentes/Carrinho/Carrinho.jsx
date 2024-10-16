import { useState } from "react";

import { FaShoppingCart } from 'react-icons/fa';

const Carrinho = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const checkoutHandler = () => {
    if (isCheckoutOpen) {
 
      setIsAnimatingOut(true);
 
      setTimeout(() => {
        setIsCheckoutOpen(false);
        setIsAnimatingOut(false); 
      }, 100);
    } else {
      setIsCheckoutOpen(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-8">
      <button
      onClick={checkoutHandler}
      className="border-2 text-margentinha mr-3"
    >
      <FaShoppingCart size={25} />
    </button>
      </div>

      <div
        className={`fixed inset-0 transition-opacity  duration-300 ${
          isCheckoutOpen || isAnimatingOut ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } bg-black bg-opacity-50 z-40`} 
      />

      <div
        className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-900 transform transition-transform duration-300 ${
          isCheckoutOpen ? 'translate-x-0 z-50' : 'translate-x-full z-50' 
        }`}
        id="checkout"
      >
        <div className="flex items-end lg:flex-row flex-col justify-end h-full" id="cart">
          <div className="lg:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 lg:h-screen h-auto" id="scroll">
            <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
              <button onClick={checkoutHandler} className="text-margentinha p-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <p className="pl-2">Voltar</p>
              </button>
            </div>
            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Carrinho</p>

            <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-500">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">Kit mochila para motociclista</p>
                  <select
                    aria-label="Select quantity"
                    className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">Tamanho: 60 centímetros</p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Cor: Preto</p>
                <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Material: 100% couro</p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Favoritar</p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remover</p>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">R$ 140,00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-96 md:w-8/12 w-full bg-margentinha dark:bg-gray-900 h-full">
            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
              <div>
                <p className="lg:text-4xl text-3xl font-black leading-9 text-white dark:text-white">Subtotal</p>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-white dark:text-white">Produtos</p>
                  <p className="text-base leading-none text-white dark:text-white">R$ 140,00</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-white dark:text-white">Envio</p>
                  <p className="text-base leading-none text-white dark:text-white">R$ 10,00</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-white dark:text-white">Taxas</p>
                  <p className="text-base leading-none text-white dark:text-white">R$ 00,00</p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-white dark:text-white">Total</p>
                  <p className="text-2xl font-bold leading-normal text-right text-white dark:text-white">R$ 150</p>
                </div>
                <button
                  onClick={() => alert('Estamos trabalhando nisso!')}
                  className="text-base leading-none w-full py-5 bg-white rounded-md text-margentinha text-xl font-bold dark:hover:bg-gray-700"
                >
                  Ir para pagamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
