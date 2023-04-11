import React from "react";
import Kebab from "../img/kebab.jpeg"
import Gyros from "../img/gyros.jpeg"
import Margarita from "../img/margarita.jpeg"
import Grill from "../img/grill.jpeg"


class Home extends React.Component{
    render(){
        return(
    

<body>
  
<div class="container2">
      <h3>Sök efter din favorit mat</h3>
    <input type="search" id="myInput" placeholder="Sök.." class="fa fa-search" onsearch="myFunction()" />
    <p id="demo"></p>
    <div class="menu">
      <h2 class="menu-group-heading">
        Vår Meny
      </h2>
  
      <div class="catagories text-center">
        <ul>
            <li>Alla</li>
            <li>Lunch</li>
            <li>Middag</li>
            <li>Snacks</li>
        </ul>
    </div>
    <script>src="java.js"</script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>

      <div class="menu-group">
        <div class="menu-item">
          <img class="menu-item-image" src={Margarita} alt="Pizza" />
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">Pizza</span>
              <span class="menu-item-price">100 kr</span>
            </h3>
            <p class="menu-item-description">
              Klassisk enkel Pizza.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img class="menu-item-image" src={Kebab} alt="Kebab" />
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">Kebab</span>
              <span class="menu-item-price">95 kr</span>
            </h3>
            <p class="menu-item-description">
              Klassisk enkel kebabtallrik.
            </p>
          </div>
        </div>
      </div>
      <div class="menu-group">
        <div class="menu-item">
          <img class="menu-item-image" src={Gyros} alt="Gyros" />
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">Gyros</span>
              <span class="menu-item-price">99 kr</span>
            </h3>
            <p class="menu-item-description">
              Klasser enkel Gyros.
            </p>
          </div>
        </div>
        <div class="menu-item">
          <img class="menu-item-image" src={Grill} alt="Grill" />
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">Grill</span>
              <span class="menu-item-price">120 kr</span>
            </h3>
            <p class="menu-item-description">
              Klassisk grill.
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
  <script>
    {function myFunction() {
       var x = document.getElementById("myInput") ;
       document.getElementById("demo").innerHTML = "You are searching for: " + x.value;
    }}
    </script>

</body>
        );
    }
}

export default Home;