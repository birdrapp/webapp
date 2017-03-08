import React from 'react';
import { Form, Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onTextInput(e.target.value);
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
