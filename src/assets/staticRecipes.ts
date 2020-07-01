const recipes = [
  {
    name: "pasta",
    id: 0,
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
        unit: "cup",
        name: "water",
      },
      {
        amount: 5,
        unit: "g",
        name: "salt",
      },
    ],
  },
  {
    name: "chicken",
    id: 1,
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
        amount: 3,
        unit: "lb",
        name: "whole chicken",
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
  },
];

export default recipes;
