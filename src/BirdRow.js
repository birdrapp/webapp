import React from 'react';
import { Item, Label } from 'semantic-ui-react'

class BirdRow extends React.Component {
  render() {
    let labels = [];
    this.props.bird.alternativeNames.forEach((n) => {
      labels.push(<Label>{n}</Label>);
    });
    return (
      <Item>
        <Item.Content>
          <Item.Header>{this.props.bird.commonName}</Item.Header>
          <Item.Meta>
            {labels}
          </Item.Meta>
          <Item.Extra>
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
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default BirdRow;
