import './App.css';
import Nav from "./Layout/Nav/Nav"
import Home from "./Screens/Home/Home"
import About from "../src/Screens/About/About"
import Contact from "../src/Screens/ContactMe/ContactForm/ContactForm"
import ThankYou from "../src/Screens/ContactMe/ThankYou/ThankYou"
import Resume from "../src/Screens/Resume/Resume"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/resume">
        <Resume />
      </Route>
      
      <Route exact path="/about">
        <About />
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
