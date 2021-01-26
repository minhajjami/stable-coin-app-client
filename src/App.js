
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import MultiStepForm from "./components/MultiStepForm";
import Navbar from "./components/Navbar";
import SellMultiStepForm from "./components/SellMultiStepForm";
import BuyFinal from "./components/stepForm/BuyFinal";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/buy">
            <MultiStepForm />
          </Route>
          <Route path="/sell">
            <SellMultiStepForm />
          </Route>
          <Route path="/buyFinal">
            <BuyFinal />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
