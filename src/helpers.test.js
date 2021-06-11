import { getClosestBid, isBidInvalid } from './helpers';

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

describe('getClosestBid', () => {
  it('returns the bid closes to the price - inexact match', () => {
    const price = 501;
    // numbers are converted to strings to be the keys of an object, so we're expecting strings here
    const bids = [ '400', '500', '13.99'];
    expect(getClosestBid(price, bids)).toEqual('500')
  });
  it('returns the bid closes to the price - exact match', () => {
    const price = 500;
    // numbers are converted to strings to be the keys of an object, so we're expecting strings here
    const bids = [ '400', '500', '13.99'];
    expect(getClosestBid(price, bids)).toEqual('500')
  });
})
