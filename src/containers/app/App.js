import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import MainNavbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Home from "../home";
import Apply from "../apply/Apply";
import Sponsor from "../sponsor/Sponsor";
import Contact from "../contact/Contact";
import Details from "../details";
import FAQ from "../faq";
import PrivacyPolcy from "../policies/PrivacyPolicy";
import TermsOfService from "../policies/TermsOfService";
import NotFoundPage from "../404";

function App() {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/sponsor" component={Sponsor} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/privacy" component={PrivacyPolcy} />
          <Route exact path="/terms" component={TermsOfService} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
