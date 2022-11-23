import React, {useEffect, useState, useRef} from 'react';
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';
import './App.css';
import { motion } from "framer-motion";



//function App() {
  //const t = fetch('https://lukrgatt.reykjavik.is/server/rest/services/OpinGognThjonusta/Bunadur_a_stofnanalodum/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
  //console.log(t);
//}

function App() {

  const [open, setOpen] = useState(false); // By default the drop down is not open (dropdown open = false)
  
  //Start of closing dropdown menu when clicking outside of the menu
  let menuRef = useRef(); 

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }    
    };

    document.addEventListener('mousedown', handler);
  
    return() =>{
      document.removeEventListener('mousedown', handler);
    }
  });
  //end of closing dropdown by clicking outside the menu

  return (
    <div className='App'>
      <div className='menu-container' ref={menuRef}> 
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}> 
          Search Postal Code in Reykjavik
        </div>
      
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <ul>
            <DropdownItem text = {'101'} />
            <DropdownItem text = {'105'} />
            <DropdownItem text = {'108'} />
            <DropdownItem text = {'109'} />
            <DropdownItem text = {'112'} />
          </ul>
          
        </div> 
        
        </div>
      </div>
    );
}

function DropdownItem(props){
  return(
    <li className='dropdownItem'>
      <a>{props.text}</a>
    </li>
  );
}

export default App;
