import '../App.css';
import '../App.scss';
import logo from '../Images/PLAYGROUNDS.svg'
import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown/Dropdownbtn.js'
import Api from './Cards/api';
import Icons from './Icons/icons'


function Main({setRoute}) {
// These states are used as props in the api and dropdown components here below
  const [playgrounds, setPlaygrounds] = useState([]); // rendering the site we need to call on playgrounds because it is coming from another site
  const [filter, setFilter] = useState({}); // always when the filter on dropdown and button to change the filter
  const [filterPlaygrounds, setFilterPlaygrounds] = useState([]); // the array we change depending on the filter
  
  console.log(playgrounds);
  console.log(filter);
  console.log(filterPlaygrounds);
 
// filter through playgrounds
useEffect (()=> {
  const postalSelect = playgrounds.filter(playground => {
    const postal=filter.postal===undefined || playground.postal == filter.postal //undefined because we want all the results = true OR playgroun (101) is the same as the filter (101)
    const type=filter.type===undefined || playground.type == filter.type // same for type
    return (postal && type) // if return true we want to unclude postal and type of playground 
  });
  setFilterPlaygrounds(postalSelect) 
//run useEffect everytime fitler changes and we choose a different filter to open
},[filter]
)

  return (
    <div className='App'>
      <div className='nav-bar'>
        <img className='logo' src={logo} alt='Playgrounds logo'></img>
        <div className='Dropdown'>
          {/* this is referencing the compnent in dropdown.js */}
          {/* orange: PROPS , green/white: VALUE which props gets */}
          <Dropdown setFilter={setFilter} filter={filter}/> 
      </div>
      </div>

      <Icons playgrounds={filterPlaygrounds} setFilter={setFilter} filter={filter}/>

      <div className='cardStyle'>
        <div className='Card'>
          {/* this is referencing the component in api.js (props used in api.js) */}
          <Api setRoute={setRoute} playgrounds={filterPlaygrounds} setPlaygrounds={setPlaygrounds} setFilterPlaygrounds={setFilterPlaygrounds} hasFilter={playgrounds.length!=filterPlaygrounds.length}/>
        </div>
      </div>
    </div>
  );
}

/*{window.screen.width>768?(
            <img src={logo} alt='Playgrounds logo'></img>
          ):(
            <img src={logo2} alt='Playgrounds logo'></img>
            )}*/

export default Main;
