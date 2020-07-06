import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import _ from "lodash";
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
  const [steps, setSteps] = useState<Step[]>([
    { text: "do stuff", isBeingEdited: false },
  ]);

  const handleSubmitClick = () => {
    console.log("yeah boi");
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
    console.log("firing");
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
            <Container>
              <Container className={classes.ingredientList}>
                <Typography className={classes.subHeaderText} variant="h6">
                  Ingredients
                </Typography>
                {ingreds.map((ingred, i) => {
                  return ingred.isBeingEdited ? (
                    <ListItem>
                      <IngredientInput
                        data={ingred}
                        handleClick={(data) => onSaveIngredientClick(i, data)}
                      />
                    </ListItem>
                  ) : (
                    <ListItem>
                      <IconButton onClick={() => onEditIngredientClick(i)}>
                        <EditIcon />
                      </IconButton>
                      <ListItemText>{`${ingred.amount} ${ingred.unit} ${ingred.name}`}</ListItemText>
                    </ListItem>
                  );
                })}
                <IngredientInput handleClick={addIngredient} />
              </Container>
            </Container>
            <Container className={classes.ingredientList}>
              <Typography className={classes.subHeaderText} variant="h6">
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
                      <div>
                        <IconButton onClick={() => onEditStepClick(i)}>
                          <EditIcon />
                        </IconButton>
                        <ListItemText>{step.text}</ListItemText>
                      </div>
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
