import React, { Component } from 'react';
import * as api from '../lib/api';
import { PageHeader, Main } from '../ui';
import { Container, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  border-top: 1px solid #D5E6F1;
  background-color: #fff;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  overflow: hidden;

  &:last-child {
    border-bottom: 0;
  }
`;

const CommonName = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ScientificName = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #999;
  margin: 0;
`;

const CheckboxWrapper = styled.div`
  float: right;
`;

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
      if (result.bird.id === birdId) {
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
      <div>
        <Main slim>
          <PageHeader>Your Bird List</PageHeader>
        </Main>
        <ListWrapper>
          <Container>
            <List>
              {results.map(({ bird, seen }) => (
                <ListItem key={bird.id}>
                  <CheckboxWrapper>
                    <Checkbox
                      checked={seen}
                      onChange={() => this.toggleBird(bird.id, seen)}
                    />
                  </CheckboxWrapper>
                  <CommonName>{bird.commonName}</CommonName>
                  <ScientificName>{bird.scientificName}</ScientificName>
                </ListItem>
              ))}
            </List>
          </Container>
        </ListWrapper>
      </div>
    );
  }
}
