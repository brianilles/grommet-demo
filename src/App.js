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
  Calendar,
  Chart,
  Markdown,
  Video,
  DataTable,
  Text,
  Meter,
  CheckBox
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
      brand: "red"
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
      <Chart
        bounds={[[0, 7], [0, 100]]}
        values={[
          { value: [7, 100], label: "one hundred" },
          { value: [6, 70], label: "seventy" },
          { value: [5, 60], label: "sixty" },
          { value: [4, 80], label: "eighty" },
          { value: [3, 40], label: "forty" },
          { value: [2, 0], label: "zero" },
          { value: [1, 80], label: "thirty" },
          { value: [0, 60], label: "sixty" }
        ]}
        aria-label="chart"
      />
      <Button label="Edit" onClick={() => {}} />
      <Heading margin="none">Chapter 1</Heading>
      <Markdown>
        #### Grommet **heart**s markdown Favorite thing,
        [link](https://twitter.com/grommet_io)
      </Markdown>
      <Video controls="over" fit="cover">
        <source key="video" src="/assets/small.mp4" type="video/mp4" />
        <track
          key="cc"
          label="English"
          kind="subtitles"
          srcLang="en"
          src="/assets/small-en.vtt"
          default
        />
      </Video>
      <DataTable
        columns={[
          {
            property: "name",
            header: <Text>Name</Text>,
            primary: true
          },
          {
            property: "percent",
            header: "Complete",
            render: datum => (
              <Box pad={{ vertical: "xsmall" }}>
                <Meter
                  values={[{ value: datum.percent }]}
                  thickness="small"
                  size="small"
                />
              </Box>
            )
          }
        ]}
        data={[
          { name: "Alan", percent: 60 },
          { name: "Bryan", percent: 10 },
          { name: "Chris", percent: 30 },
          { name: "Eric", percent: 40 }
        ]}
      />
      <CheckBox label="interested?" />
    </Grommet>
  );
}

export default App;
