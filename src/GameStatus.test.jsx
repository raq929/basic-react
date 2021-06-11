import { render, screen } from '@testing-library/react';
import GameStatus, {getWinner} from './GameStatus';

describe('getWinner', () => {
  it('selects the correct winner if there is only one valid bid', () => {
    const itemPrice = 500;
    const bids = {
      '400': 'Player 1',
      '700': 'Player 2',
    }
    expect(getWinner(bids, itemPrice)).toEqual(bids[400])
  });
  it('selects the correct winner if there are multiple valid bids', () => {
    const itemPrice = 500;
    const bids = {
      '400': 'Player 1',
      '499': 'Player 2',
    }
    expect(getWinner(bids, itemPrice)).toEqual(bids[499])
  });
  it('selects the correct winner if the bid matches exactly', () => {
    const itemPrice = 400;
    const bids = {
      '400': 'Player 1',
      '499': 'Player 2',
    }
    expect(getWinner(bids, itemPrice)).toEqual(bids[400])
  });
  it('selects no winner if there are no valid bids', () => {
    const itemPrice = 500;
    const bids = {
      '4000': 'Player 1',
      '501': 'Player 2',
    }
    expect(getWinner(bids, itemPrice)).toEqual(undefined)
  })
});

describe('GameStatus', () => {
  const players = [ 'Player 1', 'Player 2']
  const bids = {
    '400': players[0],
    '499': players[1],
  }

  test.each([
    [{ price: 500 }, players[1]],
    [{ price: 401 }, players[0]],
    [{ price: 499 }, players[1]],
  ])('displays the correct player that won %#', (item, winner) => {
    render(<GameStatus players={players} item={item} bids={bids} />)
    screen.getByText(winner, { exact: false})
  });
});
