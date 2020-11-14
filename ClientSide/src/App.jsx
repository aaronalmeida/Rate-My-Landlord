import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Writerev from "./pages/Writerev";
import Housereview from "./pages/Housereview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/writeareview" component={Writerev} />
          <Route path="/housereview" component={Housereview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
