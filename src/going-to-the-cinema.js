function movie(card, ticket, perc) {
  let result = 0;
  let sumSystemA = 0;
  let sumSystemB = card;
  let systemBPriceForTicket = 0;
  do {
    result++;
    sumSystemA += ticket;
    if (systemBPriceForTicket === 0) {
      systemBPriceForTicket = ticket * perc;
    } else {
      systemBPriceForTicket = Number(systemBPriceForTicket * perc).toFixed(10);
    }
    sumSystemB += Number(systemBPriceForTicket);
  } while (Math.ceil(sumSystemB) >= sumSystemA);
  return result;
}

module.exports = movie;
