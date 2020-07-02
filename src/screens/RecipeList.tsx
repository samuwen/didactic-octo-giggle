import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import RecipeCard from "../components/RecipeCard";
import recipes from "../assets/staticRecipes";

const RecipeList = () => {
  return (
    <Container>
      <Typography className="primary" variant="h1">
        Recipes
      </Typography>
      <Grid container>
        {recipes.map((r) => (
          <RecipeCard recipe={r} />
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
