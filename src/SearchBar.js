import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { debounce } from 'lodash';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  throttledSearch = debounce(this.props.onSearch, 250);

  handleTextChange(e) {
    e.persist();
    this.props.onTextInput(e.target.value);
    this.throttledSearch(e.target.value);
  }

  render() {
    return (
      <Form size="large">
        <Form.Field control={Input} placeholder="Search..." value={this.props.filterText} onChange={this.handleTextChange} />
      </Form>
    );
  }
}

export default SearchBar
