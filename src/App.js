import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import ReservationCard from './ReservationCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    this.fetchReservations();
  }

  fetchReservations = () => {
    const url = 'http://localhost:3001/api/v1/reservations';
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(reservations => {
      this.setState({ reservations })
    })
  }

  makeReservation = (reservation) => {
    const url = 'http://localhost:3001/api/v1/reservations';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    } 
    fetch(url, options)
    .then(response => response.json())
    .then(reservation => {
      const reservations = [...this.state.reservations, reservation]
      this.setState({ reservations });
    })
  }

  cancelReservation = (id) => {
    const url = `http://localhost:3001/api/v1/reservations/${id}`
    const options = {
      method: 'DELETE'
    }
    fetch(url, options)
    .then(response => response.json())
    .then(reservations => this.setState({ reservations }));
  }

  render() {
    const reservations = this.state.reservations.map(reservation => {
      return <ReservationCard cancelReservation={this.cancelReservation} {...reservation} key={reservation.id} />
    });
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationForm makeReservation={this.makeReservation} />
        <div className='resy-container'>
          {reservations}
        </div>
      </div>
    )
  }
}

export default App;
