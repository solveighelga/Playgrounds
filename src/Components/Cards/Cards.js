import '../../App.css';
import './Cards.scss';
/*import '../Overlay';
import { useState } from 'react'

function Cards() {
  const [openOverlay, setOpenOverlay] = useState({});*/
  const Cards = ({ playground }) => {
    return (
      <div>
        <section>
          <div className='container'>
            <div className='cards'>
                <p>{playground.name}</p>
                <p>{playground.address} {playground.postal} {playground.city}</p>
                <div className='cardImg'>
                  <img className='imgURL' src={playground.photoURL}></img>
                  <div className='map'></div>
                </div>
      
            </div>
          </div>
        </section>
      </div>
    )  
  }

  

export default Cards;
