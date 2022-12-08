import React,  {useEffect, useState} from 'react';
import './home.scss';
import './Intro/splash';
import kid from './kid.png';
import desktoplogo from './desktoplogo.png';
import mobile from './mobile1.png';
import arrow from './down.png';
import Splash from './Intro/splash';


const Home = function() {
    const [open, setOpen] = useState(false); // By default the drop down is not open (dropdown open = false)
    /*const [rotate, setRotate] = useState(false);*/

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
        
 
        <Splash>

        </Splash>

        </div> 
        <div className='menu-container1'>
            <div className='menu-trigger1' onClick={() =>{setOpen(!open)/*, setRotate(!rotate)*/}}> Select City
        
                <img /*className={`imgrotate ${rotate? 'active' : 'inactive'}`}*/

                    alt='Arrow' 
                    id="down"
                    src={arrow}
                />
            </div>
            <div className={`dropdown-menu1 ${open? 'active' : 'inactive'}`}>
                <ul>
                    <li><DropdownItem1 text = {'Reykjavík'} /></li>
                </ul>
            </div>
        </div>
        </div>
    );
}
      

    function DropdownItem1(props){
        return(
        <li className='dropdownItem1'>
            <a>{props.text}</a>
        </li>
        );
    }

export default Home;
      
