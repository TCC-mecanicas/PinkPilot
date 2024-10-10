import CardsProd from "../Componentes/CardsProd/CardsProd";
import Pesq from "../Componentes/Pesq/Pesq";
import { HeartIcon } from '@heroicons/react/solid';

function Loja() {
    return ( 
        <>
        <div>
            <Pesq/>
            <HeartIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
        </div>
        <CardsProd/>
        </>
     )
}

export default Loja ;