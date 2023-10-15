import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Data from "./Components/Data.js"
import Home from "./Components/Home.js"
import Update from "./Components/Delete.js"

export default function App() {
  return (
    // Your entire App.js is the router.
    <Router>
      {/* This is your Nav element, that users can see. */}
      <div>
        <Navbar className="justify-content-end" bg='dark' data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="#home">Navigation Bar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Item>
              <Nav.Link>
              <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Link to="/data">Data</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Link to="/delete">Delete</Link>
              </Nav.Link>
            </Nav.Item>
            </Nav>
            </Container>
        </Navbar>

        {/* This is the logic that switches each path.
          1. Give your Route component a path attribute so users know where they are.
              This is linked directly with "to attribute" on your nav above.
          2. Inside that Route component, render the component you want users
              to see when they click on that route.
          <Route path="/">
            <Component/>
          </Route>  */}

        <Switch>
          <Route path="/delete">
            <Update />
          </Route>


          <Route path="/data">
            <Data />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
