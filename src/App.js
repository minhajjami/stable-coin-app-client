
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import MultiStepForm from "./components/MultiStepForm";
import SellMultiStepForm from "./components/SellMultiStepForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/buy">
          <MultiStepForm />
        </Route>
        <Route path="/sell">
          <SellMultiStepForm/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
