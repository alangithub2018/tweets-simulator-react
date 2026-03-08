import React from "react";

import { Grid } from "@mui/material";
import Tweet from "../Tweet";

import "./ListTweets.scss";

export default function ListTweets(props) {
  const { allTweets, deleteTweet } = props;

  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2 className="list-tweets__title">No hay Tweets</h2>
      </div>
    );
  }

  return (
    <Grid
      className="list-tweets"
      container
      spacing={3}
    >
      {allTweets.map((tweet, index) => (
        <Grid
          key={index}
          item
          xs={4}
        >
          <Tweet
            tweet={tweet}
            index={index}
            deleteTweet={deleteTweet}
          />
        </Grid>
      ))}
    </Grid>
  );
}
