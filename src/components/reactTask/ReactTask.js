import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Navbar from "../Navbar";

const ReactTask = () => {
  const [quotes, setQuotes] = useState([]);
  const randomNumberOfQuote = Math.floor(Math.random() * quotes.length);
  const [myQuote, setMyQuote] = useState({ quote: "", author: "" });

  const getQuotes = async () => {
    await axios
      .get(
        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
      )
      .then((res) => setQuotes(res.data));
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const setNewQuote = () => {
    setMyQuote(quotes[randomNumberOfQuote]);
    console.log(myQuote);
  };

  const showPrevQuote = () => {
    setMyQuote((prevState) => ({
      quote: prevState.quote,
      author: prevState.author,
    }));
  };
  console.log(myQuote);

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="quote">
          "{quotes.length ? quotes[randomNumberOfQuote].quote : null} "
        </h1>
        <h1>
          Author: {quotes.length ? quotes[randomNumberOfQuote].author : null}
        </h1>
      </div>

      <button disabled={!myQuote} onClick={showPrevQuote}>
        Previous quote
      </button>
      <button onClick={setNewQuote}>Get new quote</button>
    </div>
  );
};

export default ReactTask;
