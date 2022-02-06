import React from "react";
import { MixpanelProvider } from "../contexts/mixpanel.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MixpanelProvider>
      <Component {...pageProps} />
    </MixpanelProvider>
  );
}

export default MyApp;
