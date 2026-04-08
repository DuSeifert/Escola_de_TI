import React from 'react';
import './styles.css';

import Navbar from './gameview components/Navbar';
import Sidebar from './gameview components/Sidebar';
import GameDetails from './gameview components/GameDetails';
import CommunityActivity from './gameview components/CommunityActivity';

export default function GameView() {
  const presentationData = {
    navbar: {
      username: "LactoseIntolerant",
      pfpUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdIQpDJcFeFAW-1Vg8fk-HYlUyEeloTqlTQ&s" 
    },
    game: {
      title: "Future Racer 2000",
      coverUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1952590/b0b080243627bd332963b212c0802fb2726b4cc7/capsule_616x353.jpg?t=1761505189",
      heroUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1952590/header.jpg",
      year: "2023",
      developer: "Tim Oxton",
      publisher: "oxblud",
      description: "Only You Can Be The Future Racer 2000",
      genres: ["Horror Psicológico", "Indie", "Surreal"],
      likes: "1,203",
      logs: "4,567",
      ratingScore: 3.6,
      histogram: [10, 20, 50, 80, 40]
    },
    community: {
      // ADICIONADO: Propriedade pfpUrl nas reviews (coloquei links de placeholder, pode trocar depois)
      friends: [ 
        { rating: 3, pfpUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" }, 
        { rating: 2, pfpUrl: "https://i.pinimg.com/736x/04/93/4c/04934cb4c57465afd1a2337ed1b36558.jpg" } // Mostra como fica quando não tem foto (fundo escuro)
      ],
      friendArticles: [
        { coverUrl: "https://i.pinimg.com/236x/e0/dc/90/e0dc90fd06565023cd2cf99ba82b7ab1.jpg" }, 
        { coverUrl: "https://i.ebayimg.com/00/s/MTYwMFgxMTYz/z/~D8AAOSwnihdyt8X/$_57.JPG?set_id=8800005007" }, 
        { coverUrl: "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2009/03/23/wired3.jpg?width=375&dpr=1&s=none&crop=none" } 
      ],
      topReview: {
        username: "Bingo",
        rating: 4,
        text: "Bongo Bingoooo Bongi",
        likes: 42,
        // ADICIONADO: Propriedade pfpUrl aqui também
        pfpUrl: "https://i.pinimg.com/736x/77/ed/e6/77ede6d1fe17fbb86caea48fc564e244.jpg"
      },
      topArticles: [
        { coverUrl: "https://media.wired.com/photos/5bb82081b1d78f2d7457835d/master/w_1600%2Cc_limit/26.05-w.jpg" },
        { coverUrl: "https://media.wired.com/photos/5bb7deb1311c5c02a8607e6c/master/w_1600%2Cc_limit/02.03-w.jpg" },
        { coverUrl: "https://i.etsystatic.com/19416137/r/il/f668f1/3093307573/il_570xN.3093307573_mk61.jpg" }
      ]
    }
  };

  return (
    <div className="agv-wrapper">
      <Navbar data={presentationData.navbar} />
      
      <main className="agv-main-content">
        <div 
          className="agv-hero-bg"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent 50%, #0c0c0e 100%),
              linear-gradient(to right, #0c0c0e 0%, transparent 15%, transparent 85%, #0c0c0e 100%),
              url('${presentationData.game.heroUrl}')
            `
          }}
        ></div>

        <div className="agv-content-layer">
          <GameDetails game={presentationData.game} community={presentationData.community} />
        </div>
      </main>

      <Sidebar />
    </div>
  );
}