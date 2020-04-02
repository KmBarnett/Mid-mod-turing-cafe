import React, { Component } from 'react';
import './Reservartions.css';
import Card from '../Card/Card.js'


function Reservations({ reservations }) {
    return (
      <section className="Reservations">
        <h2>Reservations:</h2>
        {reservations.map(reservation => <Card reservation={reservation} />)}
      </section>
    )
}

export default Reservations;
