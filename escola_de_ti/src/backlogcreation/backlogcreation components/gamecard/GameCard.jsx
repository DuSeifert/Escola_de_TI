import React from 'react';
import './GameCard.css';

export default function GameCard({ title, platform, coverUrl }) {
    return (
        <div className="game-card">
            <div className="card-image-box">
                <img src={coverUrl} alt={title} className="card-cover" />
                <button className="btn-options">•••</button>
            </div>
            
            <div className="card-info">
                <h3 className="card-title">{title}</h3>
                <span className="card-platform">{platform}</span>
            </div>
            
            <button className="btn-review">Review</button>
        </div>
    );
}