import React from 'react';
import { Item } from 'semantic-ui-react'

class BirdRow extends React.Component {
  render() {
    return (
      <Item>
        <Item.Content>
          <Item.Header>{this.props.bird.commonName}</Item.Header>
          <Item.Meta>{this.props.bird.scientificName}</Item.Meta>
        </Item.Content>
      </Item>
    )
  }
}

export default BirdRow;
