import React from "react";
import { connect } from "react-redux";
import { history } from "./_helpers/history";
import { Router, Switch } from 'react-router-dom';
import Index from './Items/Components/index';
import List from "./Items/Components/list";
import Detail from "./Items/Components/detail";
import Header from "./Header/Components/header";
import Breadcrumb from "./Breadcrumb/Components/breadcrumb";

class RouterApp extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Header />
        <Breadcrumb />
        <Switch> 
          <Index exact path="/"/>
          <List exact path="/items"/>
          <Detail exact path="/items/:id"/>
        </Switch>
      </Router>
    )
  }
}

export default connect()(RouterApp);