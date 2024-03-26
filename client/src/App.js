import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import FirstPage from './Components/FirstPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Quiz App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/register">Signup</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <BrowserRouter>
      <Routes>
        <Route path='/register' exact Component={Register}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/firstPage' exact Component={FirstPage}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
