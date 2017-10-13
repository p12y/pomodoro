import React from 'react';
import Timer from './timer'
import { Grid, Cell, TabsContainer, Tabs, Tab } from 'react-md';

const Pomodoro = () => (
  <Grid className="grid-example">
    <Cell size={3}></Cell>
    <Cell size={6}>
    <TabsContainer panelClassName="md-grid">
    <Tabs centered tabId="simple-tab">
      <Tab label="Pomodoro">
        <h3>Hello, World!</h3>
      </Tab>
      <Tab label="Short Break">
        <h3>Now look at me!</h3>
      </Tab>
      <Tab label="Long Break">
        <h3>Now look at me!</h3>
      </Tab>
    </Tabs>
  </TabsContainer>
    </Cell>
    <Cell size={3}></Cell>
  </Grid>
)

export default Pomodoro;