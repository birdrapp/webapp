import React from 'react';
import { Form } from 'semantic-ui-react';
import { debounce } from 'lodash';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  throttledSearch = debounce(this.props.onSearch, 250);

  handleTextChange(e) {
    this.props.onTextInput(e.target.value);
    this.throttledSearch(e.target.value);
  }

  render() {
    return (
      <Form size="large">
        <Form.Input icon='search' loading={this.props.loading} placeholder="Search..." value={this.props.filterText} onChange={this.handleTextChange} />
      </Form>
    );
  }
}

export default SearchBar
