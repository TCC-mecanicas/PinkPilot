import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex gap-3 ' >
                <li className='hover:bg-margentinha'><Link to ="/">Mecânicas</Link></li>
                <li><Link to ="loja"> Loja</Link></li>
                <li><Link to ="sobre">Sobre</Link></li>
                <li><Link to ="comunidade">Comunidade</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;