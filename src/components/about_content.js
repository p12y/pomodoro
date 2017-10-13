import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

const style = { maxWidth: '60em', marginTop: '4em' };

const Simple = () => (
  <Card style={style} className="md-block-centered">
    <CardTitle title="The Pomodoro Technique" subtitle="" />
    <CardText>
      <p>
        The <code>CardText</code> component is really just useful for displaying any
        content with some additional padding.
      </p>
    </CardText>
  </Card>
);

export default Simple;