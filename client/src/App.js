import './App.css';
import Home from "./Screens/Home/Home"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <Home />
      </Route>
        
    </div>
  );
}

export default App;
