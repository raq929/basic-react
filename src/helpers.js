export const isBidInvalid = (bids, currentBid) => {
  return Object.keys(bids).includes(currentBid);
}

export const getClosestBid = (price, bids) => {
  /** This function assumes that all bids are valid bids */
  let closestBid;
  bids.forEach((bid) => {
    if((price - bid) < closestBid) {
      closestBid = bid
    }
  })

  return closestBid;
}
