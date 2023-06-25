import React from 'react'
import GameContainer from '../../Components/Containers/GameContainer'

const NewsBanner = () => {
  return (
    <div className='games-list-container'>
    <ul className='games-list'>
        <li style={{ backgroundImage: `url(https://gaming-cdn.com/images/products/268/orig-fallback-v1/the-witcher-3-wild-hunt-pc-game-gog-com-cover.jpg?v=1650526691)` }}>
            <GameContainer 
            buttonText="View Game Details">
            </GameContainer>
        </li>
    </ul>
</div>
  )
}

export default NewsBanner