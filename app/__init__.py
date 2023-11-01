"""
app blueprint
"""

from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .models import Base
from .views import views
from .auth import auth
from flask_login import LoginManager
from .models import User
from .v_api import fetch_and_store_products
from app.api.v1.products import products

app = Flask(__name__)
app.config['SECRET_KEY'] = 'averysecuresomething'



engine = create_engine('mysql+mysqlconnector://foodie_dev:foodie_pwd@localhost:3306/foodie_db')

Session = sessionmaker(bind=engine)

app.register_blueprint(auth)
app.register_blueprint(views)
app.register_blueprint(products, url_prefix="/api/v1")

login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.init_app(app)

session = Session()
@login_manager.user_loader
def load_user(id):
    return session.query(User).get(int(id))

@app.teardown_appcontext
def close_db(error):
    session.close()

Base.metadata.create_all(bind=engine)


"""
uncomment to populate database with fake store api
"""
#fetch_and_store_products()
