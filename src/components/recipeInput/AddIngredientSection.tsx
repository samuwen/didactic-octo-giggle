import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  ListItemText,
  Typography,
  ListItem,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import IngredientInput, { Ingredient } from "./IngredientInput";

interface MyProps {
  ingreds: Ingredient[];
  onSaveClick(i: number, data: Ingredient): void;
  onEditClick(i: number): void;
  onAddClick(ingredient: Ingredient): void;
}

const useStyles = makeStyles({
  subHeaderText: {
    textAlign: "center",
    marginTop: "1.5rem",
  },
  ingredientList: {
    width: "80%",
  },
});

const AddIngredientSection = (props: MyProps) => {
  const { ingreds, onSaveClick, onEditClick, onAddClick } = props;
  const classes = useStyles();

  return (
    <Container className={classes.ingredientList}>
      <Typography className={classes.subHeaderText} variant="h5">
        Ingredients
      </Typography>
      {ingreds.map((ingred, i) => {
        return (
          <ListItem key={`${ingred.name} ${i}`}>
            {ingred.isBeingEdited ? (
              <IngredientInput
                data={ingred}
                handleClick={(data) => onSaveClick(i, data)}
              />
            ) : (
              <>
                <IconButton onClick={() => onEditClick(i)}>
                  <EditIcon />
                </IconButton>
                <ListItemText>{`${ingred.amount} ${ingred.unit} ${ingred.name}`}</ListItemText>
              </>
            )}
          </ListItem>
        );
      })}
      <IngredientInput handleClick={onAddClick} />
    </Container>
  );
};

export default AddIngredientSection;
