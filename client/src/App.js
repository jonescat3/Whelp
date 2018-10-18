import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Vendors from "./pages/Vendor";
//import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Vendors} />
        <Route exact path="/vendors" component={Vendors} />
         <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
