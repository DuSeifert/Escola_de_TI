import React from 'react';
import './communityActivity.css';

function SmallStarDisplay({ rating, count = 5 }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push('★');
  }
  for (let i = 0; i < (count - rating); i++) {
    stars.push('☆');
  }
  return <span className="agv-mini-stars">{stars.join(' ')}</span>;
}

export default function CommunityActivity({ data }) {
  const topReview = data.topReview;
  
  return (
    <div className="agv-community-container">
      
      {/* Linha 1: Amigos */}
      <div className="agv-community-row">
        <div>
          <div className="agv-section-header">reviews from friends</div>
          <div className="agv-friend-reviews">
            {data.friends.map((friend, index) => (
              <div key={index} className="agv-friend-avatar">
                {/* ADICIONADO: Tag img dentro do círculo dos amigos */}
                <div className="agv-circle">
                  {friend.pfpUrl && <img src={friend.pfpUrl} alt="friend pfp" />}
                </div>
                <SmallStarDisplay rating={friend.rating} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="agv-section-header">articles from friends</div>
          <div className="agv-article-covers">
            {data.friendArticles.map((article, index) => (
              <div key={index} className="agv-article-box">
                {article.coverUrl ? (
                  <img src={article.coverUrl} alt="Article cover" className="agv-article-cover-img" />
                ) : (
                  <span>article<br/>cover</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Linha 2: Tops */}
      <div className="agv-community-row">
        <div>
          <div className="agv-section-header">top reviews</div>
          <div className="agv-top-review-item">
            {/* ADICIONADO: Tag img dentro do círculo do top review */}
            <div className="agv-circle" style={{ width: '2.5rem', height: '2.5rem', flexShrink: 0 }}>
              {topReview.pfpUrl && <img src={topReview.pfpUrl} alt="reviewer pfp" />}
            </div>
            <div className="agv-review-content">
              <div className="agv-review-header">
                <span>
                  <strong style={{ color: '#00ffff' }}>{topReview.username}</strong> give <SmallStarDisplay rating={topReview.rating} count={5} />
                </span>
                <span>♥</span>
              </div>
              <div className="agv-review-text">
                {topReview.text}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                ♥ {topReview.likes} likes
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="agv-section-header">top articles</div>
          <div className="agv-article-covers">
            {data.topArticles.map((article, index) => (
              <div key={index} className="agv-article-box">
                {article.coverUrl ? (
                  <img src={article.coverUrl} alt="Article cover" className="agv-article-cover-img" />
                ) : (
                  <span>article<br/>cover</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}