import React from 'react';
import './home.scss';
import './Intro/splash';
import kid from './kid.png';
import desktoplogo from './desktoplogo.png';
import mobile from './mobile1.png';
import arrow from './down.png';
import Splash from './Intro/splash';

const Home = function(setRoute) {
    
    

    return (
    <div id="main">
    <div id="container">
        <img
            alt='kid'
            id="image1"  
            src={kid}
        />
      
        <img  
            alt='desktop'
            id="image3"
            src={desktoplogo}
         
        />
      
    </div>
    
    <div id="intro">
        <img  
            alt='mobile'
            id="image2"
            src={mobile}
        />
        {/*
        <img
            alt='Logo' 
            id="logo"
            src={logo}
        />    
    */}
        <Splash>

        </Splash>

        <button class="start">       
            Select City
            <img
                alt='Arrow' 
                id="down"
                src={arrow}
            />
        </button> 
      
    </div>
  </div>
    );
}
export default Home;