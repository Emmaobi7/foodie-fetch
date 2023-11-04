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
from app.api.v1.categories import categories
import paypalrestsdk

app = Flask(__name__)
app.config['SECRET_KEY'] = 'averysecuresomething'

app.config['PAYPAL_MODE'] = 'sandbox'  # Set to 'live' for production
app.config['PAYPAL_CLIENT_ID'] = 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM'
app.config['PAYPAL_CLIENT_SECRET'] = 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'

paypalrestsdk.configure({
    'mode': app.config['PAYPAL_MODE'],
    'client_id': app.config['PAYPAL_CLIENT_ID'],
    'client_secret': app.config['PAYPAL_CLIENT_SECRET']
})

engine = create_engine('mysql+mysqlconnector://foodie_dev:foodie_pwd@localhost:3306/foodie_db')

Session = sessionmaker(bind=engine)

app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(views)
app.register_blueprint(products, url_prefix="/api/v1")
app.register_blueprint(categories, url_prefix="/api/v1")

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
