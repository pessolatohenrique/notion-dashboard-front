import React from "react";
import AppBarWrapper from "./components/AppBarWrapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import DashboardContainer from "./views/dashboard/DashboardContainer";

function App() {
  return (
    <Router>
      <AppBarWrapper />

      <Switch>
        <Route exact path="/">
          <DashboardContainer />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
