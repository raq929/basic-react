import { useState } from 'react';
import { isBidInvalid } from './helpers';

const BidInput = ({ currentPlayer, setBids, setCurrentPlayer, disabled, players, bids }) => {
  const [ value, setValue ] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault()
    setBids((prevBids) => ({ ...prevBids, [value]: players[currentPlayer] }))
    setCurrentPlayer((prevPlayer) => prevPlayer + 1)
    // return the value to 0 for the next player
    setValue(0)
  }

  return (
    <>
      <div>Your bid</div>
      <form onSubmit={handleSubmit}>
        {isBidInvalid(bids, value) && <p>That bid has already been chosen, please choose another.</p>}
        <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
        <button disabled={disabled || isBidInvalid(bids, value)}>Submit</button>
      </form>
    </>
  )
}

export default BidInput;
