import React, { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import _ from "lodash";

const useStyles = makeStyles({
  ingredientContainer: {
    width: "100%",
    resize: "vertical",
  },
  ingInput: {
    width: "60%",
    resize: "vertical",
    marginRight: "1rem",
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

export interface Step {
  text: string;
}

const StepInput = (props: { handleClick(data: Step): void }) => {
  const classes = useStyles();
  const { handleClick } = props;
  const fieldDefault = [
    {
      name: "text",
      value: "",
      helperText: "Add new step",
      id: "text-input",
      className: classes.ingInput,
    },
  ];
  const [fields, setFields] = useState<StepField[]>(fieldDefault);

  const addStep = () => {
    const step = {
      text: fields[0].value.trim(),
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
      <IconButton className={classes.addButton} onClick={addStep}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default StepInput;
