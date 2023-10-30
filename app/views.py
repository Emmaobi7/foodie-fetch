"""
app views and logic
"""

from flask import Blueprint
from flask import Flask, render_template
from .models import Product

views = Blueprint('views', __name__)

@views.route('/')
def home():
    from . import Session
    session = Session()
    products = session.query(Product).all()
    session.close()
    return render_template('index.html', products=products)

@views.route('/product/<int:product_id>')
def detail(product_id):
    from. import Session
    session = Session()
    item = session.query(Product).filter_by(product_id).first()
    session.close()
    return "A product's detail"

@views.route('/cart')
def cart_func():
    return "Foodie cart"
