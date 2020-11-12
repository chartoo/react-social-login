import React, { Component } from 'react';
import LinkedInPopUp from "./LinkedInPopUp";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LinkedInPage from './LinkedInPage';

export default class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Route exact path="/linkedin" component={LinkedInPopUp} />
          <Route path="/" component={LinkedInPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}