import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, RecipeList, RecipeDetail, RecipeInput } from "./screens/index";

const ReactRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={RecipeList} />
        <Route exact path="/recipe/:recipeId" component={RecipeDetail} />
        <Route exact path="/recipeInput" component={RecipeInput} />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
