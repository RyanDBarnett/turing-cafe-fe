import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({date, id, name, number, time, cancelReservation}) => {
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

export default ReservationCard;