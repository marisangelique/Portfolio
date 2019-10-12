import React from 'react';
import '../App.css';
import '../index.css'
import Particles from "react-particles-js";
import { Link } from 'react-router-dom';



//Update this into your face params
const particleOpt ={
    "particles": {
      "number": {
          "value": 150
      },
      "size": {
          "value": 2
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
    
  }

function About (){
    return(
        <div className="App">
            <h1>Maris-Angelique</h1>
            <h3>Full Stack Web Developer</h3>


            <div class="card">
                <div class="card-body">

                    <h5 class="card-title">Maris-Angelique</h5>

                    <h6 class="card-subtitle mb-2 text-muted">21 yrs old</h6>

                    <p class="card-text">As an artist, my passion for creativity runs deep. I love turning ideas into reality which is what you will see throughout my website.</p>

                    <p class="card-text">I grasped most of my knowledge in full stack web development during my months at UC Berkeley's Coding Bootcamp. I am amazed everyday of what I can do in front and back end web development. Not only has this program taught me another skill but it has also become another form of creative release.</p>

                    <p class="card-text">I am always looking for opportunities to expand my knowledge and experience in web development. If you would like to work with me, please do not be afraid to reach out and contact me!</p>
                    
                    <Link to="/">

                        <button type="button" class="btn btn-light about back"> 
                            Back
                        </button>

                    </Link>

                </div>
            </div>
            
            <div className="particles">
                <Particles  
                    params= {particleOpt} 
                />
            </div>  

        </div>

  
    )
}
export default About;