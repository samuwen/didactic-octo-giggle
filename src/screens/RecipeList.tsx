import React from "react";
import { Container, List, Typography } from "@material-ui/core";
import ListItemLink from "../components/ListItemLink";
import recipes from "../assets/staticRecipes";

const RecipeList = () => {
  return (
    <Container>
      <Typography className="primary" variant="h1">
        Recipe List
      </Typography>
      <List>
        {recipes.map((r) => {
          return (
            <ListItemLink
              key={r.name}
              primary={r.name}
              to={`/recipe/${r.id}`}
            />
          );
        })}
      </List>
    </Container>
  );
};

export default RecipeList;
