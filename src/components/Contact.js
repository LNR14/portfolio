import React, { Component } from 'react'
import {Button,Form,Jumbotron } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import "./About.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)




export default class Contact extends Component {

  render(){

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_wzf6z3q', 'template_rd3iqim', e.target, 'user_zmXRHVBSw27EMUYuWIKhU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    } 
    
  return (

        <div className="contact">
          
        <a name="contact"></a>
        <div className="container">

        <Form onSubmit={sendEmail}>

          <h1>Contact</h1>
          <p className="contactP">
          Have a question or want to work together?
          </p>
        

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="name@example.com" name="email"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="John Doe" name="name"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Your message" name="message"/>
        </Form.Group>
        <Button variant="outline-light" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <div className="links">
        <p>
        <a href="https://www.linkedin.com/in/lakshminarayanareddy-padarthi/" >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="6x" />
        </a>
        <a href="https://github.com/LNR14" >
        <FontAwesomeIcon icon={["fab", "github"]} size="6x" />
        </a>
      </p>
      </div>
      </div>
  )
}
}

