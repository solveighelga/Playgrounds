import '../../App.css';
import './Cards.scss';

  const Card = ({ playground }) => {
    return (
      <div>
        <section>
          <div className='container'>
            <div className='cards'>
              <div className='card'>
                <p>{playground.address}</p>
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
  
export default Card;
