import './App.css';
import Nav from "./Layout/Nav/Nav"
import Home from "./Screens/Home/Home"
import ContactRoute from "./Screens/ContactMe/ContactRoute/Contactroute"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
        
      <Route exact path="/contact">
        <ContactRoute />
      </Route>

    </div>
  );
}

export default App;
