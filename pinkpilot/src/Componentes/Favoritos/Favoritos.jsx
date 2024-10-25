import { useState } from "react";
import { IoHeart, IoTrash } from "react-icons/io5";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Favoritos = ({ favoritosItems, removeFromFavoritos}) => {
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
      <div className="flex items-center justify-center py-2">
        <button onClick={checkoutHandler} className="text-margentinha mr-4">
          <IoHeart size={32} />
        </button>
      </div>

      <div
        className={`fixed inset-0 transition-opacity duration-300 ${
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
          <div className="w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 lg:h-screen h-auto" id="scroll">
            <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
              <button onClick={checkoutHandler} className="text-margentinha p-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <p className="pl-2">Voltar</p>
              </button>
            </div>
            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Favoritos</p>
            <hr className="h-px mt-1 border-0 bg-black p-0 mb-6"></hr>

            {/* Card do Produto */}
            {favoritosItems.length > 0 ? (
              favoritosItems.map((item) =>(
            <div key={item.id} className="md:flex items-stretch p-3 bg-teste rounded-md shadow-md mb-6">
              
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <Link to={`/produto/${item.id}`}>
                  <img src={item.imageSrc} alt={item.imageAlt} className="w-[180px] h-[180px] object-center object-cover md:block hidden" />
                </Link>
              </div>
              
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">{item.name}</p>
                  
                </div>
                <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">Descrição: {item.description}</p>
                <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Avaliações: {item.rating}</p>
                <div className="flex items-center justify-between pt-5">
                <div className="flex items-center">
                    <IconButton
                      onClick={() => removeFromFavoritos(item.id)}
                      className="text-gray-600 bg-teste ml-3"
                    >
                      <IoTrash size={24} />
                    </IconButton>
                  </div>
                  <p className="text-base font-black leading-none text-gray-800 dark:text-white">{item.price}</p>
                </div>
              </div>
            </div>
              ))
            ) : (
              <p className="text-center text-gray-600 dark:text-white mt-5">Adicione produtos aos seus favoritos! </p>
            )}
          </div>
          </div>
        </div>
    </>
  );
};

Favoritos.propTypes = {
  favoritosItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      imageAlt: PropTypes.string,
      size: PropTypes.string,
      color: PropTypes.string,
      material: PropTypes.string,
    })
  ).isRequired,
  removeFromFavoritos: PropTypes.func.isRequired,
};

export default Favoritos;