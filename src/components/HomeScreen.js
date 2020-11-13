import React from 'react'; 
import '../App.css'; 
import Particles  from 'react-particles-js'; 
import img1 from '../images/logo192.png'
import img2 from '../images/nodejs.png'
import img3 from '../images/mongodb.jpg'
import img4 from '../images/JS.png'
import img5 from '../images/python.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function HomeScreen() { 
  
  return ( 
    <div className="container1"> 
    <a name="home"></a>
      <Particles className="particles" 
        params={{
          "particles": {
              "number": {
                  "value": 10,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "speed": 1,
                  "out_mode": "out"
              },
              "shape": {
                  "type": [
                      "image",
                  ],
                  "image": [
                      {
                          "src":  img1 ,  
                          "height": 20,
                          "width": 20
                      },
                      {
                          "src": img2,
                          "height": 20,
                          "width": 20
                      },
                      {
                          "src": img3,
                          "height": 20,
                          "width": 20
                      },
                      {
                        "src": img4,
                        "height": 20,
                        "width": 20
                    },
                    {
                        "src": img5,
                        "height": 20,
                        "width": 20
                    }
                  ]
              },
              "color": {
                  "value": "#CCC"
              },
              "size": {
                  "value": 30,
                  "random": false,
                  "anim": {
                      "enable": true,
                      "speed": 4,
                      "size_min": 10,
                      "sync": false
                  }
              }
          },
          "retina_detect": false
      }}
      />
        <div class="centered">
            <p>Hello, I am <span>Lakshminarayana Reddy Padarthi </span></p>
            <p>I am a full stack developer</p>
        </div> 
    </div> 
  ); 
} 
   
export default HomeScreen; 