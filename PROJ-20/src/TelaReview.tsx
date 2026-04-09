import React, { useState } from 'react';
import { Home, PenTool, Star, User, Play, Menu, X } from 'lucide-react';

const TelaReview: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const options = [
    { id: 'terminei', label: 'Acabei de terminar o jogo' },
    { id: 'comecei', label: 'Acabei de começar o jogo' },
    { id: 'dropei', label: 'Abandonei o jogo' },
    { id: 'zerei', label: 'Zerei o jogo' },
    { id: 'planejo', label: 'Não terminei, mas planejo terminar' },
    { id: 'varias_vezes', label: 'Terminei o jogo várias vezes' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#000000', color: '#c2280d', fontFamily: 'sans-serif', margin: 0, padding: 0, overflow: 'hidden' }}>
      
      {!isSidebarOpen && (
        <button onClick={toggleSidebar} style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, background: 'none', border: 'none', color: '#c2280d', cursor: 'pointer' }}>
          <Menu size={32} />
        </button>
      )}

      <aside style={{ 
        width: isSidebarOpen ? '240px' : '0px', 
        opacity: isSidebarOpen ? 1 : 0,
        overflow: 'hidden',
        backgroundColor: '#000000', 
        display: 'flex', 
        flexDirection: 'column', 
        padding: isSidebarOpen ? '40px 20px' : '40px 0', 
        borderRight: isSidebarOpen ? '1px solid #c2280d' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '28px', fontWeight: 'bold', fontStyle: 'italic', letterSpacing: '4px' }}>Arkaic</div>
          <X size={24} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '35px', flexGrow: 1 }}>
          <SidebarItem icon={<Play size={22} />} label="Home" />
          <SidebarItem icon={<Home size={22} />} label="Biblioteca de jogos" />
          <SidebarItem icon={<PenTool size={22} />} label="Escrever uma review" active />
        </nav>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          <SidebarItem icon={<Star size={22} />} label="Seja um membro" />
          <SidebarItem icon={<User size={22} />} label="Configurar conta" />
        </div>
      </aside>

      {/* container centro da tela */}
      <main style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f0f0f' }}>
        
        {/* container de review */}
        <section style={{ 
          position: 'relative', 
          width: '85%', 
          height: '75%', 
          backgroundColor: '#c4c4c4', 
          borderRadius: '40px', 
          padding: '40px 60px', 
          color: '#261447', 
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
          boxSizing: 'border-box'
        }}>
          
          <h1 style={{ color: '#19381F',
             fontSize: '48px',
              margin: '0 0 20px 0',
               fontWeight: '600' }
               }>Review</h1>

          <header style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '40px',
            position: 'relative'
          }}>
            <p style={{ color: '#74678b',
               fontSize: '18px', 
               fontWeight: 'bold',
                cursor: 'pointer' }
                }>escolha o jogo</p>
            
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',//centraliza o texto
              textAlign: 'center'
            }}>
              <span style={{ 
                borderBottom: '3px solid #c2280d', 
                paddingBottom: '5px', 
                color: '#261447', 
                fontSize: '18px', 
                fontWeight: 'bold',
                cursor: 'pointer' 
              }}>
                fase atual do jogo
              </span>
            </div>

            <span style={{ color: '#74678b', 
              fontSize: '18px',
               fontWeight: 'bold', 
               cursor: 'pointer' }}>
              escrever sua review
            </span>
          </header>

          {/* bolinhas de opções */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '30px 60px', 
            marginTop: '10px',
            paddingLeft: '10%'
          }}>
            {options.map((opt) => (
              <label key={opt.id} style={{ display: 
              'flex', alignItems: 'center', 
              gap: '20px', cursor: 'pointer', 
              fontSize: '20px', 
              fontWeight: '500' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  borderRadius: '50%', 
                  border: '2px solid #19381F',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: selectedOption === opt.id ? '#19381F' : 'transparent',
                  transition: '0.2s'
                }}>
                  {selectedOption === opt.id && <div style={{ width: '10px', height: '10px', backgroundColor: '#c4c4c4', borderRadius: '50%' }} />}
                </div>
                <input 
                  type="radio" 
                  name="stage"
                  style={{ display: 'none' }} 
                  onChange={() => setSelectedOption(opt.id)} 
                />
                {opt.label}
              </label>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// componentes dos itens da sidebar
const SidebarItem = ({ icon, label, active = false }: any) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '18px', 
    color: active ? 'white' : '#999', 
    cursor: 'pointer',
    transition: '0.3s',
    whiteSpace: 'nowrap' //controla o texto dentro de um componente quando o espaço aperta
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>{icon}</div>
    <span style={{ fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px' }}>{label}</span>
  </div>
);

export default TelaReview;