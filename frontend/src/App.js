import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home.js";
import Admin from "./admin.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/admin" exact component={() => <Admin />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;