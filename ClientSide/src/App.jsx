import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Writerev from "./pages/Writerev";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/writeareview" component={Writerev} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
