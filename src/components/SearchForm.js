import React, { Component } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

class SearchForm extends Component {

  constructor(){
    super()
    this.state = {
      listActive: false
    }
  }

  listToggle = (value) =>{
    this.setState({
      listActive: value
    })
  }

  getFormData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValue = formData.get('cityName');
    this.listToggle(false);
    e.target.reset();
    return this.props.setWeather(formValue);
  }

  render() {
    const { cityList, setWeather } = this.props
    const { listActive } = this.state
    return(
      <Form className="form" onSubmit={this.getFormData}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter city name"
            name="cityName"
            onClick={() => this.listToggle(true)}
            onBlur={() => this.listToggle(false)}
            autoComplete="off"
          />
          <InputGroup.Append>
            <Button type="submit" variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <ul className={listActive ? 'cityList active' : 'cityList'}>
          {cityList.map((item, index) => <li key={index} className="cityList__item" onClick={() => setWeather(item)}>{item}</li>)}
        </ul>
      </Form>
    )
  }
}

export default SearchForm;
