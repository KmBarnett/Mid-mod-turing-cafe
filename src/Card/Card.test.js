import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card.js';

function renderLoginForm() {
  return render(<Card
    id = {1}
    name = 'John'
    date  ='4/1'
    time = '7:30'
    number = {3}
    />)
}
describe('LoginForm', () => {

  it('Should Have its form', () => {
    const { getByText } = renderLoginForm()

    const name = getByText('John')
    const dateDisplay = getByText('Date:')
    const timeDisplay = getByText('Time:')
    const partyDisplay = getByText('Party:')

    expect(name).toBeInTheDocument()
    expect(dateDisplay).toBeInTheDocument()
    expect(timeDisplay).toBeInTheDocument()
    expect(partyDisplay).toBeInTheDocument()
  })

})
