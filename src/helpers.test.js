import { isBidInvalid } from './helpers';

describe('isBidInvalid', () => {
  it('returns true for bids that have already been used', () => {
    const bids = {
      400: 'player1',
      3000: 'player2',
    }
    expect(isBidInvalid(bids, "400")).toEqual(true);
    expect(isBidInvalid(bids, '3000')).toEqual(true);
  });
  it('returns false for bids that are new', () => {
    const bids = {
      400: 'player1',
      3000: 'player2',
    }
    expect(isBidInvalid(bids, '399')).toEqual(false);
    expect(isBidInvalid(bids, '10000')).toEqual(false);
  });
})
