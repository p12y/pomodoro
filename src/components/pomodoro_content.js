import React from 'react';
import Timer from './timer'
import { Grid, Cell, TabsContainer, Tabs, Tab } from 'react-md';

const Pomodoro = () => (
  <Grid className="grid-example">
    <Cell size={3}></Cell>
    <Cell size={6}>
    <TabsContainer style={{alignItems: 'center', justifyContent: 'center'}}  panelClassName="md-grid">
    <Tabs centered tabId="simple-tab">
      <Tab label="Pomodoro">
        <Timer />
      </Tab>
      <Tab label="Short Break">
        <Timer />
      </Tab>
      <Tab label="Long Break">
        <Timer />
      </Tab>
    </Tabs>
  </TabsContainer>
    </Cell>
    <Cell size={3}></Cell>
  </Grid>
)

export default Pomodoro;