import './App.css';
import './App.scss';
import swingIconMobile from './Images/swingIconMobile.svg'
import footballIconMobile from './Images/footballIconMobile.svg'
import jumppadIconMobile from './Images/jumppadIconMobile.svg'
import swingIconMobile2 from './Images/swingIconMobile2.svg'
import footballIconMobile2 from './Images/footballIconMobile2.svg'
import jumppadIconMobile2 from './Images/jumppadIconMobile2.svg'
import logo from './Images/PLAYGROUNDS.svg'
import logo2 from './Images/PLAY.svg'
import React, {useState, useEffect} from 'react';
import Dropdown from './Components/Dropdown/Dropdownbtn.js'
import supabase from './supabaseClient';
import Api from './Components/Cards/api';
import Overlay from './Components/Overlay/Overlay.js'
import Expand from './Components/Overlay/Expand.js';

function App() {
// These states are used as props in the api and dropdown components here below
  const [playgrounds, setPlaygrounds] = useState([]); 
  const [filterPlaygrounds, setFilterPlaygrounds] = useState([]); 
  console.log(filterPlaygrounds);
  console.log(playgrounds);

/*Clickable feature of swing, football and jumppad icons*/
  const [sIcon, setsIcon] = useState(swingIconMobile);
  const changesIcon = ()=>{
    if (sIcon.includes('Mobile2')){
      setsIcon(swingIconMobile)}
    else {setsIcon(swingIconMobile2)}
  }

  const [fIcon, setfIcon] = useState(footballIconMobile);
  const changefIcon = ()=>{
    if (fIcon.includes('Mobile2')){
      setfIcon(footballIconMobile)}
    else {setfIcon(footballIconMobile2)}
  }

  const [jIcon, setjIcon] = useState(jumppadIconMobile);
  const changejIcon = ()=>{
    if (jIcon.includes('Mobile2')){
      setjIcon(jumppadIconMobile)}
    else {setjIcon(jumppadIconMobile2)}
    }

  return (
    <div className='App'>
      <div className='nav-bar'>
        <img className='logo' src={logo} alt='Playgrounds logo'></img>
        <div className='Dropdown'>
          {/* this is referencing the compnent in dropdown.js */}
          <Dropdown playgrounds={playgrounds} setFilterPlaygrounds={setFilterPlaygrounds} />
      </div>
      </div>
      <div className='Icons'>
        <div className='grow'>
          <div className='swing'>
            <img onClick={changesIcon} src={sIcon}></img>
          </div>
          <div className='football'>
            <img onClick={changefIcon} src={fIcon}></img>
          </div>
          <div className='jumppad'>
            <img onClick={changejIcon} src={jIcon}></img>
          </div>
        </div>
      </div>
      <div className='Card'>
        {/* this is referencing the compnent in api.js (props used in api.js) */}
        <Api playgrounds={filterPlaygrounds} setPlaygrounds={setPlaygrounds} setFilterPlaygrounds={setFilterPlaygrounds} hasFilter={playgrounds.length!=filterPlaygrounds.length}/>
      </div>
    </div>
  );
}

/*{window.screen.width>768?(
            <img src={logo} alt='Playgrounds logo'></img>
          ):(
            <img src={logo2} alt='Playgrounds logo'></img>
            )}*/

export default App;
