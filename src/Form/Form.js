import React, { Component } from 'react';
import './Form.css';
import Reservations from '../Reservations/Reservations.js'
import { getReservations } from '../APIControlor.js'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: 0 }
    }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  resetFeilds() {
    this.setState({
      id: Date.now(),
      name: '',
      date: '',
      time: '',
      number: 0
    })
  }


  render = () => {
    const { name, date, time, number } = this.state
    const { makeReservation } = this.props
    const isFilledOut = !(name && date && time && number)
    return (
      <form  className="Form">
        <label> Name:
          <input onChange={(e) => {this.handleChange(e)}} type="text" placeholder='Name' name="name" value={name}/>
        </label>
        <label> Date:
          <input onChange={(e) => {this.handleChange(e)}} type="text" name="date" value={date} placeholder='mm/dd'/>
        </label>
        <label> Time:
          <input onChange={(e) => {this.handleChange(e)}} type="text" placeholder='00:00' name="time" value={time}/>
        </label>
        <label> Party:
          <input onChange={(e) => {this.handleChange(e)}} type="number" placeholder='Party Size' name="number" value={number}/>
        </label>
        <button disabled={isFilledOut} onClick={(e) => {
            e.preventDefault()
            makeReservation(this.state)
            this.resetFeilds()
          }}>Reserve</button>
      </form>
    )
  }
}



export default Form;
