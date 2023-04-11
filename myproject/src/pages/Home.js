import React from "react";
import { NavLink } from "react-router-dom";




class Home extends React.Component{
    render(){
        return(

<body>

  

<header class="header">
<div class="container">
  <div>
  <h1> We have the best Pizza!</h1>
  <NavLink to = '/Meny'>Meny</NavLink>
  </div>
</div>
</header>


</body>

        );
    }
}



export default Home;