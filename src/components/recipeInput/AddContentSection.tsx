import React, { useState } from "react";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
  subHeaderText: {
    textAlign: "center",
  },
  ingredientList: {
    width: "80%",
  },
});

interface MyProps {
  title: string;
  list: { id: number; text: string }[];
}

const AddContentSection = (props: React.PropsWithChildren<MyProps>) => {
  const { title, list } = props;
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const [hasChange, setHasChange] = useState(false);

  const onEditClick = (id: number) => {
    const item = list.find((el) => el.id === id);
    if (!hasChange && item) {
      setText(item.text);
    }
    setIsEditing(true);
  };

  const onChange = (evt: any) => {
    const { value, name } = evt.target;
    setHasChange(true);
    setText(value);
  };

  const onSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      <Typography className={classes.subHeaderText} variant="h6">
        {title}
      </Typography>
      <List className={classes.ingredientList}>
        {list.map((item) => {
          return (
            <div key={item.id}>
              {isEditing ? (
                <ListItem>
                  <IconButton edge="start" onClick={onSaveClick}>
                    <SaveIcon />
                  </IconButton>
                  <TextField
                    autoFocus
                    name={item.id.toString()}
                    value={text}
                    onChange={onChange}
                  />
                </ListItem>
              ) : (
                <ListItem button onClick={() => onEditClick(item.id)}>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText>{hasChange ? text : item.text}</ListItemText>
                </ListItem>
              )}
            </div>
          );
        })}
      </List>
    </Container>
  );
};

export default AddContentSection;
