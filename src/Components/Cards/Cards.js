import '../../App.css';
import './Cards.scss';
import '../Overlay/Expand.js'
import Overlay from '../Overlay/Overlay.js';
import React, { useState } from 'react'
import Modal from '../Modal';



  const Cards = ({ playground, setRoute}) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = (e) => {
        e.target.id==='overlay' && setOpen(false);
    };

    return (


      <div className='cardStyle'>

          <div className='container'>
            <div className='cards'>
              <div className='card' onClick={openModal}>
                <p>{playground.address}</p>
                <div className='cardImg'>
                    <img className='mapBig' src={playground.mapBig}></img>
                    <img className='imgURL' src={playground.photoURL}></img>
                </div>
              </div>
            </div>
          </div>
          
        {open && <Overlay isOpen={open} close={closeModal}>{<Modal data={playground} setRoute={setRoute} />}</Overlay>}
      </div>
    )  
  }


export default Cards;