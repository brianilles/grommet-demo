import React from "react";
import "./App.css";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Menu,
  Tabs,
  Tab,
  WorldMap,
  TextInput,
  TextArea,
  Form,
  FormField,
  Calendar
} from "grommet";
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
      <Menu
        label="Menu"
        items={[
          { label: "First Action", onClick: () => {} },
          { label: "Second Action", onClick: () => {} }
        ]}
      />
      <Tabs>
        <Tab title="tab 1">
          <Box pad="medium">One</Box>
        </Tab>
        <Tab title="tab 2">
          <Box pad="medium">Two</Box>
        </Tab>
      </Tabs>
      <WorldMap
        color="neutral-1"
        continents={[
          {
            name: "Africa",
            color: "light-5",
            onClick: name => {}
          }
        ]}
        onSelectPlace={(lat, lon) => {}}
        places={[
          {
            name: "Sydney",
            location: [-33.8830555556, 151.216666667],
            color: "accent-2",
            onClick: name => {}
          }
        ]}
        selectColor="accent-2"
      />
      <TextInput placeholder="type here" />
      <TextArea placeholder="type here" />
      <Form>
        <FormField name="name" label="Name" />
        <Button type="submit" primary label="Submit" />
      </Form>
      <Calendar
        size="small"
        date={new Date().toISOString()}
        onSelect={date => {}}
      />
    </Grommet>
  );
}

export default App;
