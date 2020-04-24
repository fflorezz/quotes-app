export function addQuote(newQuote, quotes) {
  const quoteExist = quotes.find((quote) => quote.id === newQuote.id);
  if (quoteExist) {
    alert("You have this quote in your fav already");
    return [...quotes];
  } else {
    alert("Quote added!");
    return [...quotes, newQuote];
  }
}

export function removeQuote(quoteToRemoveId, quotes) {
  return quotes.filter((quote) => quote.id !== quoteToRemoveId);
}
