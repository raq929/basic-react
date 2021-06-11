import { getClosestBid } from './helpers';

const GameStatus = ({ bids, players, item }) => {
  let winner;
  // if player is over the price they did not win
  // if both players are under the price, then the closest wins
  // if price is the same, or both are over, neither wins

  const validBids = Object.keys(bids).filter((bid) => bid < item.price)
  const numValidBids = Object.keys(validBids).length;

  if (numValidBids === 1) {
    winner = bids[validBids[0]];
  } else if (numValidBids > 1) {
    winner = bids[getClosestBid(item.price, validBids)]
  }

  if(players.includes(winner)){
    return <div>We have a winner! {winner}</div>
  }

  return <div>No one won :(</div>
}

export default GameStatus;
