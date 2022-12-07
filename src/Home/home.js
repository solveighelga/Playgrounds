import React, {useState, useEffect} from 'react';
import './home.scss';
import kid from './kid.png';
import desktoplogo from './desktoplogo.png';
import mobile from './mobile1.png';
import logo from './logo.png';
import arrow from './down.png';
//import { propsForLink } from 'framer/build/modules/Link';
//import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import '../Components/Dropdown/Dropdownbtn.css'

const Home = function() {
    
    const [open, setOpen] = useState(false); // By default the drop down is not open (dropdown open = false)
    
    //Start of closing dropdown menu when clicking outside of the menu
    //let menuRef = useRef();

    // useEffect(() => {
    //     let handler = (e)=>{
    //       if(!menuRef.current.contains(e.target)){
    //         setOpen(false);
    //       }    
    //     };
    
    //     document.addEventListener('mousedown', handler);
      
    //     return() =>{
    //       document.removeEventListener('mousedown', handler);
    //     }
    //   });
    //   //end of closing dropdown by clicking outside the menu
    
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
        <img
            alt='Logo' 
            id="logo"
            src={logo}
        />    
      
        <div className='menu-container' >
            <div className='menu-trigger' onClick={() =>{setOpen(!open)}}>
                Select city
            </div>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <ul>
                <li text = {'Reykjavík'} />
            </ul>
        </div>
    </div>
    </div>
    );
}    



export default Home;