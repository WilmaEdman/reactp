import React from "react";
import image from "../img/logo.png";
import { NavLink } from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
          
          <nav>

          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <NavLink to = '' margin-left= "20px"><img src={image} alt="loga" width= "120px" /></NavLink>
          <ul>
            <li>
                <NavLink to= '/Meny'>Meny</NavLink>
              </li>
              <li>
                <NavLink to = '/Kontakt'>Kontakt</NavLink>
              </li>
              <li>
                <NavLink to = '/Öppetider'>Öppetider</NavLink>
              </li>
              <li>
                <NavLink to = '/Ingredienser'>Ingredienser</NavLink>
              </li>
              <li>
                <NavLink to = '/tel:0767711006'><i class="far fa-phone-volume"></i> 060-159596</NavLink>
              </li>
              <li>
                <NavLink to = '/Kassa'>Kassa</NavLink>
              </li>
          </ul>
        </nav>
     

        );
    }
}

export default Header;