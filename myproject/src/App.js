import Home from "./pages/Home";
import Header from "./components/Header"
import Meny from "./pages/Meny";
import Ingredienser from "./pages/Ingredienser";
import Kontakt from "./pages/Kontakt";
import Kassa from "./pages/Kassa";
import Öppetider from "./pages/Öppetider"
import Likes from "./components/Likes";



import{BrowserRouter as Router, Route, Routes} from "react-router-dom"

import './App.css';



function App() {
  return (
      <Router>
        <Header />
        <Likes />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Meny" element={<Meny/>}/>
          <Route path="/Ingredienser" element={<Ingredienser/>}/>
          <Route path="/Kontakt" element={<Kontakt/>}/>
          <Route path="/Kassa" element={<Kassa/>}/>
          <Route path="/Öppetider" element={<Öppetider/>}/>
        </Routes>
      </Router>
  );
}

export default App;
