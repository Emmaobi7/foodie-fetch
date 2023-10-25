"""
app blueprint
"""

from flask import Flask

app = Flask(__name__)

from .auth import auth
from .views import views

app.register_blueprint(auth)
app.register_blueprint(views)
