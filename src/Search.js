import React, { Component } from 'react';
import { Form, FormControl, FormGroup } from 'react-bootstrap';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('changing');
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <FormGroup bsSize="large">
          <FormControl bsSize="large" placeholder="Search for a bird..." value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
      </Form>
    );
  }
}

export default Search;
