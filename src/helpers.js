export const isBidInvalid = (bids, currentBid) => {
  return Object.keys(bids).includes(currentBid);
}

export const getClosestBid = (price, bids) => {
  /**
   * This function assumes that all bids are valid bids (lower than the price)
   *
   * */
  let closestBid = 0;
  bids.forEach((bid) => {
    if((price - bid) < price - closestBid) {
      closestBid = bid
    }
  })

  return closestBid;
}
