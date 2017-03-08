import React from 'react';
import BirdTable from './BirdTable';
import SearchBar from './SearchBar';
import { Grid } from 'semantic-ui-react';
import 'whatwg-fetch';

class BirdSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      birds: [],
      loading: false
    };

    this.baseUrl = 'https://api.birdr.co.uk/v1/birds';

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async fetchBirds(filterText) {
    try {
      if (filterText === '') return [];

      const url = `${this.baseUrl}?q=${filterText}&perPage=10`;
      const response = await fetch(url);
      const birds = await response.json();

      return birds.data;
    } catch (ex) {
      // How do we handle empty state
      return [];
    }
  }

  handleTextChange(filterText) {
    this.setState({
      loading: true,
      filterText: filterText
    });
  }

  async handleSearch(filterText) {
    const birds = await this.fetchBirds(filterText);

    this.setState({
      birds: birds,
      loading: false
    });
  }

  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Column computer={4} tablet={6}>
            <SearchBar filterText={this.state.filterText} loading={this.state.loading} onTextInput={this.handleTextChange} onSearch={this.handleSearch} />
          </Grid.Column>
          <Grid.Column computer={12} tablet={10}>
            <BirdTable birds={this.state.birds} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default BirdSearch;
