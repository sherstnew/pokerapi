import aiosqlite

from db import DB_NAME
from models.player import Player

def row_to_model(row: tuple) -> Player:
  Id, Name, Chips, Victories, Points, Debt = row
  return Player(Id=Id, Name=Name, Chips=Chips, Victories=Victories, Points=Points, Debt=Debt)

async def get_players() -> list[Player]:
  async with aiosqlite.connect(DB_NAME) as database:
    cursor = await database.execute("select * from Stats")
    rows = list(await cursor.fetchall())
    return [row_to_model(row) for row in rows]