import React from "react";
import { Container, List, Typography } from "@material-ui/core";
import recipes from "../assets/staticRecipes";
import IngredientList from "../components/IngredientList";

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
      <Typography variant="h4">Ingredients</Typography>
      <Container>
        <List>
          {recipe.ingredients?.map((i) => {
            return (
              <IngredientList
                key={i.name}
                text={`${i.amount} ${i.unit}s ${i.name}`}
              />
            );
          })}
        </List>
      </Container>
      <Typography variant="h4">Steps</Typography>
      <Container>
        <List>
          {recipe.directions.map((d: string) => {
            return <IngredientList key={d} text={d} />;
          })}
        </List>
      </Container>
    </Container>
  );
};

export default RecipeDetail;
