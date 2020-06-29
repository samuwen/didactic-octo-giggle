import React from "react";
import { Container, Typography } from "@material-ui/core";

const RecipeList = () => {
  return (
    <Container>
      <Typography variant="h1" component="h2">
        Recipe List
      </Typography>
      <Typography variant="body1">Here is a list of recipes</Typography>
    </Container>
  );
};

export default RecipeList;
