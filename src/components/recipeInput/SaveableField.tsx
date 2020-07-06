import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, IconButton, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  container: {
    width: "80%",
  },
  formInput: {
    width: "60%",
    resize: "vertical",
    padding: "1rem",
    marginLeft: "1rem",
  },
  icon: {
    paddingTop: "1.7rem",
    marginLeft: "1rem",
  },
});

const SaveableField = (props: {
  onSaveClick: (value: string) => void;
  fieldData: { id: string; helper: string; name: string };
  initialValue: string;
}) => {
  const { fieldData, onSaveClick, initialValue } = props;
  const [text, setText] = useState(initialValue);
  const classes = useStyles();

  const onClick = () => {
    onSaveClick(text);
  };

  const onChange = (evt: any) => {
    const { value } = evt.target;
    setText(value);
  };

  return (
    <Container className={classes.container}>
      <IconButton className={classes.icon} onClick={onClick}>
        <SaveIcon />
      </IconButton>
      <TextField
        className={classes.formInput}
        error={false}
        id={fieldData.id}
        helperText={fieldData.helper}
        name={fieldData.name}
        onChange={onChange}
        value={text}
        size="medium"
        autoFocus
      />
    </Container>
  );
};

export default SaveableField;
