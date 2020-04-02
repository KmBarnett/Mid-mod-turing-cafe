import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.js';
import { getReservations } from '../APIControlor.js'
jest.mock('../APIControlor.js')

function renderForm() {
  return render(<App />)
}
describe('App', () => {
  getReservations.mockResolvedValueOnce([])

  it('should makeReservation reservation', () => {
  const { getByText, getByPlaceholderText, getByTestId  } = renderForm()
  const name = getByPlaceholderText('Name')
  const date = getByPlaceholderText('mm/dd')
  const time = getByPlaceholderText('00:00')
  const number = getByPlaceholderText('Party Size')
  const reserveBtn = getByText('Reserve')


  fireEvent.change(name, { target: { value: 'John' } })
  fireEvent.change(date, { target: { value: '04/01' } })
  fireEvent.change(time, { target: { value: '7:30' } })
  fireEvent.change(number, { target: { value: '3' } })
  fireEvent.click(reserveBtn)

  const nameDisplay = getByTestId('guest')
  const dateDisplay = getByTestId('date')
  const timeDisplay = getByTestId('time')
  const partyDisplay = getByTestId('party')

  expect(nameDisplay).toBeInTheDocument()
  expect(dateDisplay).toBeInTheDocument()
  expect(timeDisplay).toBeInTheDocument()
  expect(partyDisplay).toBeInTheDocument()


  })

})
