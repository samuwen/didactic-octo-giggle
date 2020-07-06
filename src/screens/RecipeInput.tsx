import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import IngredientInput, {
  Ingredient,
} from "../components/recipeInput/IngredientInput";
import StepInput, { Step } from "../components/recipeInput/StepInput";
import EditableField from "../components/recipeInput/EditableField";
import SaveableField from "../components/recipeInput/SaveableField";

const useStyles = makeStyles({
  headerText: {
    textAlign: "center",
  },
  dataContainer: {
    border: "1px solid",
    borderRadius: "1px",
    maxWidth: "100%",
    justifyContent: "center",
  },
  subHeaderText: {
    textAlign: "center",
    marginTop: "1.5rem",
  },
  ingredientList: {
    width: "80%",
  },
  stepInput: {
    width: "60%",
    resize: "vertical",
    marginRight: "1rem",
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
  const [isEditingRecipe, setIsEditingRecipe] = useState(true);
  const [recipeName, setRecipeName] = useState("");

  const [ingreds, setIngreds] = useState<Ingredient[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);

  const handleSubmitClick = () => {
    const ingredients = ingreds.map((i) => {
      return { amount: i.amount, unit: i.unit, name: i.name };
    });
    const stps = steps.map((s) => {
      return { text: s.text };
    });
    const obj = JSON.stringify({
      name: recipeName,
      ingredients,
      stps,
    });
    console.log(obj);
  };

  const addIngredient = (ingredient: Ingredient) => {
    const oldIngreds = [...ingreds];
    oldIngreds.push(ingredient);
    setIngreds(oldIngreds);
  };

  const addStep = (step: Step) => {
    const oldSteps = [...steps];
    oldSteps.push(step);
    setSteps(oldSteps);
  };

  const onSaveClick = (value: string) => {
    setRecipeName(value);
    setIsEditingRecipe(false);
  };

  const onEditClick = () => {
    setIsEditingRecipe(true);
  };

  const setIngredBool = (index: number, b: boolean) => {
    const ingredients = [...ingreds];
    const ingredient = ingredients[index];
    ingredient.isBeingEdited = b;
    ingredients[index] = ingredient;
    setIngreds(ingredients);
  };

  const onEditIngredientClick = (index: number) => {
    setIngredBool(index, true);
  };

  const onEditStepClick = (index: number) => {
    const oldSteps = [...steps];
    const step = oldSteps[index];
    step.isBeingEdited = true;
    oldSteps[index] = step;
    setSteps(oldSteps);
  };

  const onSaveIngredientClick = (index: number, data: Ingredient) => {
    const oldIngreds = [...ingreds];
    oldIngreds[index] = data;
    setIngreds(oldIngreds);
  };

  const onSaveStepClick = (index: number, data: Step) => {
    const oldSteps = [...steps];
    oldSteps[index] = data;
    setSteps(oldSteps);
  };

  return (
    <Container>
      <form noValidate autoComplete="off">
        <Typography className={classes.headerText} variant="h1">
          New recipe
        </Typography>
        <Container className={classes.dataContainer}>
          <Container>
            {isEditingRecipe ? (
              <SaveableField
                onSaveClick={onSaveClick}
                fieldData={{
                  id: "recipe-name",
                  helper: "Recipe name",
                  name: "recipe-name",
                }}
                initialValue={recipeName}
              />
            ) : (
              <EditableField fieldText={recipeName} onEdit={onEditClick} />
            )}
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
                        handleClick={(data) => onSaveIngredientClick(i, data)}
                      />
                    ) : (
                      <>
                        <IconButton onClick={() => onEditIngredientClick(i)}>
                          <EditIcon />
                        </IconButton>
                        <ListItemText>{`${ingred.amount} ${ingred.unit} ${ingred.name}`}</ListItemText>
                      </>
                    )}
                  </ListItem>
                );
              })}
              <IngredientInput handleClick={addIngredient} />
            </Container>
            <Container className={classes.ingredientList}>
              <Typography className={classes.subHeaderText} variant="h5">
                Steps
              </Typography>
              {steps.map((step, i) => {
                return (
                  <ListItem>
                    {step.isBeingEdited ? (
                      <StepInput
                        data={step}
                        handleClick={(data) => onSaveStepClick(i, data)}
                      />
                    ) : (
                      <>
                        <IconButton onClick={() => onEditStepClick(i)}>
                          <EditIcon />
                        </IconButton>
                        <ListItemText>{step.text}</ListItemText>
                      </>
                    )}
                  </ListItem>
                );
              })}
              <StepInput handleClick={addStep} />
            </Container>
          </Container>
        </Container>
        <Button
          className={classes.submitButton}
          onClick={handleSubmitClick}
          variant="contained"
        >
          ENGAGE
        </Button>
      </form>
    </Container>
  );
};

export default RecipeInput;
