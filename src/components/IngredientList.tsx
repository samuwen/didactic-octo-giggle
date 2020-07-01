import React from "react";
import { ListItem, ListItemText, Paper } from "@material-ui/core";

interface Text {
  text: string;
}

const IngredientList = (text: Text) => {
  return (
    <Paper>
      <ListItem>
        <ListItemText primary={text.text} />
      </ListItem>
    </Paper>
  );
};

export default IngredientList;
