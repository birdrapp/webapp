import React from 'react';
import BirdRow from './BirdRow';
import { Item } from 'semantic-ui-react';

class BirdTable extends React.Component {
  render() {
    var rows = [];
    this.props.birds.forEach(function (bird) {
      rows.push(
        <BirdRow bird={bird} key={bird.id} />
      );
    });
    return (
      <Item.Group divided>
        {rows}
      </Item.Group>
    );
  }
}

export default BirdTable
