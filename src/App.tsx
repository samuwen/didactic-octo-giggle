import React from "react";
import ReactRouter from "./Routes";
import { Container, CssBaseline, List } from "@material-ui/core";
import ListItemLink from "./components/ListItemLink";

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <List component="nav">
          <ListItemLink primary="Home" to="/" />
          <ListItemLink primary="Recipe" to="/recipe" />
        </List>
      </Container>
      <CssBaseline />
      <ReactRouter />
    </React.Fragment>
  );
};

export default App;
