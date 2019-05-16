import fetchData from './fetchData';

const fetchReservations = async () => {
  const url = 'http://localhost:3001/api/v1/reservations';
  return await fetchData(url);
}

export default fetchReservations;