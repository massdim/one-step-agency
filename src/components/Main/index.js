import React from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Sidebar } from "../../components";
import {
  Dashboard,
  Profile,
  Talent,
  TalentAdd,
  TalentEdit,
  TalentProfile,
  Order,
} from "../../pages";

const Main = () => {
  const dispatch = useDispatch();

  return (
    <div
      class="grid grid-cols-12 gap-4 bg-gray-100"
      onClick={() =>
        dispatch({
          type: "SET_OPEN_DROPDOWN",
          data: {
            account: false,
            notification: false,
          },
        })
      }
    >
      <div class="col-span-3">
        <Sidebar />
      </div>
      <div class="col-span-9 px-6">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/account" component={Profile} />
          <Route exact path="/talents" component={Talent} />
          <Route path="/talents/add" component={TalentAdd} />
          <Route path="/talents/:id/edit" component={TalentEdit} />
          <Route path="/talents/:id" component={TalentProfile} />
          <Route exact path="/orders" component={Order} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
