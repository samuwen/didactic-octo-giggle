import React, { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import _ from "lodash";

const useStyles = makeStyles({
  addIngredientContainer: {
    width: "100%",
    resize: "vertical",
    marginLeft: ".9rem",
  },
  editIngredientContainer: {
    width: "100%",
    resize: "vertical",
  },
  addAmtInput: {
    width: "10%",
    resize: "vertical",
    marginRight: "1rem",
  },
  editAmtInput: {
    width: "10.5%",
    resize: "vertical",
    marginRight: "1rem",
  },
  addIngInput: {
    width: "60%",
    resize: "vertical",
    marginRight: "1rem",
  },
  editIngInput: {
    width: "63%",
  },
  saveButton: {},
  addButton: {},
});

interface IngredientField {
  name: string;
  value: string;
  helperText: string;
  id: string;
  className: any;
}

interface MyProps {
  handleClick(data: Ingredient): void;
  data?: Ingredient;
}

export interface Ingredient {
  amount: string;
  unit: string;
  name: string;
  isBeingEdited: boolean;
}

const IngredientInput = (props: MyProps) => {
  const classes = useStyles();
  const { data, handleClick } = props;
  const ingredient =
    data === undefined
      ? { amount: "", unit: "", name: "", isBeingEdited: false }
      : data;
  const fieldDefault = [
    {
      name: "amount",
      value: ingredient.amount,
      helperText: "Amount",
      id: "amount-input",
      className: ingredient.isBeingEdited
        ? classes.editAmtInput
        : classes.addAmtInput,
    },
    {
      name: "unit",
      value: ingredient.unit,
      helperText: "Unit",
      id: "unit-input",
      className: ingredient.isBeingEdited
        ? classes.editAmtInput
        : classes.addAmtInput,
    },
    {
      name: "name",
      value: ingredient.name,
      helperText: "Ingredient name",
      id: "name-input",
      className: ingredient.isBeingEdited
        ? classes.editIngInput
        : classes.addIngInput,
    },
  ];
  const [fields, setFields] = useState<IngredientField[]>(fieldDefault);

  const addIngredient = () => {
    const newIngredient = {
      amount: fields[0].value.trim(),
      unit: fields[1].value.trim(),
      name: fields[2].value.trim(),
      isBeingEdited: false,
    };
    handleClick(newIngredient);
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
    <div
      className={
        ingredient.isBeingEdited
          ? classes.editIngredientContainer
          : classes.addIngredientContainer
      }
    >
      {!ingredient.isBeingEdited ? (
        <IconButton className={classes.addButton} onClick={addIngredient}>
          <AddIcon />
        </IconButton>
      ) : (
        <IconButton className={classes.saveButton} onClick={addIngredient}>
          <SaveIcon />
        </IconButton>
      )}
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
    </div>
  );
};

export default IngredientInput;
