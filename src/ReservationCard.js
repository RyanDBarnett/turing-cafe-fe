import React, { Component } from 'react';
import './ReservationCard.css'

class ReservationCard extends Component {

  render() {
    const {date, id, name, number, time, cancelReservation} = this.props
    return (
      <article className="Card">
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>Numer of guests: {number}</p>
        <button onClick={() => cancelReservation(id)}>Cancel</button>
      </article>
    )
  }
}

export default ReservationCard;