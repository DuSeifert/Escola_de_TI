import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header className="top-header">
            <div className="header-titles">
                <span className="logo-text">LOGO</span>
                <h1 className="page-title">My Backlog</h1>
            </div>
            
            <div className="header-actions">
                <div className="search-input-wrapper">
                    <input type="text" placeholder="Search on backlog" />
                    <span className="search-icon">⌕</span>
                </div>
                <button className="btn-add-game">Add game</button>
            </div>
        </header>
    );
}