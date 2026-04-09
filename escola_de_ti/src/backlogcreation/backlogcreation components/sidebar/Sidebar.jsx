import React from 'react';
import './Sidebar.css';

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="nav-item" onClick={toggleSidebar} title="Alternar Menu">
                {}
                <div className="icon">{isOpen ? '˂' : '˃'}</div>
            </div>
            
            <div className="nav-item">
                <div className="icon">⌂</div>
                <span className="label">HOME</span>
            </div>
            <div className="nav-item">
                <div className="icon">🖉</div>
                <span className="label">MAKE A REVIEW</span>
            </div>

            <div className="spacer" />

            <div className="nav-item">
                <div className="icon">🔔</div>
                <span className="label">NOTIFICATIONS</span>
            </div>

            <div className="nav-item">
                <div className="icon">🟄</div>
                <span className="label">UPGRADE</span>
            </div>
            <div className="nav-item">
                <div className="icon">👤</div>
                <span className="label">ACCOUNT</span>
            </div>
        </div>
    );
}