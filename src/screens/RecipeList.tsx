import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import RecipeCard from "../components/RecipeCard";
import recipes from "../assets/staticRecipes";

const RecipeList = () => {
  return (
    <Container className="mainContent">
      <Typography className="primary" variant="h1">
        Recipes
      </Typography>
      <Grid container spacing={1}>
        {recipes.map((r) => (
          <Grid key={r.name} item xs={3}>
            <RecipeCard recipe={r} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
