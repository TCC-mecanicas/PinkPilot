import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3 hover:bg-margentinha' >
                <li><Link to ="/">Mecânicas</Link></li>
                <li><Link to ="loja"> Loja</Link></li>
                <li><Link to ="sobre">Sobre</Link></li>
                <li><Link to ="comunidade">Comunidade</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;