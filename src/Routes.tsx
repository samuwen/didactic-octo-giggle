import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./screens/Home";
import RecipeList from "./screens/RecipeList";
import RecipeDetail from "./screens/RecipeDetail";

const ReactRouter = () => {
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeList} />
        <Route exact path="/recipe/:recipeId" component={RecipeDetail} />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
