import '../../App.css';
import './Cards.scss';
import React, {useState} from 'react';




function App() {
  const [cards] = useState([
    {
      title: 'card-1',
      text: `Some silly text here`
    },
    {
      title: 'card-2',
      text: `Some silly text here`
    },
    {
      title: 'card-3',
      text: `Some silly text here`
    },
    {
      title: 'card-4',
      text: `Some silly text here`
    },
    {
      title: 'card-5',
      text: `Some silly text here`
    },
    {
      title: 'card-6',
      text: `Some silly text here`
    },
  ])
  return (
    <div>
    <section>
      <div className='container'>
        <div className='cards'>
          {cards.map((card, i) =>(
          <div key={i} className='card'>
            <h3>{ card.title }</h3>
            <p>{card.text}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}



/*<svg width="60" height="59" viewBox="0 0 60 59" fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <rect x="0.769141" y="0.4" width="57.8669" height="57.8669" rx="19.6" fill="#B0DCEB" stroke="#595F4B" stroke-width="0.8"/>
      <path d="M23.1241 35.8152H37.8218L36.2816 37.3591H21.5839L23.1241 35.8152Z" fill="#F6A43F"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0655 35.6854H38.1393L36.3402 37.4888H21.2664L23.0655 35.6854ZM23.1828 35.9449L21.9014 37.2293H36.2229L37.5043 35.9449H23.1828Z" fill="black"/>
      <path d="M36.198 38.4618H21.5839V37.382H36.198V38.4618Z" fill="#F6A43F"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5838 37.2524H36.3344V38.5917H21.4474V37.3592H21.5838V37.2524ZM21.7203 37.5119V38.3323H36.0615V37.5119H21.7203Z" fill="black"/>
      <path d="M37.8218 37.0137V35.8152L36.198 37.2634V38.4619L37.8218 37.0137Z" fill="#F6A43F"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.9582 35.5156V37.0699L36.0615 38.7615V37.2072L37.9582 35.5156ZM36.3344 37.3196V38.1623L37.6853 36.9575V36.1148L36.3344 37.3196Z" fill="black"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9035 36.4769L23.9035 8.9071L24.4493 8.9071L24.4493 36.4769L23.9035 36.4769Z" fill="#ED5939"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0382 36.4769L35.0382 8.9071L35.584 8.9071L35.584 36.4769L35.0382 36.4769Z" fill="#ED5939"/>
      <path d="M7.18802 49.0829C7.18802 49.4412 6.88256 49.7316 6.50575 49.7316C6.12895 49.7316 5.82349 49.4412 5.82349 49.0829C5.82349 48.7246 6.12895 48.4342 6.50575 48.4342C6.88256 48.4342 7.18802 48.7246 7.18802 49.0829Z" fill="#BC523D"/>
      <path d="M53.5822 44.7381C53.5822 45.0963 53.2767 45.3868 52.8999 45.3868C52.5231 45.3868 52.2177 45.0963 52.2177 44.7381C52.2177 44.3798 52.5231 44.0894 52.8999 44.0894C53.2767 44.0894 53.5822 44.3798 53.5822 44.7381Z" fill="#BC523D"/>
      <path d="M41.3415 48.9696C41.3415 49.3279 41.036 49.6183 40.6592 49.6183C40.2824 49.6183 39.9769 49.3279 39.9769 48.9696C39.9769 48.6114 40.2824 48.3209 40.6592 48.3209C41.036 48.3209 41.3415 48.6114 41.3415 48.9696Z" fill="#BC523D"/>
      <path d="M19.2846 45.6659C19.2846 46.0242 18.9791 46.3146 18.6023 46.3146C18.2255 46.3146 17.92 46.0242 17.92 45.6659C17.92 45.3076 18.2255 45.0172 18.6023 45.0172C18.9791 45.0172 19.2846 45.3076 19.2846 45.6659Z" fill="#BC523D"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2888 7.81726H47.853L53.5749 44.665L52.225 44.8545L47.248 12.8034L41.3222 49.1821L39.9738 48.9836L46.468 9.11466H13.6662L19.2968 45.7013L17.9466 45.8891L12.8705 12.9047L7.18066 49.1785L5.83105 48.9872L12.2888 7.81726Z" fill="#BC523D"/>
      </svg>*/


export default App;
