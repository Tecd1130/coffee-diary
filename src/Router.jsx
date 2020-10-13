import React from "react";
import { Route, Switch } from "react-router";
import { SignUp } from "./components/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
    </Switch>
  );
};

export default Router;
