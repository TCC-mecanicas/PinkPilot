  import CardsProd from "../Componentes/CardsProd/CardsProd";
  import Pesq from "../Componentes/Pesq/Pesq";
  import Favoritos from "../Componentes/Favoritos/Favoritos";
  import Carrinho from "../Componentes/Carrinho/Carrinho";
  import { useState } from "react";

  function Loja() {
    const [cartItems, setCartItems] = useState([]);

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
          <Favoritos />
          <Carrinho 
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        </div>
        <CardsProd addToCart={addToCart} />
      </>
    );
  }

  export default Loja;
