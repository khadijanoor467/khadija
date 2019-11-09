import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage.js";
import Registration from "./Registration.js";
import MyContact from "./MyContact.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/contact">
          <MyContact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
