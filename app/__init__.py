"""
app blueprint
"""

from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Base

app = Flask(__name__)

engine = create_engine('mysql+mysqlconnector://foodie_dev:foodie_pwd@localhost:3306/foodie_db')

Session = sessionmaker(bind=engine)

from .auth import auth
from .views import views

app.register_blueprint(auth)
app.register_blueprint(views)

Base.metadata.create_all(bind=engine)
