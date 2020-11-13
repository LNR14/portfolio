import React, { Component } from 'react'
import {Row,Container,Col } from 'react-bootstrap'
import profiledp from "../images/profilepic.png"
import "./About.css"

export default class testing extends Component {

  render(){
    
  return (
    <div>
        
      <a name="about"></a>
    <Container>
        <Row>
            <Col sm={12} md={6}>
            <div id="dp">
                <img src= {profiledp} alt ="profile picture " />
            </div>
            <div id="dp">
                I am an experienced and qualifed full stack developer.Currently looking for a job in full stack development in the united States. 
                I have a serious passion in coding and observe the latest trends in web development.
            </div>
            </Col>
            <Col sm={12} md={6}> 
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>HTML</Col>
                    <Col className="skillPercent"> </Col>
                    <Col className="skillPercentNumber" xs={1}>90%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>CSS</Col>
                    <Col className="skillPercent"></Col>
                    <Col className="skillPercentNumber" xs={1}>90%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>Javascript</Col>
                    <Col id="skillPercent85"></Col>
                    <Col className="skillPercentNumber" xs={1}>85%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>Python</Col>
                    <Col id="skillPercent85"></Col>
                    <Col className="skillPercentNumber" xs={1}>85%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>ReactJS</Col>
                    <Col id="skillPercent85"></Col>
                    <Col className="skillPercentNumber" xs={1}>85%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>ExpressJS</Col>
                    <Col id="skillPercent75"></Col>
                    <Col className="skillPercentNumber" xs={1}>75%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>NodeJS</Col>
                    <Col id="skillPercent80"></Col>
                    <Col className="skillPercentNumber" xs={1}>80%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>Django</Col>
                    <Col id="skillPercent70"></Col>
                    <Col className="skillPercentNumber" xs={1}>70%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>Flask</Col>
                    <Col id="skillPercent60"></Col>
                    <Col className="skillPercentNumber" xs={1}>60%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>MongoDB</Col>
                    <Col id="skillPercent70" ></Col>
                    <Col className="skillPercentNumber" xs={1}>70%</Col>
                </Row>
                <Row className="skillList">
                    <Col className= "skillName " xs={3}>SQL</Col>
                    <Col id="skillPercent75"></Col>
                    <Col className="skillPercentNumber" xs={1}>75%</Col>
                </Row>
            </Col>
        </Row>
    </Container>

    </div>
  )
}
}