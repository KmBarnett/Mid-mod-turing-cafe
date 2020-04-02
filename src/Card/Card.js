import React from 'react';
import './Card.css';

function Card({ id, name, date , time, number }) {
    return (
      <section id={id} className="card">
        <h4 data-testid='guest' className='guest'>{name}</h4>
        <ul className='info'>
          <li data-testid='date'><span className='label'>Date:</span> {date}</li>
          <li data-testid='time'><span className='label'>Time:</span> {time}</li>
          <li data-testid='party'><span className='label'>Party:</span> {number}</li>
        </ul>
      </section>
    )
}

export default Card;
