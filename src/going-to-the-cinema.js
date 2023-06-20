function movie(card, ticket, perc) {

  let result = 0;
  let sumSystemA = 0;
  let sumSystemB = card;
  let systemBPriceForTicket = 0;
  
  do {
    sumSystemA += ticket;

    if ( systemBPriceForTicket === 0 ){
      systemBPriceForTicket = ticket * perc;
    } else {
      systemBPriceForTicket = systemBPriceForTicket * perc;
    }

    sumSystemB += systemBPriceForTicket;
    result++;
  } while (sumSystemA < Math.ceil(sumSystemB));

  return result;
}


/* solution timed out after 12s
function movie(card, ticket, perc) {

  let result = 0;
  let sumSystemA = 0;
  let sumSystemB = card;
  let formula = 'ticket ';
  
  do {
    sumSystemA += ticket;
    formula = formula + ' * perc';
    sumSystemB += eval(formula);
    result++;
  } while (sumSystemA < Math.ceil(sumSystemB));

  return result;
}
*/
module.exports = movie;
