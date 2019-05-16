import React, { Component } from 'react';
import './ReservationForm.css';

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
    this.props.makeReservation(this.state);
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value});
  }

  render() {
    const {name, date, time, number} = this.state;
    return (
      <form className='ReservationForm' onSubmit={this.handleSubmit}>
        <input className='input' onChange={this.handleChange} type='text' name='name' placeholder='Name' value={name} />
        <input className='input' onChange={this.handleChange} type='text' name='date' placeholder='Date (mm/dd)' value={date} />
        <input className='input' onChange={this.handleChange} type='text' name='time' placeholder='Time' value={time} />
        <input className='input' onChange={this.handleChange} type='number' name='number' placeholder='Number of guests' value={number}/>
        <input className='button' type='submit' value='Make Reservation'/>
      </form>
    )
  }
}

export default ReservationForm;