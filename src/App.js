import './App.css';
import './App.scss';
import logo from './Images/PLAYGROUNDS.svg'
import logo2 from './Images/PLAY.svg'
import React, {useState, useEffect} from 'react';
import Dropdown from './Components/Dropdown/Dropdownbtn.js'
import supabase from './supabaseClient';
import Api from './Components/Cards/api';
import Icons from './Components/Icons/icons'

function App() {
// These states are used as props in the api and dropdown components here below
  const [playgrounds, setPlaygrounds] = useState([]); 
  const [filter, setFilter] = useState({}); 
  const [filterPlaygrounds, setFilterPlaygrounds] = useState([]); 
  console.log(filterPlaygrounds);
  console.log(filter);


console.log (window.screen.width)

useEffect (()=> {
  const postalSelect = playgrounds.filter(playground => {
    const postal=filter.postal===undefined || playground.postal == filter.postal
    const type=filter.type===undefined || playground.type == filter.type
    return (postal && type)
  });
  setFilterPlaygrounds(postalSelect)
//run  useEffect everytime fitler changes
},[filter]
)

  return (
    <div className='App'>
      <div className='nav-bar'>
        <div className='logo'>
          {window.screen.width>768?(
            <img src={logo} alt='Playgrounds logo'></img>
          ):(
            <img src={logo2} alt='Playgrounds logo'></img>
          )}
          
        </div>
        <div className='Dropdown'>
          {/* this is referencing the compnent in dropdown.js */}
          <Dropdown playgrounds={filterPlaygrounds} setFilter={setFilter} filter={filter}/>
      </div>
      </div>

      <Icons playgrounds={filterPlaygrounds} setFilter={setFilter} filter={filter}/>

      <div className='cardStyle'>
        <div className='Card'>
          {/* this is referencing the component in api.js (props used in api.js) */}
          <Api playgrounds={filterPlaygrounds} setPlaygrounds={setPlaygrounds} setFilterPlaygrounds={setFilterPlaygrounds} hasFilter={playgrounds.length!=filterPlaygrounds.length}/>
        </div>
      </div>
    </div>
  );
}



export default App;
