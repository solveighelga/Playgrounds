import '../../App.css';
import './Cards.scss';
import '../Overlay/Overlay.js'
import '../Overlay/Expand.js'


  const Cards = ({ playground, open }) => {
    return (
      <div>
        <section>
          <div className='container'>
            <div className='cards'>
              <div className='card' onClick={open}>
                <p>{playground.name}</p>
                <p>{playground.address} {playground.postal} {playground.city}</p>
                <div className='cardImg'>
                  <img className='imgURL' src={playground.photoURL}></img>
                  <div className='map'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )  
  }

  

export default Cards;
