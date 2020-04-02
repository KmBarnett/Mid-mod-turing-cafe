import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form.js';

function renderForm() {
  return render(<Form makeReservation = {jest.fn()} />)
}
describe('Form', () => {

  it('Should Have its form', () => {
    const { getByText } = renderForm()

    const nameInput = getByText('Name:')
    const dateInput = getByText('Date:')
    const timeInput = getByText('Time:')
    const partyInput = getByText('Party:')
    const reserveBtn = getByText('Reserve')

    expect(nameInput).toBeInTheDocument()
    expect(dateInput).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(partyInput).toBeInTheDocument()
    expect(reserveBtn).toBeInTheDocument()
  })

  it('should update reservation', () => {
  const { getByPlaceholderText, debug } = renderForm()
  const name = getByPlaceholderText('Name')
  const date = getByPlaceholderText('mm/dd')
  const time = getByPlaceholderText('00:00')
  const number = getByPlaceholderText('Party Size')

  fireEvent.change(name, { target: { value: 'John' } })
  fireEvent.change(date, { target: { value: '04/01' } })
  fireEvent.change(time, { target: { value: '7:30' } })
  fireEvent.change(number, { target: { value: '3' } })

  expect(name.value).toBe('John')
  expect(date.value).toBe('04/01')
  expect(time.value).toBe('7:30')
  expect(number.value).toBe('3' )
  })

})
