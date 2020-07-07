import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";
import { Ingredient } from "../components/recipeInput/IngredientInput";
import { Step } from "../components/recipeInput/StepInput";
import EditableField from "../components/recipeInput/EditableField";
import SaveableField from "../components/recipeInput/SaveableField";
import AddIngredientSection from "../components/recipeInput/AddIngredientSection";
import AddStepSection from "../components/recipeInput/AddStepSection";
import AddTagSection, { Tag } from "../components/recipeInput/AddTagSection";

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
    width: "30%",
    marginTop: "1rem",
    marginLeft: "10rem",
    marginRight: "auto",
  },
});

// next add tags section?

const RecipeInput = () => {
  const classes = useStyles();
  const [isEditingRecipe, setIsEditingRecipe] = useState(true);
  const [recipeName, setRecipeName] = useState("");

  const [ingreds, setIngreds] = useState<Ingredient[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

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

  const addTag = (tag: Tag) => {
    const oldTags = [...tags];
    oldTags.push(tag);
    setTags(oldTags);
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

  const onDeleteTagClick = (index: number) => {
    const oldTags = [...tags];
    oldTags.splice(index, 1);
    setTags(oldTags);
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
            <AddIngredientSection
              ingreds={ingreds}
              onSaveClick={onSaveIngredientClick}
              onEditClick={onEditIngredientClick}
              onAddClick={addIngredient}
            />
            <AddStepSection
              steps={steps}
              onSaveClick={onSaveStepClick}
              onEditClick={onEditStepClick}
              onAddClick={addStep}
            />
            <AddTagSection
              tags={tags}
              onAddClick={addTag}
              onDeleteClick={onDeleteTagClick}
            />
          </Container>
        </Container>
        <Button
          className={classes.submitButton}
          onClick={handleSubmitClick}
          color="primary"
          variant="contained"
        >
          Create new recipe
        </Button>
      </form>
    </Container>
  );
};

export default RecipeInput;
