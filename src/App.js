import React, { useState } from "react";

import { Container, Snackbar } from "@mui/material";

import Header from "./components/Header";
import SendTweet from "./components/SendTweet";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    message: "",
  });

  return (
    <Container
      className="tweets-simulator"
      maxWidth={false}
    >
      <Header />
      <SendTweet setToastProps={setToastProps} />
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
