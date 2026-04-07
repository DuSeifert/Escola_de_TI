import React from 'react';
import './styles.css';
import Header from './gameview components/Header';
import Actions from './gameview components/Actions';
import Social from './gameview components/Social';

export default function GameView() {
  const mockGameData = {
    title: "Fears to Fathom",
    developer: "Rayll",
    releaseYear: "2021",
    tags: ["Horror Psicológico", "Indie", "Narrativo"],
    synopsis: "Uma experiência episódica de horror psicológico onde cada episódio revela uma história curta narrada por aqueles que sobreviveram a ela. A imersão e a atmosfera de tensão constante fazem a narrativa brilhar.",
  };

  const mockReviews = [
    {
      id: 1,
      user: "EduSneeze",
      isPremium: true,
      date: "Há 2 dias",
      content: "A construção de atmosfera nesse jogo é um excelente material de estudo. O pacing do terror é incrível, pretendo gravar uma série sobre isso."
    },
    {
      id: 2,
      user: "Lucas_Casual",
      isPremium: false,
      date: "Há 1 semana",
      content: "Experiência curta mas que fica na cabeça. Ótimo para fechar em uma noite chuvosa."
    }
  ];

  return (
    <div className="agv-container">
      <Header game={mockGameData} />
      <Actions />
      <Social reviews={mockReviews} />
    </div>
  );
}