import React from 'react';
import BirdRow from './BirdRow';
import { Item, Message } from 'semantic-ui-react';

class BirdTable extends React.Component {
  render() {
    var rows = [];
    this.props.birds.forEach(function (bird) {
      rows.push(
        <BirdRow bird={bird} key={bird.id} />
      );
    });

    if (rows.length === 0) {
      return (
        <Message size="large">
          <Message.Header>
            No birds found
          </Message.Header>
          <p>
            Try searching with a different term.
          </p>
        </Message>
      )
    } else {
      return (
        <Item.Group divided>
          {rows}
        </Item.Group>
      );
    }
  }
}

export default BirdTable
