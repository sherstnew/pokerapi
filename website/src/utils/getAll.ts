import { IPlayer } from '../static/types/IPlayer';

export async function getAll(): Promise<IPlayer[]> {
  try {
    const players: IPlayer[] = await ((await fetch(`${import.meta.env.VITE_BACKEND_URL}/players/all`)).json());
    return players;
  } catch (error) {
    console.log(error);
    return []
  }
}