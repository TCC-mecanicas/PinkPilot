import CardsProd from "../Componentes/CardsProd/CardsProd";
import Pesq from "../Componentes/Pesq/Pesq";
import Favoritos from "../Componentes/Favoritos/Favoritos"
import Carrinho from "../Componentes/Carrinho/Carrinho";

function Loja() {
    return ( 
        <>
        <Pesq />
          <div className="flex ml-auto justify-end absolute top-36 right-4">    
                <Favoritos />
                <Carrinho />
          </div>
        <CardsProd />
        </>
     )
}

export default Loja ;