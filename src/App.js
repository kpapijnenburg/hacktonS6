import React from "react";

import Beheerders from "./components/beheerders";
import Onderzoekers from "./components/onderzoekers";
import TestPersoon from "./components/testpersoon";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <Router>
        <main role="main">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pl-3 pt-3 pb-2 mb-3 border-bottom">
            <Switch>
              <Route path="/beheerders">
                <Beheerders />
              </Route>
              <Route path="/onderzoekers">
                <Onderzoekers />
              </Route>
              <Route path="/testpersoon">
                <TestPersoon />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
