import swingIconMobile from '../../Images/swingIconMobile.svg'
import footballIconMobile from '../../Images/footballIconMobile.svg'
import jumppadIconMobile from '../../Images/jumppadIconMobile.svg'
import swingIconMobile2 from '../../Images/swingIconMobile2.svg'
import footballIconMobile2 from '../../Images/footballIconMobile2.svg'
import jumppadIconMobile2 from '../../Images/jumppadIconMobile2.svg'
import React, {useState} from 'react';
//import { type } from '@testing-library/user-event/dist/type'



function Icons({filter, setFilter}) {
    
    /*Clickable feature of swing, football and jumppad icons*/
      const [sIcon, setsIcon] = useState(swingIconMobile);
      const changesIcon = ()=>{
        setFilter({...filter,type:"Playground"})
        if (sIcon.includes('Mobile2')){
          setsIcon(swingIconMobile)}
        else {setsIcon(swingIconMobile2)}
      }
    
      const [fIcon, setfIcon] = useState(footballIconMobile);
      const changefIcon = ()=>{
        setFilter({...filter,type:"Ballfield"})
        if (fIcon.includes('Mobile2')){
          setfIcon(footballIconMobile)}
        else {setfIcon(footballIconMobile2)}
      }
    
      const [jIcon, setjIcon] = useState(jumppadIconMobile);
      const changejIcon = ()=>{
        setFilter({...filter,type:"Jumpingpad"})
        if (jIcon.includes('Mobile2')){
          setjIcon(jumppadIconMobile)}
        else {setjIcon(jumppadIconMobile2)}
        }

        return (
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
        );
      }


      export default Icons;