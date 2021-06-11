import { getClosestBid } from './helpers';
import styled from 'styled-components';

const WinnerDisplay = styled.div`
  font-size: 2em;
  color: cornflowerblue;
  font-weight: 600;
`;

export const getWinner = (bids, itemPrice) => {
  let winner;
  // if player is over the price they did not win
  // if both players are under the price, then the closest wins
  // or both are over, neither wins
  // we have prevented players from entering the same price so we don't have to deal with that case here.

  const validBids = Object.keys(bids).filter((bid) => bid <= itemPrice)
  const numValidBids = Object.keys(validBids).length;

  if (numValidBids === 1) {
    winner = bids[validBids[0]];
  } else if (numValidBids > 1) {
    winner = bids[getClosestBid(itemPrice, validBids)]
  }

  return winner;
}

const GameStatus = ({ bids, players, item }) => {
  const winner = getWinner(bids, item.price);

  if(players.includes(winner)){
    return <WinnerDisplay>We have a winner! {winner}</WinnerDisplay>
  }

  return <WinnerDisplay>No one won :(</WinnerDisplay>
}

export default GameStatus;
