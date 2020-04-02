import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form.js';

function renderLoginForm() {
  return render(<Form makeReservation = {jest.fn()} />)
}
describe('LoginForm', () => {

  it('Should Have its form', () => {
    const { getByText } = renderLoginForm()

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

})
