import React from "react";

import Onderzoekers from "./components/onderzoekers";
import TestPersoon from "./components/testpersoon";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Router> */}
      <main role="main">
        <div className="justify-content-between align-items-center pl-3 pt-3 pb-2 mb-3">
          {/* <Switch> */}
          {/* <Route path="/onderzoekers"> */}
          {/* <Onderzoekers /> */}
          {/* </Route> */}
          {/* <Route path="/testpersoon"> */}
          <TestPersoon />
          {/* </Route> */}
          {/* </Switch> */}
        </div>
      </main>
      {/* </Router> */}
    </div>
  );
}

export default App;
