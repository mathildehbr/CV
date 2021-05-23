import './App.css';
import React, { Component } from 'react';
import Accueil from './Home/Accueil';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="light-beige">
        <Router>
          <Switch>
            <Route path="/" component={Accueil}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
