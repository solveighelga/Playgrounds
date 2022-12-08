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
        <img className='infantSwing' src={data.infantSwing}></img>
        <img className='basketSwing' src={data.basketSwing}></img>
        <img className='tireSwing' src={data.tireSwing}></img>
        <img className='playhouse' src={data.playhouse}></img>
        <img className='playhousePole' src={data.playhousePole}></img>
        <img className='CastleSlide' src={data.CastleSlide}></img>
        <img className='castleMonkeyBars' src={data.castleMonkeyBars}></img>
        <img className='climbingNet' src={data.climbingNet}></img>
        <img className='seasaw' src={data.seasaw}></img>
        <img className='carousel' src={data.carousel}></img>
        <img className='trampoline' src={data.trampoline}></img>
        <img className='bench' src={data.bench}></img>
      </div>

      <div className='themap'>    
        <Map inCard={true} coord={{lat:data.lat, lng:data.lng}}/>    
      </div>
    </div>
  )
}


export default Modal
