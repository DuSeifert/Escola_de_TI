import React from 'react';
import './gameDetails.css';
import Ratings from './Ratings';
import CommunityActivity from './CommunityActivity'; // <-- Importe aqui!

export default function GameDetails({ game, community }) { // <-- Recebendo community nas props
  const metaTextLikesLogs = `Likes: ${game.likes} | Logs: ${game.logs}`;
  
  return (
    <div className="agv-details-container">
      {/* ESQUERDA: Capa, Gêneros, Publisher e Logs */}
      <div className="agv-left-details">
        <div className="agv-cover-with-meta">
          <div className="agv-cover">
            {game.coverUrl && <img src={game.coverUrl} alt={`${game.title} cover`} />}
          </div>
          <div className="agv-meta-below-cover">
            <p>Gêneros: {game.genres.join(' • ')}</p>
            {/* Publisher destacado */}
            <p>Publicadora: <span className="agv-highlight">{game.publisher}</span></p>
            <p>{metaTextLikesLogs}</p>
          </div>
        </div>
      </div>

      {/* DIREITA: Todo o resto flui aqui dentro */}
      <div className="agv-info-block">
        <div className="agv-title-text">
          {/* Ano destacado */}
          <h1>{game.title} <span className="agv-highlight">{game.year}</span></h1>
          {/* Developer destacado */}
          <div className="agv-dev-text">Desenvolvido por <span className="agv-highlight">{game.developer}</span></div>
        </div>

        <div className="agv-desc-actions-row">
          <div className="agv-description">
            <p>{game.description}</p>
          </div>
          
          <div className="agv-actions-group-right">
            <div className="agv-action-icons-top">
              <button className="agv-icon-btn-msp">+</button>
              <button className="agv-icon-btn-msp">♡</button>
              <button className="agv-icon-btn-msp">☰</button>
            </div>
            <div className="agv-action-boxes-rect">
              <button className="agv-rect-action-btn">reviews</button>
              <button className="agv-rect-action-btn">lists</button>
              <button className="agv-rect-action-btn">share</button>
            </div>
          </div>
        </div>

        {/* Ratings e Rate em tela cheia na coluna da direita */}
        <Ratings data={game} />
        
        {/* E a Comunidade logo abaixo das notas, exatamente como no sketch! */}
        <CommunityActivity data={community} />
        
      </div>
    </div>
  );
}