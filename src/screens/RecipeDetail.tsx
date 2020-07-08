import React from "react";
import { Container, List, Typography } from "@material-ui/core";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import recipes from "../assets/staticRecipes";
import IngredientList from "../components/IngredientList";
import ChipSection from "../components/ChipSection";

type RouterProps = {
  match: any;
  location: any;
};

const useStyles = makeStyles({
  root: {
    border: "solid",
  },
});

const RecipeDetail = (props: RouterProps) => {
  const { recipeId } = props.match.params;
  console.log(recipeId);
  let recipe = recipes.find((r) => parseInt(recipeId, 10) === r.id);
  if (recipe === undefined) {
    recipe = recipes[0];
  }
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h1">{_.startCase(recipe.name)}</Typography>
      <ChipSection tags={recipe.tags} />
      <img alt={recipe.name} src={recipe.image} />
      <Typography variant="body1">{recipe.description}</Typography>
      <Typography variant="h4">Ingredients</Typography>
      <Container>
        <List>
          {recipe.ingredients?.map((i) => {
            return (
              <IngredientList
                key={i.name}
                text={`${i.amount}${i.unit} ${i.name}`}
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
