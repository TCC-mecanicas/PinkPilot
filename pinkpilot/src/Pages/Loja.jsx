import CardsProd from "../Componentes/CardsProd/CardsProd";
import Pesq from "../Componentes/Pesq/Pesq";
import Favoritos from "../Componentes/Favoritos/Favoritos";
import Carrinho from "../Componentes/Carrinho/Carrinho";
import { useState } from "react";

function Loja() {
  const [cartItems, setCartItems] = useState([]);
  const [favoritosItems, setFavoritosItems] = useState([]);

  // Função de adicionar ou remover dos favoritos
  const addToFavoritos = (product) => {
    setFavoritosItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) {
        // Se já estiver nos favoritos, remove
        return prevItems.filter((item) => item.id !== product.id);
      }
      // Se não estiver, adiciona
      return [...prevItems, product];
    });
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <>
      <Pesq />
      <div className="flex ml-auto justify-end absolute top-36 right-4">
        <Favoritos 
          favoritosItems={favoritosItems}
          removeFromFavoritos={(productId) => 
            setFavoritosItems((prevItems) =>
              prevItems.filter((item) => item.id !== productId)
            )
          }
        />
        <Carrinho 
          cartItems={cartItems}
          removeFromCart={removeFromCart}
        />
      </div>
      <CardsProd 
        addToCart={addToCart} 
        addToFavoritos={addToFavoritos} 
        favoritosItems={favoritosItems}
      />
    </>
  );
}

export default Loja;
