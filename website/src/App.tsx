import Stats from './components/Stats/Stats';
import Rating from './components/Rating/Rating';
import Season from './components/Season/Season';
import { useState, useEffect } from 'react';
import { IPlayer } from './static/types/IPlayer';
import { IStats } from './static/types/IStats';

import { getRating } from './utils/getRating';
import { getStats } from './utils/getStats';

function App() {

  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [stats, setStats] = useState<IStats>({
      "total_games": 0,
      "total_chips": 0,
      "total_points": 0,
      "average_chips": 0,
      "average_victories": 0,
      "chips_per_game": 0,
      "points_per_player": 0,
  });

  useEffect(() => {
    getRating()
    .then((data: IPlayer[]) => {
      setPlayers(data);
    })
    getStats()
    .then((data: IStats) => {
      setStats(data);
    })
  }, []);

  return (
    <>
      <main>
        <Stats players={players} stats={stats} />
        <Rating rating={players} />
        <Season stats={stats} bestPlayer={players[0]} />
      </main>
      <footer>
        Организация не устраивает незаконные турниры по азартным играм. Все игры ведутся на рейтинг и интерес. Хорошего дня!
      </footer>
    </>
  )
}

export default App
