import React, { Component } from 'react';
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
    const url = 'http://localhost:3001/api/v1/reservations'
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(reservations => {
      this.setState({ reservations })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
