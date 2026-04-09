// src/gameview/gameview components/Ratings.jsx
import React, { useState } from 'react';
import './ratings.css';

// Componente simples para renderizar estrelas estáticas (ex: no histograma ou display estatístico)
function StaticStarDisplay({ rating }) {
  // Para simplicidade, vamos usar o caractere Unicode 2bea e 2beb (cheia e vazia)
  const fullStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  const stars = [];
  for (let i = 0; i < fullStarsCount; i++) {
    stars.push('★');
  }
  if (hasHalfStar) {
    stars.push('½'); // Meia estrela simplificada
  }
  const emptyStarsCount = 5 - stars.length;
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push('☆');
  }
  
  return <div className="agv-stars-display-static">{stars.join(' ')}</div>;
}

export default function Ratings({ data }) {
  // Estado para armazenar o rating selecionado pelo usuário
  const [userRating, setUserRating] = useState(0);

  const handleStarClick = (rating) => {
    setUserRating(rating);
  };

  const renderInteractiveStar = (index) => {
    const isFilled = index <= userRating;
    const isHalfFilled = index > userRating && index <= userRating + 0.5;

    let starClass = 'agv-star-item';
    if (isFilled) starClass += ' agv-star-filled';
    if (isHalfFilled) starClass += ' agv-star-half';

    // Para meias-estrelas no Rate, precisamos de lógica para saber onde o usuário clicou.
    // Para minimalismo, vamos manter cliques completos para 1, 2, 3, 4, 5 estrelas.
    // Para meias estrelas, o ideal seria usar componentes específicos ou calcular offset.
    return (
      <span 
        key={index} 
        className={starClass} 
        onClick={() => handleStarClick(index)}
        // Poderia adicionar lógicas de hover para feedback visual pré-clique
      >
        ★
      </span>
    );
  };

  return (
    <div className="agv-ratings-container">
      {/* Box esquerdo: Gráfico de barras e Score estatístico */}
      <div className="agv-rating-box">
        <h3>Ratings</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div className="agv-bar-chart">
            {data.histogram.map((value, index) => (
              <div key={index} className="agv-bar" style={{ height: `${value}%` }}></div>
            ))}
          </div>
          <span className="agv-score">{data.ratingScore}</span>
        </div>
        {/* Adiciona display de estrelas estatísticas para feedback visual extra */}
        {/* <StaticStarDisplay rating={data.ratingScore} /> */}
      </div>

      {/* Box direito: Rate (Avaliar com estrelas interativas) */}
      <div className="agv-rating-box">
        <h3>Rate</h3>
        <div className="agv-stars-rate-container">
          {/* Lógica simplificada de 5 estrelas completas. Meias estrelas precisam de cálculo de offset. */}
          {[1, 2, 3, 4, 5].map(renderInteractiveStar)}
        </div>
      </div>
    </div>
  );
}