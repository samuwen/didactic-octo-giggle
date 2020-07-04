import React from "react";
import ReactRouter from "./Routes";
import { CssBaseline, Drawer, IconButton, List } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import ListItemLink from "./components/ListItemLink";
import useWindowSize from "./hooks/useWindowSize";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles({
  drawer: {
    color: "#ff0000",
  },
  mainContainer: {
    marginLeft: "10rem",
  },
  viewPort: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60rem",
  },
});

const App = () => {
  const [width] = useWindowSize();
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.drawer}>
          {width > 1050 ? (
            <Drawer variant="permanent">
              <List component="nav">
                <ListItemLink primary="Home" to="/" icon={HomeIcon} />
                <ListItemLink
                  primary="Recipe"
                  to="/recipes"
                  icon={RestaurantIcon}
                />
                <ListItemLink
                  primary="Add Recipe"
                  to="/recipeInput"
                  icon={AddIcon}
                />
              </List>
            </Drawer>
          ) : (
            <IconButton>
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.viewPort}>
            <ReactRouter />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
