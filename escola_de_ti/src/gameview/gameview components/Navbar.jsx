import React from 'react';
import './navbar.css';

export default function Navbar({ data }) {
  return (
    <header className="agv-navbar">
      <div className="agv-navbar-inner">
        <div className="agv-logo">Arkaic</div>
        <div className="agv-user-area">
          <span>{data.username}</span>
          <div className="agv-pfp">
            {data.pfpUrl && <img src={data.pfpUrl} alt="pfp" />}
          </div>
        </div>
      </div>
    </header>
  );
}