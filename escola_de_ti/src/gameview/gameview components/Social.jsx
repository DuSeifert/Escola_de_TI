import React from 'react';
import './social.css';

export default function Social({ reviews }) {
  return (
    <div className="agv-social-section">
      <h2>O que seus Mutuals estão dizendo</h2>
      
      {reviews.map(review => (
        <div key={review.id} className="agv-review-card">
          <div className="agv-review-header">
            <div>
              <span className="agv-reviewer-name">{review.user}</span>
              {review.isPremium && <span className="agv-premium-badge">PREMIUM</span>}
            </div>
            <span style={{ color: '#888' }}>{review.date}</span>
          </div>
          <p style={{ fontFamily: 'sans-serif', color: '#bbb' }}>{review.content}</p>
        </div>
      ))}
    </div>
  );
}