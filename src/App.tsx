import React from "react";
import ReactRouter from "./Routes";
import { Container, CssBaseline, List } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ListItemLink from "./components/ListItemLink";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <>
      <Container maxWidth="sm">
        <List component="nav">
          <ListItemLink primary="Home" to="/" />
          <ListItemLink primary="Recipe" to="/recipes" />
        </List>
      </Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
