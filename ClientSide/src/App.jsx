import React from "react";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Writerev from "./pages/Writerev";
import Housereview from "./pages/Housereview";
import Afterreview from "./pages/Afterreview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/writeareview" exact component={Writerev} />
          <Route
            exact
            path="/housereview/:id"
            render={(props) => <Housereview />}
          />
          <Route exact path="/thankyou" component={Afterreview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
