import { IStats } from '../static/types/IStats';

export async function getStats(): Promise<IStats> {
  try {
    const stats: IStats = await ((await fetch(`${import.meta.env.VITE_BACKEND_URL}/stats`)).json());
    return stats;
  } catch (error) {
    console.log(error);
    return {
        "total_games": 0,
        "total_chips": 0,
        "total_points": 0,
        "average_chips": 0,
        "average_victories": 0,
        "chips_per_game": 0,
        "points_per_player": 0,
    }
  }
}