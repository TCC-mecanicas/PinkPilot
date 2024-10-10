import { useRef, useState } from "react";

const PageCarrinho = () => {
  const checkoutRef = useRef(null);
  const checdivRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkoutHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <style>
        {`
          #scroll::-webkit-scrollbar {
            width: 1px;
          }
          #scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          #scroll::-webkit-scrollbar-thumb {
            background: rgb(133, 132, 132);
          }
        `}
      </style>

      <div className="flex items-center justify-center py-8">
        <button
          onClick={checkoutHandler}
          className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Open Modal
        </button>
      </div>

      {isVisible && (
        <div
          ref={checdivRef}
          className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed"
        >
          <div
            ref={checkoutRef}
            className="w-full absolute z-10 right-0 h-full transform transition ease-in-out duration-700"
            style={{ transform: isVisible ? "translateX(0)" : "translateX(100%)" }}
          >
            <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden"
                id="scroll"
              >
                <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Bag</p>
                {/* Exemplo de item */}
                <div className="flex items-center py-4 border-b border-gray-200">
                  <img
                    src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
                    alt="Item"
                    className="h-24 object-center object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-bold">Item Name</p>
                    <p className="text-sm">Details about the item.</p>
                  </div>
                </div>
                {/* Adicione mais itens conforme necessário */}
              </div>
              <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
                <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                  <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">,000</p>
                  </div>
                  <button
                    onClick={checkoutHandler}
                    className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PageCarrinho;
