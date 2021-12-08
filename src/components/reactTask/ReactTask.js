import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Navbar from "../Navbar";

const ReactTask = () => {
  const [quotes, setQuotes] = useState([]);
  const [initialQuote, setInitialQuote] = useState({ quote: "", author: "" });
  const [currentQuote, setCurrentQuote] = useState({ quote: "", author: "" });
  const [quoteList, setQuoteList] = useState([]);
  let idx = quoteList.length;

  const newQuote = () => {
    const randomNumberOfQuote = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomNumberOfQuote]);
    setQuoteList([...quoteList, currentQuote]);
    idx += 1;
  };

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
      )
      .then((res) => {
        setQuotes(res.data);
        setInitialQuote(res.data[Math.floor(Math.random() * res.data.length)]);
      });
  }, []);

  const showPrevQuote = () => {
    setQuoteList((names) => names.filter((_, i) => i !== names.length - 1));
    idx = quoteList.length - 1;
    setCurrentQuote({
      quote: quoteList[idx].quote,
      author: quoteList[idx].author,
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="quote">
          "{quoteList < initialQuote ? initialQuote.quote : currentQuote.quote}"
        </h1>
        <h1>Author: {initialQuote && initialQuote.author}</h1>
      </div>

      <button disabled={idx <= 0} onClick={showPrevQuote}>
        Previous quote
      </button>
      <button onClick={newQuote}>Get new quote</button>
    </div>
  );
};

export default ReactTask;
