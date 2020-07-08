import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import CameraEnhanceIcon from "@material-ui/icons/CameraEnhance";
import { Ingredient } from "../components/recipeInput/IngredientInput";
import { Step } from "../components/recipeInput/StepInput";
import AddIngredientSection from "../components/recipeInput/AddIngredientSection";
import AddStepSection from "../components/recipeInput/AddStepSection";
import AddTagSection, { Tag } from "../components/recipeInput/AddTagSection";
import staticRecipes from "../assets/staticRecipes";

const useStyles = makeStyles({
  headerText: {
    textAlign: "center",
  },
  imageInput: {
    display: "none",
  },
  nameContainer: {
    width: "80%",
  },
  images: {
    maxWidth: "50px",
    maxHeight: "50px",
  },
  imagesSection: {
    border: "solid 1px",
    borderColor: "#00bb00",
    maxWidth: "80%",
  },
  imageHeader: {
    textAlign: "center",
  },
  imageIcon: {
    marginLeft: "1rem",
  },
  dataContainer: {
    border: "1px solid",
    borderRadius: "1px",
    maxWidth: "100%",
    justifyContent: "center",
  },
  submitButton: {
    width: "30%",
    marginTop: "1rem",
    marginLeft: "10rem",
    marginRight: "auto",
  },
  formInput: {
    width: "60%",
    resize: "vertical",
    padding: "1rem",
    marginLeft: "3rem",
  },
});

const RecipeInput = () => {
  const classes = useStyles();
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [ingreds, setIngreds] = useState<Ingredient[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [titleVariant, setTitleVariant] = useState<
    "h1" | "h2" | "h3" | "h4" | "h5"
  >("h1");

  const handleSubmitClick = () => {
    const ingredients = ingreds.map((i) => {
      return {
        amount: parseInt(i.amount, 10),
        unit: i.unit,
        name: i.name,
      };
    });
    const finalSteps = steps.map((s) => s.text);
    const finalTags = tags.map((t, i) => {
      return { name: t.text, ordinal: i };
    });
    const obj = {
      name: recipeName,
      id: 15,
      description: recipeDescription,
      ingredients,
      directions: finalSteps,
      image: images[0],
      tags: finalTags,
    };
    staticRecipes.push(obj);
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

  const onFileChange = (evt: any) => {
    const files = evt.target.files;
    let urls = [];
    for (let i = 0; i < files.length; i += 1) {
      urls.push(URL.createObjectURL(files[i]));
    }
    setImages(urls);
  };

  return (
    <Container>
      <form noValidate autoComplete="off">
        <Typography className={classes.headerText} variant={titleVariant}>
          {recipeName === "" ? "New Recipe" : recipeName}
        </Typography>
        <Container className={classes.dataContainer}>
          <Container>
            <Container className={classes.nameContainer}>
              <TextField
                className={classes.formInput}
                error={false}
                id="recipe-name"
                helperText="Recipe name"
                placeholder="Add a recipe name"
                name="recipe-name"
                onChange={(evt: any) => {
                  setRecipeName(evt.target.value);
                  if (recipeName.length > 20) {
                    setTitleVariant("h3");
                  }
                  if (recipeName.length > 40) {
                    setTitleVariant("h5");
                  }
                  if (recipeName.length < 20) {
                    setTitleVariant("h1");
                  }
                }}
                value={recipeName}
                required
                size="medium"
                multiline={false}
                autoFocus
              />
              <TextField
                className={classes.formInput}
                error={false}
                id="recipe-description"
                helperText="Recipe description"
                placeholder="Add a recipe description"
                name="recipe-description"
                onChange={(evt: any) => {
                  setRecipeDescription(evt.target.value);
                }}
                value={recipeDescription}
                size="medium"
                multiline={false}
              />
            </Container>
            <Typography variant="h5" className={classes.imageHeader}>
              Add some pictures!
            </Typography>
            <Container className={classes.imagesSection}>
              <input
                className={classes.imageInput}
                id="image-button"
                type="file"
                accept="image/*"
                onChange={onFileChange}
                multiple
              />
              <label htmlFor="image-button">
                <IconButton className={classes.imageIcon} component="span">
                  <CameraEnhanceIcon />
                </IconButton>
              </label>
              {images.length > 0 &&
                images.map((i) => (
                  <img key={i} className={classes.images} src={i} alt="" />
                ))}
            </Container>
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
