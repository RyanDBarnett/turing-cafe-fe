import React, { Component } from 'react';
// import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value});
  }

  render() {
    const {name, date, time, number} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="ReservationForm">
        <input onChange={this.handleChange} type='text' name='name' placeholder='Name' value={name} />
        <input onChange={this.handleChange} type='text' name='date' placeholder='Date (mm/dd)' value={date} />
        <input onChange={this.handleChange} type='text' name='time' placeholder='Time' value={time} />
        <input onChange={this.handleChange} type='text' name='number' placeholder='Number of guests' value={number}/>
        <input type='submit' vale='Make Reservation'/>
      </form>
    )
  }
}

export default ReservationForm;