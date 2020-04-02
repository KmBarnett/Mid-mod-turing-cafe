import React from 'react';
import './Card.css';

function Card({ id, name, date , time, number }) {
    return (
      <section id={id} className="card">
        <h4 className='guest'>{name}</h4>
        <ul className='info'>
          <li><span className='label'>Date:</span> {date}</li>
          <li><span className='label'>Time:</span> {time}</li>
          <li><span className='label'>Party:</span> {number}</li>
        </ul>
      </section>
    )
}

export default Card;
