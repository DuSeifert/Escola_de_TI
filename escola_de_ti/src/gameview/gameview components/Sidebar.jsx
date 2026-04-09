import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (
    <aside className="agv-sidebar">
      <div className="agv-side-link">
        <div className="agv-side-icon"></div>
        <span>Home</span>
      </div>
      <div className="agv-side-link">
        <div className="agv-side-icon"></div>
        <span>Articles</span>
      </div>
      <div className="agv-side-link">
        <div className="agv-side-icon"></div>
        <span>Library</span>
      </div>
    </aside>
  );
}