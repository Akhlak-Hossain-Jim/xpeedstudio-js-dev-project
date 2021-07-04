import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// component imports
import Header from "./Components/Header";

// page imports
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
// import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/get-form/">
          <Create />
        </Route>
        {/* <Route exact path='/update-form/'>
          <Update />
        </Route> */}
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
