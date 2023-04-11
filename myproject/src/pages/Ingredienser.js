import React from "react";
import Pizzaslice from "../img/pizzaslice.png"
import $ from 'jquery';


class Ingredienser extends React.Component{
    render(){
        return(
     
            <body>
                <div class="rubrik2">
  <h1>Ingredienser hos Pizzeria Milano</h1>
  </div>
 <div overflow-x= "auto;"> 
<table>
  <tr>
    <th>Råvaror</th>
    <th>Kalorier/100g</th>
    <th>Fett/100g</th>
  </tr>
  <tr>
    <td>Tomatsås</td>
    <td>300 kcal</td>
    <td>30g</td>
  </tr>
  <tr>
    <td>Mozarella</td>
    <td>350 kcal</td>
    <td>20g</td>
  </tr>
  <tr>
    <td>Prästost</td>
    <td>300 kcal</td>
    <td>25g</td>
  </tr>
  <tr>
    <td>Rökt skinka</td>
    <td>70 kcal</td>
    <td>5g</td>
  </tr>
  <tr>
    <td>Pizza deg</td>
    <td>500 kcal</td>
    <td>40g</td>
  </tr>
  <tr>
    <td>Ananas</td>
    <td>50 kcal</td>
    <td>3g</td>
  </tr>
</table>
 </div>
 <button id="btn6" width= "150px" height="20px" background= "#ffb854">Flytta Pizzan </button>
 <button id="btn5" width= "150px" height="20px" background= "#ffb854">Ta bort Pizzan</button>
 <button id="btn4" width= "150px" height="20px" background= "#ffb854">Ta tillbaka Pizzan</button>
 <div id="pizza" class="pizza">
  <img src={Pizzaslice} alt="" />
 </div>

 <script src="jquery.js"></script>

 <script>
  
    $(document).ready(function(){
    $('#btn6').click(function(){
      $('#pizza').animate({
        left:'400px' 
      },1000)
    })
  })
 
  $(document).ready(function(){
    $('#btn5').click(function(){
      $('#pizza').fadeOut(3000)
    })
  })

  $(document).ready(function(){
    $('#btn4').click(function(){
      $('#pizza').fadeIn(3000)
      
    })
  })
</script>
            </body>
 
        );
    }
}

export default Ingredienser;