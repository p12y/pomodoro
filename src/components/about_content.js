import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

const style = { maxWidth: '60em', marginTop: '4em' };

const About = () => (
  <Card style={style} className="md-block-centered">
    <CardTitle title="The Pomodoro Technique" subtitle="" />
    <CardText>
      <p>
        The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. 
        The technique uses a timer to break work down into intervals, usually 25 minutes in length (called a pomoro), separated by short breaks.
      </p>
      <p>There are six steps in the original technique:</p>
      <ol>
        <li>Decide on the task to be done.</li>
        <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
        <li>Work on the task.</li>
        <li>End work when the timer stops and put a checkmark on a piece of paper.</li>
        <li>If you have fewer than four checkmarks, take a short break (3–5 minutes), then go to step 2.</li>
        <li>After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.</li>
      </ol>
      <p>The aim of the technique is to reduce the impact of internal and external interruptions on focus and flow. 
        If you are interrupted during a pomoro, the other activity must be recorded and postponed or the pomodoro must be abandoned.</p>
    </CardText>
  </Card>
);

export default About;