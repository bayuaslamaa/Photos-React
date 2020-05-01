import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import Photos from './containers/Photos'

import { Nav, Navbar } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>MEPHOTOS</Navbar.Brand>
            <Nav.Item className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className="mr-auto">
              <Link className="nav-link" to="/photos">Photos</Link>
            </Nav.Item>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <h1>Welcome Home</h1>
            </Route>
            <Route path="/photos">
              <h1>Photos</h1>
              <Photos></Photos>
            </Route>
          </Switch></div>
      </Router>
    </div>
  );
}

export default App;
