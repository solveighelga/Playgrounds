import '../../App.css';
import './Cards.scss';

  const Card = ({ playground }) => {
    return (


      <div className='cardStyle'>

          <div className='container'>
            <div className='cards'>
              <div className='card'>
                <p>{playground.address}</p>
                <div className='cardImg'>
                    <img className='mapURL' src={playground.mapURL}></img>
                    <img className='imgURL' src={playground.photoURL}></img>
                </div>
              </div>
            </div>
          </div>

      </div>
    )  
  }
  
export default Card;
