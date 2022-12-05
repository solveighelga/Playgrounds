import React, {useEffect, useState, useRef} from 'react';
/*import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns';*/
import './Dropdownbtn.css'


//function App() {
  //const t = fetch('https://lukrgatt.reykjavik.is/server/rest/services/OpinGognThjonusta/Bunadur_a_stofnanalodum/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
  //console.log(t);
//}

// The dropdown component
function Dropdown({playgrounds, setFilter, filter}) {

  const [open, setOpen] = useState(false); // By default the drop down is not open (dropdown open = false)
  const doFilter = (postal)=>{
    setFilter({...filter,postal})
    setOpen(!open);
    console.log(postal);
  }

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
      <div>
        <div className='menu-container' ref={menuRef}> 
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}> 
          {/* The first city in our API (Reykjavík) will appear on the drop down */}
            {playgrounds.length? playgrounds[0].city: null}
          </div>
        
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <ul>
              {/* added the function to the onClick to filter to filter and find 101 and 104 in our API */}
              <li onClick={()=>{doFilter('101')}}><DropdownItem text = {'101 - Downtown'}/></li> 
              <li onClick={()=>{doFilter('104')}}><DropdownItem text = {'104'}/></li>
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

export default Dropdown;
