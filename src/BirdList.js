import React, { Component } from 'react';
import * as api from './api';
import { Header, List, Grid, Checkbox } from 'semantic-ui-react';

export default class BirdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      error: null
    };
  }

  async componentWillMount() {
    this.setState({ isLoading: true });

    try {
      const results = await api.getBirdList();
      this.setState({ isLoading: false, results });
    } catch (err) {
      this.setState({ isLoading: false, error: err.message });
    }
  }

  async toggleBird(birdId, seen) {
    const results = this.state.results.map(result => {
      if (result.seen) {
        return { ...result, seen: !seen };
      } else {
        return result;
      }
    });

    this.setState({ results });
  }

  render() {
    const { results } = this.state;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column computer="4" />
          <Grid.Column width="16" computer="8">
            <Header as="h1">Your Bird List</Header>
            <List divided>
              {results.map(({ bird, seen }) => (
                <List.Item key={bird.id}>
                  <List.Content floated="right">
                    <Checkbox
                      defaultChecked={seen}
                      onChange={() => this.toggleBird(bird.id, seen)}
                    />
                  </List.Content>
                  <List.Content>
                    <List.Header>{bird.commonName}</List.Header>
                    <em>{bird.scientificName}</em>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
