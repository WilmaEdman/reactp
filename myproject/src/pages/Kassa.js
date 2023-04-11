import React from "react";





class Kassa extends React.Component{
    render(){
        return(
    

<body>
  
<div class="wrapper">
    <div class="container3">
        <form action="">
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Utcheckning
            </h1>
            <div class="name">
                <div>
                    <label for="f-name">Namn</label>
                    <input type="text" name="f-name" />
                </div>
                <div>
                    <label for="l-name">Efternamn</label>
                    <input type="text" name="l-name" />
                </div>
            </div>
            <div class="street">
                <label for="name">Gata</label>
                <input type="text" name="address" />
            </div>
            <div class="street">
              <label for="name">E-postadress</label>
              <input type="text" name="address" />
          </div>
            <div class="address-info">
                <div>
                    <label for="city">Län</label>
                    <input type="text" name="city" />
                </div>
                <div>
                    <label for="state">Stad</label>
                    <input type="text" name="state" />
                </div>
                <div>
                    <label for="zip">Postnummer</label>
                    <input type="text" name="zip" />
                </div>
            </div>
            <h1>
                <i class="far fa-credit-card"></i> Betalnings information
            </h1>
            <div class="cc-num">
                <label for="card-num">Betalkortsnummer.</label>
                <input type="text" name="card-num" />
            </div>
            <div class="cc-info">
                <div>
                    <label for="card-num">Utgångsdatum</label>
                    <input type="text" name="expire" />
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security" />
                </div>
            </div>
            <div class="btns">
                <button>Betala</button>
                <button>Tillbaka till vagnen</button>
            </div>
        </form>
    </div>
</div>

</body>
        );
    }
}



export default Kassa;