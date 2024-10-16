import os
from fastapi import FastAPI, Response, status
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from services.get_players import get_players
from models.player import Player

app = FastAPI()

load_dotenv()

app.mount("/website/dist", StaticFiles(directory="website/dist", html=True), name="dist")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/db/{password}')
async def get_db(password: str):
  if password == os.getenv("SECRET_PASSWORD"):
    return FileResponse('PokerStatistics.db')
  else:
    return Response(status_code=status.HTTP_403_FORBIDDEN)

@app.get('/players/all')
async def get_all() -> list[Player]:
  return await get_players()

@app.get('/players/rating')
async def get_sorted() -> list[Player]:
  players = await get_players()
  players.sort(key=lambda x: x.Points, reverse=True)
  return players

@app.get('/stats')
async def get_stats():

  players = await get_players()

  stats = {}

  total_games = 0
  total_chips = 0
  total_debt = 0
  total_points = 0

  for player in players:
    total_games += player.Victories
    total_chips += player.Chips
    total_debt += player.Debt
    total_points += player.Points

  stats["total_games"] = total_games
  stats["total_chips"] = total_chips - total_debt
  stats["total_points"] = total_points
  stats["average_chips"] = float("{0:.2f}".format((total_chips - total_debt) / len(players)))
  stats["average_victories"] = int(total_games / len(players))
  stats["chips_per_game"] = float("{0:.2f}".format((total_chips - total_debt) / total_games))
  stats["points_per_player"] = float("{0:.2f}".format(total_points / len(players)))

  return stats


# if __name__ == "__main__":
# uvicorn.run("server:app", host="0.0.0.0", port=9631, log_level="info", ssl_keyfile=r'C:\Users\Денис\projects\prjs\pokerapi\key.pem', ssl_certfile=r'C:\Users\Денис\projects\prjs\pokerapi\cert.pem')