import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Logo from "../../../public/logo.svg";
import UserMenu from '../UserMenu/UserMenu';

function Navbar() {
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const location = useLocation(); // To track the current route

  useEffect(() => {
    // Find the active NavLink element
    const activeLink = navRef.current?.querySelector('.active');
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorPosition({ left: offsetLeft, width: offsetWidth });
    }
  }, [location]); // Re-run when the route changes

  return (
    <nav className="font-sans text-black font-normal flex items-center justify-between px-4 w-full">
      
      <div className="absolute left-4 p-4">
        <Link to="/">
          <img
            size="w-10"
            alt="logo"
            src={Logo}
            className=""
          />
        </Link>
      </div>

      <div className="flex justify-center w-full relative" ref={navRef}>
        <ul className="flex justify-center gap-4 relative font-semibold">
          <li className="self-center">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "active hover:text-margentinha" : "hover:text-margentinha"}
            >
              Mecânicas
            </NavLink>
          </li>
          <li className="self-center">
            <NavLink
              to="/comunidade"
              className={({ isActive }) => isActive ? "  active hover:text-margentinha" : "hover:text-margentinha"}
            >
              Comunidade
            </NavLink>
          </li>
          <li className="self-center">
            <NavLink
              to="/loja"
              className={({ isActive }) => isActive ? "active hover:text-margentinha" : "hover:text-margentinha"}
            >
              Loja
            </NavLink>
          </li>
          <li className="self-center">
            <NavLink
              to="/sobre"
              className={({ isActive }) => isActive ? "active hover:text-margentinha" : "hover:text-margentinha"}
            >
              Sobre Nós
            </NavLink>
          </li>

    
          <motion.div
            className="absolute bottom-0 h-1 bg-margentinha"
            animate={{
              left: indicatorPosition.left,
              width: indicatorPosition.width,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </ul>
      </div>

      <UserMenu />
    </nav>
  );
}

export default Navbar;
