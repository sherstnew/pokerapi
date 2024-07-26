from pydantic import BaseModel

class Player(BaseModel):
  Id: int
  Name: str
  Chips: int
  Victories: int
  Points: int
  Debt: int