import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  IconButton,
  Typography,
  TextField,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import _ from "lodash";
import IngredientInput, { Ingredient } from "../components/IngredientInput";
import EditableField from "../components/EditableField";

const useStyles = makeStyles({
  headerText: {
    marginLeft: "10rem",
  },
  formInput: {
    width: "80%",
    resize: "vertical",
    padding: "1rem",
  },
  nameInput: {
    width: "80%",
    resize: "vertical",
    padding: "1rem",
  },
  ingredientContainer: {
    border: "1px solid",
    borderRadius: "1px",
    maxWidth: "40rem",
  },
  submitButton: {
    width: "60%",
    marginTop: "1rem",
    marginLeft: "10rem",
    marginRight: "auto",
  },
});

const RecipeInput = () => {
  const classes = useStyles();
  const [recipeName, setRecipeName] = useState("sdf");
  const [recipeField, setRecipeField] = useState("");

  const [ingreds, setIngreds] = useState<Ingredient[]>([
    {
      amount: "1",
      unit: "cup",
      name: "onions",
    },
  ]);

  const handleSubmitClick = () => {
    console.log("yeah boi");
  };

  const addIngredient = (ingredient: Ingredient) => {
    const oldIngreds = [...ingreds];
    oldIngreds.push(ingredient);
    setIngreds(oldIngreds);
  };

  const onChange = (event: any) => {
    const { value, name } = event.target;
    setRecipeField(value);
  };

  const onSaveClick = () => {
    setRecipeName(recipeField);
  };

  const onEditClick = () => {
    setRecipeName("");
  };

  return (
    <Container>
      <form noValidate autoComplete="off">
        <div>
          <Typography className={classes.headerText} variant="h1">
            New recipe
          </Typography>
          <Container className={classes.ingredientContainer}>
            {!_.isEmpty(ingreds[0]) && (
              <Container>
                {_.isEmpty(recipeName) ? (
                  <Container>
                    <TextField
                      className={classes.formInput}
                      error={false}
                      id="recipe-name"
                      helperText="Recipe name"
                      name="recipeName"
                      onChange={onChange}
                      value={recipeField}
                    />
                    <IconButton onClick={onSaveClick}>
                      <SaveIcon />
                    </IconButton>
                  </Container>
                ) : (
                  <EditableField fieldText={recipeName} onEdit={onEditClick} />
                )}
                <Typography variant="body1">Ingredients</Typography>
                {ingreds.map((i) => {
                  return (
                    <Typography
                      key={i.name}
                      variant="body2"
                    >{`${i.amount} ${i.unit} ${i.name}`}</Typography>
                  );
                })}
              </Container>
            )}
          </Container>
          <IngredientInput handleClick={addIngredient} />
          <Button
            className={classes.submitButton}
            onClick={handleSubmitClick}
            variant="contained"
          >
            ENGAGE
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default RecipeInput;
