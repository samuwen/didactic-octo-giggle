import React from "react";
import { ListItem, ListItemText, Paper } from "@material-ui/core";

interface Element {
  text: string;
}

const IngredientList = (text: Element) => {
  return (
    <Paper>
      <ListItem>
        <ListItemText primary={text.text} />
      </ListItem>
    </Paper>
  );
};

export default IngredientList;
