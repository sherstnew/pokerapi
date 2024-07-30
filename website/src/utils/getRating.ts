import { IPlayer } from '../static/types/IPlayer';

export async function getRating(): Promise<IPlayer[]> {
  try {
    const players: IPlayer[] = await ((await fetch(`${import.meta.env.VITE_BACKEND_URL}/players/rating`)).json());
    return players;
  } catch (error) {
    console.log(error);
    return []
  }
}