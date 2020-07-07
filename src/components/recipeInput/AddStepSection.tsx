import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  ListItemText,
  Typography,
  ListItem,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import StepInput, { Step } from "./StepInput";

interface MyProps {
  steps: Step[];
  onSaveClick(i: number, data: Step): void;
  onEditClick(i: number): void;
  onAddClick(ingredient: Step): void;
}

const useStyles = makeStyles({
  subHeaderText: {
    textAlign: "center",
    marginTop: "1.5rem",
  },
  ingredientList: {
    width: "80%",
  },
});

const AddStepSection = (props: MyProps) => {
  const { steps, onSaveClick, onEditClick, onAddClick } = props;
  const classes = useStyles();

  return (
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
                handleClick={(data) => onSaveClick(i, data)}
              />
            ) : (
              <>
                <IconButton onClick={() => onEditClick(i)}>
                  <EditIcon />
                </IconButton>
                <ListItemText>{step.text}</ListItemText>
              </>
            )}
          </ListItem>
        );
      })}
      <StepInput handleClick={onAddClick} />
    </Container>
  );
};
export default AddStepSection;
