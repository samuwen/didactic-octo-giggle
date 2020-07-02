import chicken from "./chicken.jpg";
import pasta from "./pasta.jpg";

export interface Recipe {
  name: string;
  id: number;
  description: string;
  directions: string[];
  ingredients: Ingredient[];
  image: string;
  tags: Tag[];
}

export interface Ingredient {
  amount: number;
  unit: string;
  name: string;
}

export interface Tag {
  name: string;
  ordinal: number;
}

const recipes: Recipe[] = [
  {
    name: "pasta",
    id: 0,
    description: "This delicious pasta has no sauce because you are poor",
    directions: [
      "Add salt to water",
      "Boil salted water",
      "Add pasta",
      "When pasta starts getting soft, start tasting",
      "Remove when al dente",
      "Serve",
    ],
    ingredients: [
      {
        amount: 1,
        unit: "lb",
        name: "spaghetti",
      },
      {
        amount: 4,
        unit: "cups",
        name: "water",
      },
      {
        amount: 5,
        unit: "g",
        name: "salt",
      },
    ],
    image: pasta,
    tags: [
      {
        name: "main",
        ordinal: 0,
      },
      {
        name: "entree",
        ordinal: 1,
      },
      {
        name: "grain",
        ordinal: 2,
      },
      {
        name: "vegetarian",
        ordinal: 3,
      },
    ],
  },
  {
    name: "chicken",
    id: 1,
    description: "This is a basic chicken breast",
    directions: [
      "Season",
      "Heat pan on medium-high",
      "Add oil",
      "Sear chicken for a minute",
      "Flip chicken",
      "Turn heat down to medium low",
      "Cover pan",
      "Cook for 10 minutes",
      "Remove pan from heat",
      "Leave covered for 10 more minutes",
      "Check chicken is at least 165f",
      "Serve",
    ],
    ingredients: [
      {
        amount: 1,
        unit: "lb",
        name: "boneless skinless chicken breast",
      },
      {
        amount: 5,
        unit: "g",
        name: "salt",
      },
      {
        amount: 5,
        unit: "g",
        name: "pepper",
      },
    ],
    image: chicken,
    tags: [
      {
        name: "entree",
        ordinal: 1,
      },
      {
        name: "main",
        ordinal: 0,
      },
      {
        name: "poultry",
        ordinal: 2,
      },
    ],
  },
];

export default recipes;
