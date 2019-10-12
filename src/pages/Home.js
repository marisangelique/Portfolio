import React from 'react';
import '../App.css';
import Particles from "react-particles-js";
import { Link } from 'react-router-dom';


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

function Home() {
  return (
    <div className="App">
      <h1>Maris-Angelique</h1>
      <h3>Full Stack Web Developer</h3>
    
        <Link to="/select"> 

            <button type="button" class="btn btn-light enter">
                Enter
            </button>

        </Link>


        <Link to="/about">

            <button type="button" class="btn btn-light about"> 
                About
            </button>

        </Link>

      <div className="particles">
        <Particles  
            params= {particleOpt} 
        />
      </div>  
    </div>

  
  );
}

export default Home;
