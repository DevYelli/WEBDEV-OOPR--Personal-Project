import React from 'react';

const games = [
  {
    id: 1,
    name: 'Game 1',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'game1.jpg',
  },
  {
    id: 2,
    name: 'Game 2',
    price: 14.99,
    description: 'Pellentesque euismod justo vel lobortis pellentesque.',
    imageUrl: 'game2.jpg',
  },
  // Add more games as needed
];

const GameStore = () => {
  return (
    <div className="game-store">
      <h1>Game Store</h1>
      <div className="game-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.imageUrl} alt={game.name} className="game-image" />
            <h2 className="game-name">{game.name}</h2>
            <p className="game-description">{game.description}</p>
            <p className="game-price">${game.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStore;
