import fetchData from './fetchData';

const postReservation = async (reservation) => {
  const url = 'http://localhost:3001/api/v1/reservations';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  } 
  return await fetchData(url, options)
}

export default postReservation;