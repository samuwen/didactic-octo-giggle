import React from "react";
import ReactRouter from "./Routes";
import { Container, CssBaseline, Drawer, List } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
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
        <Drawer variant="permanent">
          <List component="nav">
            <ListItemLink primary="Home" to="/" icon={HomeIcon} />
            <ListItemLink
              primary="Recipe"
              to="/recipes"
              icon={RestaurantIcon}
            />
          </List>
        </Drawer>
      </Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ReactRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
