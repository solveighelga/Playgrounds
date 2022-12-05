import React from 'react'
import './Modal.css'

const Modal = ({ data, close}) => {
  return (
    <div className='modal'>
      <h1 className='address'>{data.address}</h1>      
      <img className='photo' src={data.photoURL}></img>
      <div className='icons10'>
        <img className='regularswing' src={data.regularSwing}></img>
        <img className='slide' src={data.slide}></img>
        <img className='rocker' src={data.springRocker}></img>
      </div>
    </div>
  )
}

export default Modal
