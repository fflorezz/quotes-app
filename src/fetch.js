// const [quotes, setQuotes] = useState([]);

// useEffect(() => {
//   async function fechData() {
//     const response = await axios.get("https://favqs.com/api/quotes/?", {
//       params: {
//         filter: "funny",
//       },
//       headers: {
//         Authorization: "Token token=00ad73b56abbd232c614f4368f3eeb91",
//       },
//     });

//     setQuotes(response.data.quotes);
//   }
//   fechData();
// }, []);

// return (
//   <div className="App">
//     {quotes.map((quote) => (
//       <div key={quote.id}>
//         <h3>{quote.author}</h3>
//         <p>{quote.body}</p>
//         <br />
//       </div>
//     ))}
//   </div>
// );
