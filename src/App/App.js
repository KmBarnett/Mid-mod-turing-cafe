import React, { Component } from 'react';
import './App.css';
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

  render() {
    const { reservations } = this.state
    console.log(reservations);
    return (
      <section className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <section className='resy-form'>

        </section>
        <Reservations reservations={reservations}/>
      </section>
    )
  }
}

export default App;
