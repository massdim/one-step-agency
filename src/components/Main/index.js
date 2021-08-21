import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Sidebar } from "../../components";
import { Dashboard, Talent } from "../../pages";

const Main = () => {
  return (
    <div class="grid grid-cols-12 gap-4 mr-2">
      <BrowserRouter>
        <div class="col-span-3">
          <Sidebar />
        </div>
        <div class="col-span-9 px-6 pt-6">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/talents">
              <Talent />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Main;
