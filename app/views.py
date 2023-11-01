"""
app views and logic
"""

from flask import Blueprint
from flask import Flask, render_template
from .models import Product, Cart
from flask_login import current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    from . import Session
    session = Session()
    products = session.query(Product).all()
    return render_template('index.html', products=products)

@views.route('/product/<int:product_id>')
def detail(product_id):
    from. import Session
    session = Session()
    item = session.query(Product).filter_by(id=product_id).first()
    session.close()
    return "A product's detail"

@views.route('/cart/<int:product_id>')
def add_to_cart(product_id):
    from . import Session
    session = Session()
    if current_user.is_authenticated:
        user_id = current_user.id
        cart_item = session.query(Cart).filter_by(user_id=user_id, product_id=product_id).first()
        if cart_item:
            cart_item.quantity += 1
        else:
            new_cart = Cart(user_id=user_id, product_id=product_id, quantity=1)
            session.add(new_cart)
        session.commit()
    else:
        # handle non auth users
        pass
    session.close()
    return "add to cart"


@views.route('/cart/<int:product>')
def remove_cart(product_id):
    return "removed"


@views.route('/cart')
def view_cart():
    return "Foodie cart"
