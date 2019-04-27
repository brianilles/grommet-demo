import React from "react";
import "./App.css";
import { Box, Grommet } from "grommet";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    elevation="medium"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

const theme = {
  global: {
    colors: {
      brand: "lightgray"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "15px"
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>Hello World from Grommet</AppBar>
    </Grommet>
  );
}

export default App;
