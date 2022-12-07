import '../../App.css';
import './Cards.scss';
import '../Overlay/Expand.js'
import Overlay from '../Overlay/Overlay.js';
import React, { useState } from 'react'
import Modal from '../Modal';



  const Cards = ({ playground}) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (


      <div className='cardStyle'>

          <div className='container'>
            <div className='cards'>
              <div className='card' onClick={openModal}>
                <p>{playground.address}</p>
                <div className='cardImg'>
                    <img className='mapURL' src={playground.mapURL}></img>
                    <img className='imgURL' src={playground.photoURL}></img>
                </div>
              </div>
            </div>
          </div>
          
        {open && <Overlay isOpen={open} close={closeModal}>{<Modal data={playground} />}</Overlay>}
      </div>
    )  
  }


export default Cards;