import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Todolist from './components/Layouts/Todolist';
import Create from './components/Layouts/Create';
import Edite from './components/Layouts/Edite';
import Navabar from './components/Layouts/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
            <Navabar/>
              <Switch>
                <Route exact path="/" component={Todolist}></Route>
                <Route path="/create" component={Create}></Route>
                <Route path="/edite/:id" component={Edite}></Route>
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
