import React from 'react';
import BirdTable from './BirdTable';
import SearchBar from './SearchBar';
import 'whatwg-fetch';

class BirdSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      birds: []
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  async fetchBirds(filterText) {
    try {
      const response = await fetch(`https://api.birdr.co.uk/v1/birds?q=${filterText}&perPage=10`);
      const birds = await response.json();
      return birds.data;
    } catch (ex) {
      // How do we handle empty state
      return [];
    }
  }

  async handleTextChange(filterText) {
    const birds = await this.fetchBirds(filterText);

    this.setState({
      filterText: filterText,
      birds: birds
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onTextInput={this.handleTextChange} />
        <BirdTable birds={this.state.birds} />
      </div>
    );
  }
}

export default BirdSearch;
