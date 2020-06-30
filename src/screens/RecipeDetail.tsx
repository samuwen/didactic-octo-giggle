import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import recipes from "../assets/staticRecipes";

type RouterProps = {
  match: any;
  location: any;
};

const RecipeDetail = (props: RouterProps) => {
  const { recipeId } = props.match.params;
  const recipe = recipes[recipeId];

  return (
    <Container>
      <Typography variant="h1">{recipe.name}</Typography>
      <List>
        {recipe.directions.map((d: string) => {
          return (
            <ListItem>
              <ListItemText primary={d} />
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default RecipeDetail;
