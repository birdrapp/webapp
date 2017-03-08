import React from 'react';
import { Item, Label } from 'semantic-ui-react'

class BirdRow extends React.Component {
  render() {
    return (
      <Item>
        <Item.Content>
          <Item.Header>{this.props.bird.commonName}</Item.Header>
          <Item.Meta>
            <span>
              {this.props.bird.order}
            </span>
            <span>&rsaquo;</span>
            <span>
              {this.props.bird.familyName}
            </span>
            <span>&rsaquo;</span>
            <span>
              {this.props.bird.scientificName}
            </span>
          </Item.Meta>
        </Item.Content>
      </Item>
    )
  }
}

export default BirdRow;
