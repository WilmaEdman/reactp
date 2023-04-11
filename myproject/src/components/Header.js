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
          <a href="/" margin-left= "20px"><img src={image} alt="loga" width= "120px" /></a>
          <ul>
            <li>
                <a href="Meny.html">Meny</a>
              </li>
              <li>
                <a href="Kontakt.html">Kontakt</a>
              </li>
              <li>
                <a href="Öppetider.html">Öppetider</a>
              </li>
              <li>
                <a href="Ingredienser.html">Ingredienser</a>
              </li>
              <li>
                <a href="tel:0767711006"><i class="far fa-phone-volume"></i> 060-159596</a>
              </li>
              <li>
                <a href="Kassa.html">Kassa</a>
              </li>
          </ul>
        </nav>
        

        );
    }
}

export default Header;