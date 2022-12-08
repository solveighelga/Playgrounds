import React from 'react'
import './Modal.css'
import Map from './Maps/Map'


const Modal = ({ data, close}) => {


  return (
    <div className='modal'>
      <h1 className='address'>{data.address}</h1>  
      <div className='thePhotos'>    
        <img className='photo' src={data.photoURL}></img>
      </div>
      <h2 className='equipment'>Equipment</h2>
      <div className='icons10'>
        <img className='regularswing' src={data.regularSwing}></img>
        <img className='slide' src={data.slide}></img>
        <img className='rocker' src={data.springRocker}></img>
      </div>

      <div className='themap'>    
        <Map inCard={true} coord={{lat:data.lat, lng:data.lng}}/>    
      </div>
    </div>
  )
}


export default Modal
