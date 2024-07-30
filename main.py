import asyncio
import uvicorn
from bot import main
from server import app

config = uvicorn.Config(app=app, host="0.0.0.0", port=9631, log_level="info", ssl_keyfile=r'C:\Users\Денис\projects\prjs\pokerapi\key.pem', ssl_certfile=r'C:\Users\Денис\projects\prjs\pokerapi\cert.pem')
server = uvicorn.Server(config)

loop = asyncio.new_event_loop()

loop.create_task(main())
loop.create_task(server.serve())

loop.run_forever()