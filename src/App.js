import React, { useState, useEffect } from "react";

import { Container, Snackbar } from "@mui/material";

import Header from "./components/Header";
import SendTweet from "./components/SendTweet";
import ListTweets from "./components/ListTweets";

import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    message: "",
  });

  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    const allTweetsArray = JSON.parse(localStorage.getItem(TWEETS_STORAGE));
    if (allTweetsArray) {
      setAllTweets(allTweetsArray);
    }
  }, []);

  return (
    <Container
      className="tweets-simulator"
      maxWidth={false}
    >
      <Header />
      <SendTweet
        setToastProps={setToastProps}
        allTweets={allTweets}
      />
      <ListTweets allTweets={allTweets} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="toast-message">{toastProps.message}</span>}
      />
    </Container>
  );
}

export default App;
