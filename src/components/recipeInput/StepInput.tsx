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
  saveIngredientContainer: {
    width: "100%",
    resize: "vertical",
  },
  ingInput: {
    width: "86%",
    resize: "vertical",
    marginRight: "1rem",
    marginBottom: "1rem",
  },
  addButton: {},
});

interface StepField {
  name: string;
  value: string;
  helperText: string;
  id: string;
  className: any;
}

interface MyProps {
  handleClick(data: Step): void;
  data?: Step;
}

export interface Step {
  text: string;
  isBeingEdited: boolean;
}

const StepInput = (props: MyProps) => {
  const classes = useStyles();
  const { handleClick, data } = props;
  const step = data === undefined ? { text: "", isBeingEdited: false } : data;
  const fieldDefault = [
    {
      name: "text",
      value: step.text,
      helperText: "Text for this step",
      id: "text-input",
      className: classes.ingInput,
    },
  ];
  const [fields, setFields] = useState<StepField[]>(fieldDefault);

  const addStep = () => {
    const step = {
      text: fields[0].value.trim(),
      isBeingEdited: false,
    };
    handleClick(step);
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
        step.isBeingEdited
          ? classes.saveIngredientContainer
          : classes.addIngredientContainer
      }
    >
      <IconButton onClick={addStep}>
        {step.isBeingEdited ? <SaveIcon /> : <AddIcon />}
      </IconButton>
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

export default StepInput;
