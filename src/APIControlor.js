export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .catch(err => console.error(err.message))
}
