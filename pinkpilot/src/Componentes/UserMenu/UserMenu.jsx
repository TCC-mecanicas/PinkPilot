import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";

import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function UserMenu(){
    return(
        <>
        <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Avatar
            size="md"
            alt="avatar"
            src="Icon.svg"
            className="hover:margentinha"
          />
      </MenuHandler>
      <MenuList>
        <Link to="/"><MenuItem>Perfil</MenuItem></Link>
        <Link to="/login"><MenuItem>Login</MenuItem></Link>
        <Link to="/cadastro"><MenuItem>Cadastrar</MenuItem></Link>
        
      </MenuList>
    </Menu>

 </>

    )
}

export default UserMenu