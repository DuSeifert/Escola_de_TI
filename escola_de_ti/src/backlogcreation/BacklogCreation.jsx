import React, { useState } from 'react';
import { 
  Home, List, Settings, Bell, Search, Plus, 
  MoreVertical, X, Flame, Gamepad2 
} from 'lucide-react';
import './BacklogCreation.css'; // <-- Importando o CSS que criamos

// DADOS MOCKADOS
const mockBacklog = [
  { id: 1, title: 'Elden Ring', platforms: ['PC', 'PS5'], priority: 'ALTA', status: 'Revisar', color: '#292524' },
  { id: 2, title: 'Baldur\'s Gate 3', platforms: ['PC', 'PS5'], priority: 'MÉDIA', status: 'Revisar', color: '#7f1d1d' },
  { id: 3, title: 'The Witcher 3', platforms: ['PC', 'PS5', 'NS'], priority: 'BAIXA', status: 'Revisar', color: '#334155' },
  { id: 4, title: 'Hades II', platforms: ['PC', 'PS5'], priority: 'ALTA', status: 'Revisar', color: '#064e3b' },
];

export default function BacklogCreation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo-box">
            <Gamepad2 size={28} />
          </div>
          <nav className="nav-menu">
            <button className="icon-btn"><Home size={24} /></button>
            <button className="icon-btn active"><List size={24} /></button>
            <button className="icon-btn"><Settings size={24} /></button>
          </nav>
        </div>
        <div className="sidebar-bottom">
          <button className="icon-btn"><Bell size={24} /></button>
          <div className="user-avatar">G</div>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="main-content">
        
        {/* HEADER */}
        <header className="header">
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Buscar jogos, estúdios ou usuários..." />
          </div>
        </header>

        {/* ÁREA DO BACKLOG */}
        <div className="backlog-area">
          
          <div className="page-title-row">
            <h1>Meu Backlog</h1>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={20} /> Adicionar Jogo
            </button>
          </div>

          <div className="filters">
            {['Plataformas: PC, PS5', 'Gênero: RPG', 'Prioridade: ALTA', 'Status: Fila'].map((tag) => (
              <span key={tag} className="filter-pill">{tag}</span>
            ))}
          </div>

          {/* GRID DE JOGOS */}
          <div className="games-grid">
            {mockBacklog.map((game) => (
              <div key={game.id} className="game-card">
                
                <div className="card-image" style={{ backgroundColor: game.color }}>
                  <span>{game.title}</span>
                  <button className="more-btn"><MoreVertical size={18} /></button>
                </div>
                
                <h3 className="card-title">{game.title}</h3>
                <div className="card-platforms">{game.platforms.join(' • ')}</div>
                
                <span className={`priority-badge priority-${game.priority.toLowerCase().replace('é', 'e')}`}>
                  {game.priority === 'ALTA' && <Flame size={12} />}
                  {game.priority}
                </span>

                <button className="status-btn">{game.status}</button>
                <button className="move-btn">Mover p/ Jogando</button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Adicionar ao Backlog</h2>
              <button className="icon-btn" onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="input-group search-bar">
                <label>Buscar Jogo</label>
                <Search size={18} style={{top: '40px'}} />
                <input type="text" autoFocus placeholder="Ex: Final Fantasy..." />
              </div>

              <div className="input-group">
                <label>Plataforma Preferida</label>
                <div className="platform-options">
                  {['PC', 'PS5', 'Xbox', 'Switch'].map(plat => (
                    <button key={plat} className="plat-btn">{plat}</button>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn-ghost" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                <button className="btn-primary">Adicionar Jogo</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}