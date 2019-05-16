import fetchData from './fetchData';

const deleteReservation = async (id) => {
  const url = `http://localhost:3001/api/v1/reservations/${id}`;
  const options = {method: 'DELETE'};
  return await fetchData(url, options);
}

export default deleteReservation;