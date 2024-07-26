from fastapi import FastAPI, Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from services.get_players import get_players
from models.player import Player

app = FastAPI()

app.mount("/static", StaticFiles(directory="static", html=True), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def root(response: Response):
  with open('./static/index.html') as fh:
    data = fh.read()
  return Response(content=data, media_type="text/html")

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