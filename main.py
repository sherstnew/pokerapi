import asyncio
import uvicorn
from bot import main
from server import app

config = uvicorn.Config(app=app, host="0.0.0.0", port=8000, log_level="info")
server = uvicorn.Server(config)

loop = asyncio.new_event_loop()

loop.create_task(main())
loop.create_task(server.serve())

loop.run_forever()