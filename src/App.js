import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import Dashboard from "views/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
