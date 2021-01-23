import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";

Sentry.init({
  dsn: "https://ab883ba69c724b95867d7d894632ac76@o491019.ingest.sentry.io/5599506",
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const firebaseConfig = {
  apiKey: "AIzaSyCoE1kvjPg2rblgGoFlO2L0WhOVAtTaP0o",
  authDomain: "wedgefinder.firebaseapp.com",
  databaseURL: "https://wedgefinder.firebaseio.com",
  projectId: "wedgefinder",
  storageBucket: "wedgefinder.appspot.com",
  messagingSenderId: "772292712582",
  appId: "1:772292712582:web:4187e0758c21e04393d907",
  measurementId: "G-5W0ST9G70Q",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
