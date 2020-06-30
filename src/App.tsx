import React from "react";
import ReactRouter from "./Routes";
import { Container, CssBaseline, List } from "@material-ui/core";
import ListItemLink from "./components/ListItemLink";

const App = () => {
  return (
    <>
      <Container maxWidth="sm">
        <List component="nav">
          <ListItemLink primary="Home" to="/" />
          <ListItemLink primary="Recipe" to="/recipes" />
        </List>
      </Container>
      <CssBaseline />
      <ReactRouter />
    </>
  );
};

export default App;
