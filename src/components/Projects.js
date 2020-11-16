import React, { Component } from 'react'
import {Col,Row,Container,Button} from 'react-bootstrap'
import "./About.css"
import pro1 from "../images/react-covid-tracker.PNG"
import pro2 from "../images/personal-blog.png"
import pro3 from "../images/sports_app.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export default class testing extends Component {


    constructor(props){
      super(props)
      this.state ={
        isShown1:false,
        isShown2:false,
        isShown3:false,
      }
      
    }
  render(){


  return (
    <div className="projects">
      
      <a name="portfolio"></a>
        <h1>Projects </h1>
        <div className="spacing"></div>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4} onMouseEnter={()=> this.setState({isShown1:true})} onMouseLeave={()=> this.setState({isShown1:false})}>
                {!this.state.isShown1 ? (
                  <img src ={pro1} className="projectPic" />
                ):(
                    <div className="hover-over projectPic">
                      <p>
                        This is a covid live-tracker using React and netlify to deploy the site.
                      </p>
                      <Button variant="light" href="https://github.com/LNR14/react-covid-tracker/tree/master"><FontAwesomeIcon icon={["fab", "github"]} /> </Button>
                      <Button variant="light" href="https://covid-19-tracker-b62ae.web.app/">Live Demo</Button>
                    </div>
                  )
                  }
                </Col>
                <Col sm={12} md={6} lg={4} onMouseEnter={()=> this.setState({isShown2:true})} onMouseLeave={()=> this.setState({isShown2:false})}>
                {!this.state.isShown2 ? (
                  <img src ={pro2} className="projectPic" />
                ):(
                    <div className="hover-over projectPic">
                      <p>
                        This is a personal blog using react and firebase.
                        I used firebase for authentication and react-quilljs for editing and updating the content.
                      </p>
                      <Button variant="light" href="https://github.com/LNR14/personal-blog"><FontAwesomeIcon icon={["fab", "github"]} /></Button>
                      <Button variant="light" href="https://lakshminarayanareddypadarthi-blog.netlify.app/">Live Demo</Button>
                    </div>
                  )
                }
                  </Col>
                <Col sm={12} md={6} lg={4}  onMouseEnter={()=> this.setState({isShown3:true})} onMouseLeave={()=> this.setState({isShown3:false})}>
                {!this.state.isShown3 ? (
                  <img src ={pro3} className="projectPic projectPic" />
                ):(
                    <div className="hover-over">
                      <p>
                        This is a sports App using MERN stack. The app is authenticated using JWT token. This website is still underway for live deployment.
                      </p>
                      <Button variant="light" href="https://github.com/LNR14/sports_app"><FontAwesomeIcon icon={["fab", "github"]} /></Button>
                      <Button variant="light" href="#home">Not yet deployed </Button>
                    </div>
                  )
                }
                </Col>
            </Row>
        </Container>
    </div>
  )
}
}