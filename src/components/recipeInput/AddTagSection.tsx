import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Container, Typography } from "@material-ui/core";
import StepInput from "./StepInput";

export interface Tag {
  text: string;
}

interface MyProps {
  tags: Tag[];
  onDeleteClick(i: number): void;
  onAddClick(ingredient: Tag): void;
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
  const { tags, onDeleteClick, onAddClick } = props;
  const classes = useStyles();

  return (
    <Container className={classes.ingredientList}>
      <Typography className={classes.subHeaderText} variant="h5">
        Tags
      </Typography>
      {tags.map((tag, i) => {
        return <Chip label={tag.text} onDelete={() => onDeleteClick(i)} />;
      })}
      <StepInput handleClick={onAddClick} />
    </Container>
  );
};
export default AddStepSection;
