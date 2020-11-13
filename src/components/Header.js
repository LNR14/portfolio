import React,{Component} from 'react';
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import {Button} from "react-bootstrap"
import resume from '../resume/resume.pdf'
import './About.css'

export default class header extends Component {
    render(){
  return (
    <div className="App">
      <Container>
    <Navbar  fixed="top"  bg="light" expand="lg">
    <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfoloio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href={resume} download>Resume</Nav.Link>

            </Nav>
        </Navbar.Collapse>
        </div>
    </Navbar>
    </Container>
    </div>
  );
}
}

