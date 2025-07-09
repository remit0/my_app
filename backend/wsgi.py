from flask import Flask
from .fetch_api import fetch_api
from dotenv import load_dotenv
import os

load_dotenv()

from webaiku.extension import WEBAIKU

app = Flask(__name__)
WEBAIKU(
    app,
    "webapps/my_app",
    int(os.getenv("ANGULAR_API_PORT")),
)
WEBAIKU.extend(app, [fetch_api])


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.getenv("ANGULAR_API_PORT")))
