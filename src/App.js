
import { useState } from 'react';
import './App.css';
import BidInput from './BidInput';
import Button from './Button';
import GameStatus from './GameStatus';
import ItemDisplay from './ItemDisplay';

const items = [
  {
      "itemId": 1,
      "itemName": "2019 Vespa GTSS Super Sport 300",
      "image": "https://i.ibb.co/m4jBFtc/2019vespa.jpg",
      "price": 7149.00,
      "currency" : {
          "display_name": "dollar",
          "symbol": "$"
      }
  },
  {
      "itemId": 2,
      "itemName": "KitchenAid Artisan Series 5 Quart Tilt-Head Stand Mixer",
      "image": "https://i.ibb.co/RbckncB/hero-KSM150-PSER.jpg",
      "price": 279.99,
      "currency" : {
          "display_name": "dollar",
          "symbol": "$"
      }
  },
  {
      "itemId": 3,
      "itemName": "Sony - 65 inches Class A9G MASTER Series OLED 4K UHD Smart Android TV",
      "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331597_sd.jpg;maxHeight=640;maxWidth=550",
      "price": 2799.99,
      "currency" : {
          "display_name": "dollar",
          "symbol": "$"
      }
  },
  {
      "itemId": 4,
      "itemName": "Thermomix, a blender that cooks",
      "image": "https://www.thespruceeats.com/thmb/gLKVDPpttWZO254OtPVW_Rdbh_8=/1500x1500/filters:fill(auto,1)/_hero_SQ_4174050-1-f4eee3225170411ca54ba31288f352f5.jpg",
      "price": 1500,
      "currency" : {
          "display_name": "dollar",
          "symbol": "$"
      }
  },
  {
      "itemId": 5,
      "itemName": "Bosh dishwashe 800 Series 24",
      "image": "https://images.homedepot-static.com/productImages/8da31777-b13e-465c-8fd1-4f73a35fc201/svn/stainless-steel-bosch-built-in-dishwashers-sgx68u55uc-64_1000.jpg",
      "price": 1049,
      "currency" : {
          "display_name": "dollar",
          "symbol": "$"
      }
  }
]

function App() {
  const players = ['Player 1', 'Player 2']
  const [ currentPlayer, setCurrentPlayer ] = useState(0);
  const [ bids, setBids ] = useState({});
  const [ currentItem, setCurrentItem] = useState(0)
  const isOver = currentPlayer > players.length - 1;


  const resetGame = () => {
    setBids({})
    setCurrentPlayer(0)
    setCurrentItem((prevItem) => {
      if(prevItem === items.length - 1) {
        return 0
      }
      return prevItem + 1
    })
  }

  return (
    <div className='content-wrapper'>
      <h1>The Price is Right!</h1>
      {!isOver && <div className="player">Who's playing: <span className="playerName">{players[currentPlayer]}</span></div>}
      <main className='mainGame'>
        <ItemDisplay item={items[currentItem]} />
        <BidInput
          className="bidDisplay"
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setBids={setBids}
          disabled={isOver}
          players={players}
          bids={bids}
        />
      </main>
      {isOver && <GameStatus players={players} bids={bids} item={items[currentItem]} />}
      <Button onClick={resetGame}>New Item!</Button>
    </div>
  );
}

export default App;
