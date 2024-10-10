import CardsProd from "../Componentes/CardsProd/CardsProd";
import Pesq from "../Componentes/Pesq/Pesq";
import { Link } from "react-router-dom";
//import PageCarrinho from "./PageCarrinho";

function Loja() {
    return ( 
        <>
        <Pesq/>
        <Link to="/carrinho">carrinho</Link>
        <CardsProd/>
        </>
     )
}

export default Loja ;