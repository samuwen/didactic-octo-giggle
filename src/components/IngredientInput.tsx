import React, { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import _ from "lodash";

const useStyles = makeStyles({
  ingredientContainer: {
    width: "88%",
    resize: "vertical",
    padding: "1rem",
  },
  amtInput: {
    width: "10%",
    resize: "vertical",
    marginRight: "1rem",
  },
  ingInput: {
    width: "60%",
    resize: "vertical",
    marginRight: "1rem",
  },
  addButton: {},
});

interface IngredientField {
  name: string;
  value: string;
  helperText: string;
  id: string;
  className: any;
}

export interface Ingredient {
  amount: string | number;
  unit: string;
  name: string;
}

const IngredientInput = (props: { handleClick(data: Ingredient): void }) => {
  const classes = useStyles();
  const { handleClick } = props;
  const fieldDefault = [
    {
      name: "amount",
      value: "",
      helperText: "Amount",
      id: "amount-input",
      className: classes.amtInput,
    },
    {
      name: "unit",
      value: "",
      helperText: "Unit",
      id: "unit-input",
      className: classes.amtInput,
    },
    {
      name: "name",
      value: "",
      helperText: "Ingredient name",
      id: "name-input",
      className: classes.ingInput,
    },
  ];
  const [fields, setFields] = useState<IngredientField[]>(fieldDefault);

  const addIngredient = () => {
    const ingredient = {
      amount: fields[0].value.trim(),
      unit: fields[1].value.trim(),
      name: fields[2].value.trim(),
    };
    handleClick(ingredient);
    setFields(fieldDefault);
  };

  const onChange = (evt: any) => {
    const { name, value } = evt.target;
    const oldFields = [...fields];
    const fieldIndex = _.findIndex(oldFields, (f) => f.name === name);
    const field = oldFields[fieldIndex];
    field.value = value;
    oldFields[fieldIndex] = field;
    setFields(oldFields);
  };

  return (
    <div className={classes.ingredientContainer}>
      {fields.map((field) => {
        return (
          <TextField
            className={field.className}
            id={field.id}
            helperText={field.helperText}
            name={field.name}
            value={field.value}
            key={field.name}
            onChange={onChange}
          />
        );
      })}
      <IconButton className={classes.addButton} onClick={addIngredient}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default IngredientInput;
