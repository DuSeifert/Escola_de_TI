import React from 'react';
import './header.css';

export default function Header({ game }) {
  return (
    <div className="agv-header">
      <div className="agv-cover-placeholder">
        <span>[Capa do Jogo]</span>
      </div>
      
      <div className="agv-info">
        <h1>{game.title}</h1>
        <div className="agv-developer">Desenvolvido por {game.developer} • {game.releaseYear}</div>
        
        <div className="agv-tags">
          {game.tags.map(tag => (
            <span key={tag} className="agv-tag">{tag}</span>
          ))}
        </div>

        <div className="agv-synopsis">
          <p>{game.synopsis}</p>
        </div>
      </div>
    </div>
  );
}