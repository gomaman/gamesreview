import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../Config/LinksConfig';

const NewsBanner = () => {
  const [singleGame, setSingleGame] = useState('');

  useEffect(() => {
    axios
      .get(API_URL + `/games?_limit=1`)
      .then(res => {
        console.log(res.data[0]);
        setSingleGame(res.data[0]);
      })
      .catch(err => toast.error(err.message));
  }, []);


  if (!singleGame) {
    return <div>Loading...</div>;
  }


  return (
    <div className="games-list-container" style={{ backgroundImage: 'url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)' }}>
      <ul className="games-list">
        <li></li>
      </ul>
      <div className="game-details">
        <Link
          to={`/games/game/${singleGame.id}`}
          key={singleGame.id}
          style={{ textDecoration: 'none', color: 'black', padding: '10px' }}
        >
          <h2>{singleGame.title}</h2>
        </Link>
        <p>Release Date: {singleGame.releaseDate}</p>
      </div>
    </div>
  );
};

export default NewsBanner;