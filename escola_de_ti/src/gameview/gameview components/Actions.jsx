import React from 'react';
import './actions.css';

export default function Actions() {
  return (
    <div className="agv-actions-container">
      <button className="agv-btn agv-btn-primary">+ Backlog</button>
      <button className="agv-btn">Registrar Gameplay</button>
      <button className="agv-btn">Escrever Artigo</button>
    </div>
  );
}