import React from "react";
import Iframe from 'react-iframe'




class Kontakt extends React.Component{
    render(){
        return(
    

<body>
  <div class ="container4" >
        <div class='parent' >
            <div class='child' >
                <h1> Kontakta oss</h1>
                <br></br>
                <h2> Restaurang & Pizzeria Milano</h2>
                <br></br>
                <p> 060-15 95 96 </p>
                <br></br>
                <p>Adress: Fridhemsgatan 66
                    85460 Sundsvall, SE </p>
                <br></br>
                <p>Företagsnamn: Pizzeria Milano
                    Organisationsnr: 870326-0631 </p>
            </div>
            <div class="container7">
              <form id="form" class="form" onsubmit="sendEmail(); reset(); return false;" >
                <h2>Hör av dig till oss</h2>
                <div class="form-control">
                  <label for="username" >Ditt namn</label>
                  <input type="text" id="username" placeholder="Skriv in ditt namn" onfocus="myFunction(this)" />
                  <small>Error Message</small>
                </div>
                <div class="form-control">
                  <label for="email">E-post</label>
                  <input type="text" id="email" placeholder="Skriv in din mail" onfocus="myFunction(this)" />
                  <small>Error Message</small>
                </div>
                <div class="form-control">
                  <label for="password">Lösenord</label>
                  <input type="password" id="password" placeholder="Skriv in ditt lösenord" onfocus="myFunction(this)"/>
                  <small>Error Message</small>
                </div>
                <div class="form-control">
                  <label for="password2">Bekräfta ditt lösenord</label>
                  <input type="password" id="password2" placeholder="Skriv in lösenord igen" onfocus="myFunction(this)"/>
                  <small>Error Message</small>
                </div>
                <div class="form-control">
                  <label for="message">Din fråga</label>
                  <textarea id="message" rows="4" cols="50" placeholder="Hur kan vi hjälpa till?" onfocus="myFunction(this)"></textarea>
                  <small>Error Message</small>
                </div>
                <input type="button" class ="submit"onclick="myFunction2()" value="Skicka" />
              </form>
            </div>
            <script src="script.js"></script>
            
        
        <div class = "map">
            
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1849.6839808080745!2d17.329200316197447!3d62.38027778282834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46646714dbe82391%3A0xbaa101d197d15e6d!2sPizzeria%20Milano!5e0!3m2!1ssv!2sse!4v1675273080946!5m2!1ssv!2sse" 
            width="100%" height="100%" border = "0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></Iframe>
        </div>

        </div>

    </div>




</body>
        );
    }
}



export default Kontakt;