import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import ReservationCard from './ReservationCard';
import './App.css';
import fetchReservations from './api/fetchReservations';
import postReservation from './api/postReservation';
import deleteReservation from './api/deleteReservation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = async () => {
    const reservations = await fetchReservations();
    this.setState({ reservations });
  }

  makeReservation = async (reservation) => {
    reservation = await postReservation(reservation);
    const reservations = [...this.state.reservations, reservation];
    this.setState({ reservations });
  }

  cancelReservation = async (id) => {
    const reservations = await deleteReservation(id);
    this.setState({ reservations });
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
