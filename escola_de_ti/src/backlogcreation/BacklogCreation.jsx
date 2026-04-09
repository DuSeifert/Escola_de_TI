import React, { useState } from 'react';
import Sidebar from './backlogcreation components/sidebar/Sidebar';
import Header from './backlogcreation components/header/Header';
import GameCard from './backlogcreation components/gamecard/GameCard';
import './BacklogCreation.css';
import minecraftImage from "../assets/minecraftlogo.jpg";

export default function BacklogCreation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const games = [
        { id: 1, title: 'Minecraft', platform: 'PC', coverUrl: minecraftImage },
        { id: 2, title: 'Minecraft', platform: 'PS5', coverUrl: minecraftImage },
        { id: 3, title: 'Minecraft', platform: 'PS3', coverUrl: minecraftImage },
        { id: 4, title: 'Minecraft', platform: 'PC', coverUrl: minecraftImage },
    ];

    return (
        <div className="backlog-layout">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            
            <main className="backlog-main">
                <Header />
                
                <section className="backlog-content-box">
                    <div className="box-toolbar">
                        <button className="btn-sort">
                            Order by <span className="arrow-down">⌄</span>
                        </button>
                    </div>
                    
                    <div className="games-grid">
                        {games.map((game) => (
                            <GameCard 
                                key={game.id}
                                title={game.title}
                                platform={game.platform}
                                coverUrl={game.coverUrl}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}