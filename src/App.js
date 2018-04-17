import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/dashboard'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Companies from './components/companies/companies'
import LandRecords from './components/landrecords/landrecords'
import TitleRegistration from './components/titleregistration/titleregistration'
import Client from './components/client/client'
import Purchase from './components/purchase/purchase'
import Settings from './components/settings/settings'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/signup" component={ Signup } />
          <Route exact path="/companies" component={ Companies } />
          <Route exact path="/landrecords" component={ LandRecords } />
          <Route exact path="/registration" component={ TitleRegistration } />
          <Route exact path="/client" component={ Client } />
          <Route exact path="/purchases" component={ Purchase } />
          <Route exact path="/settings" component={ Settings } />
        </Switch>
      </div>
    );
  }
}

export default App;
