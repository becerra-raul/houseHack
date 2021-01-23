import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { SellerLeadPage } from "./seller-lead/SellerLeadPage";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./style/theme";
import "./App.css";
import { househackMarketingSiteURL } from "./common/Constants";

export default function App() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      // window.location.href = "/enter-address-widget.html";
      window.location.href = househackMarketingSiteURL;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/seller-lead/:id/:step?">
            <SellerLeadPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
