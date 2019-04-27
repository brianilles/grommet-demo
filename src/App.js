import React from "react";
import "./App.css";
import { Box, Button, Heading, Grommet } from "grommet";
import { Apps } from "grommet-icons";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    elevation="small"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    style={{ zIndex: "1" }}
    {...props}
  />
);

const theme = {
  global: {
    colors: {
      brand: "green"
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
      <AppBar>
        <p>Hello World from Grommet</p>
        <Heading level="3" margin="none">
          App
        </Heading>
        <Button icon={<Apps />} />
      </AppBar>
    </Grommet>
  );
}

export default App;
