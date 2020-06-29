import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import RecipeList from "./screens/RecipeList";

const ReactRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe" component={RecipeList} />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
