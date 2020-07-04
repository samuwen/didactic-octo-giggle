import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Recipe } from "../assets/staticRecipes";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: "20rem",
    margin: "1rem",
  },
  cardImage: {
    maxHeight: "10rem",
  },
});

const RecipeCard = (props: { recipe: Recipe }) => {
  const recipe = props.recipe;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={`/recipe/${recipe.id}`}>
        <CardMedia
          className={classes.cardImage}
          component="img"
          image={recipe.image}
          title={recipe.name}
        />
        <CardContent>
          <Typography variant="body2">{recipe.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default RecipeCard;
