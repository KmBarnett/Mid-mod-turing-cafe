import React from 'react';
import './Reservartions.css';
import Card from '../Card/Card.js'


function Reservations({ reservations }) {
    return (
      <section className="reservations-container">
        <h2>Reservations:</h2>
        <section className="reservations">
          {reservations.map(reservation => <Card key={reservation.id} {...reservation} />)}
        </section>
      </section>
    )
}

export default Reservations;
