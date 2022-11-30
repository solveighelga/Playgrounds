import './App.css';
import './App.scss';
import swingIconMobile from './Images/swingIconMobile.svg'
import footballIconMobile from './Images/footballIconMobile.svg'
import jumppadIconMobile from './Images/jumppadIconMobile.svg'
import React, {useState} from 'react';
import Dropdown from './Components/Dropdown/Dropdownbtn.js'
import Cards from './Components/Cards/Cards.js'

function App() {
  return (
    <div className="App">
      <div className='Dropdown'>
        <Dropdown />
      </div>
      <div className='Icons'>
        <div className='swing'>
          <img src={swingIconMobile}></img>
        </div>
        <div className='football'>
          <img src={footballIconMobile}></img>
        </div>
        <div className='jumppad'>
          <img src={jumppadIconMobile}></img>
        </div>
    </div>
      <div className='Cards'>
        <Cards />
    </div>
    </div>
  );
}

export default App;
