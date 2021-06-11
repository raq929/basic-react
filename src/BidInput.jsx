import { useState } from 'react';
import './BidInput.css'
import styled from 'styled-components'
import { isBidInvalid } from './helpers';
import Button from './Button';

const Input = styled.input`
  font-size: 1em;
  padding: .2em;
`

const BidInput = ({ className, currentPlayer, setBids, setCurrentPlayer, disabled, players, bids }) => {
  const [ value, setValue ] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    setBids((prevBids) => ({ ...prevBids, [value]: players[currentPlayer] }))
    setCurrentPlayer((prevPlayer) => prevPlayer + 1)
    // return the value to 0 for the next player
    setValue(0)
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        {isBidInvalid(bids, value) && <p>That bid has already been chosen, please choose another.</p>}
        <label htmlFor="bid">Your bid:</label>
        <div>
          <div>$ <Input id="bid" name="bid" type='number' value={value} onChange={(e) => setValue(e.target.value)} /></div>
          <Button disabled={disabled || isBidInvalid(bids, value)} primary>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default BidInput;
