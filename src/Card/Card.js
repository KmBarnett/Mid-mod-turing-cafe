import React, { Component } from 'react';
import './Card.css';

function Card({ id, name, date , time, number }) {
    return (
      <section id={id} className="card">
        <h4 className='guest'>{name}</h4>
        <ul className='info'>
          <li>Date: {date}</li>
          <li>Time: {time}</li>
          <li>Party: {number}</li>
        </ul>
      </section>
    )
}

export default Card;
