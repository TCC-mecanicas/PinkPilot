import CardsProd from "../Componentes/CardsProd/CardsProd";
import Pesq from "../Componentes/Pesq/Pesq";
import Carrinho from "../Componentes/Carrinho/Carrinho";

function Loja() {
    return ( 
        <>
        <div className="flex justify-between items-center w-full px-4">
  <div className="flex-1">
    <Pesq />
  </div>
    <Carrinho />
  
</div>
        <CardsProd/>
        </>
     )
}

export default Loja ;