import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js'
import Reservations from '../Reservations/Reservations.js'

import { getReservations } from '../APIControlor.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  async componentDidMount() {
    const reservations = await getReservations()
    this.setState({reservations: reservations})
  };

  makeReservation = (reservation) => {
    const { reservations } = this.state
    this.setState({reservations: [...reservations, reservation]})
  }

  render() {
    const { reservations } = this.state
    return (
      <section className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form  makeReservation={this.makeReservation}/>
        <Reservations reservations={reservations}/>
      </section>
    )
  }
}

export default App;
