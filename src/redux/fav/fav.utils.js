export function addQuote(newQuote, fav) {
  const quoteExist = fav.find((quote) => quote.id === newQuote.id);
  if (quoteExist) {
    alert("You have this quote in your fav already");
    return [...fav];
  } else {
    alert("Quote added!");
    return [...fav, newQuote];
  }
}
