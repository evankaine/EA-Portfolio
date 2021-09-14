import './App.css';
import Nav from "./Layout/Nav/Nav"
import Home from "./Screens/Home/Home"
import Contact from "../src/Screens/ContactMe/ContactForm/ContactForm"
import ThankYou from "../src/Screens/ContactMe/ThankYou/ThankYou"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
        
      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route exact path="/thankyou">
        <ThankYou />
      </Route>


    </div>
  );
}

export default App;
