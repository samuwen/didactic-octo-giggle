import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: "100%",
    justifyContent: "center",
    resize: "vertical",
  },
  text: {
    resize: "vertical",
    padding: "1rem",
  },
  icon: {
    maxWidth: "10%",
    resize: "vertical",
    padding: "1rem",
  },
});

const EditableField = (props: { fieldText: string; onEdit: () => void }) => {
  const { fieldText, onEdit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton className={classes.icon} onClick={onEdit}>
        <EditIcon />
      </IconButton>
      <div className={classes.text}>
        <Typography variant="h5">{fieldText}</Typography>
      </div>
    </div>
  );
};

export default EditableField;
