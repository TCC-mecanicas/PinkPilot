import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

function PinkIcon() {
    const location = useLocation();

    if (location.pathname === "/pinkchat") return null;
    if (location.pathname === "/login") return null;
    if (location.pathname === "/cadastro") return null;

    return(
        <>
            <div className="fixed bottom-6 right-6 p-2 bg-white rounded-full border-2 border-margentinha">
                <Link to="/pinkchat">
                    <img src="/Pinkie.svg" alt="Pinkie" className='h-16 w-16' />
                </Link>
            </div>       
        </>
    )
}
export default PinkIcon;