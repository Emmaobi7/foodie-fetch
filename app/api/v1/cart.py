from flask import Blueprint, jsonify, request
from app.models import Cart
from flask_login import current_user

cart_api = Blueprint('cart_api', __name__)

@cart_api.route('/cart/<int:product_id>', methods=['POST'])
def add_to_cart(product_id):
    from app import Session
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
        session.close()
        return jsonify({'message': 'Item added to cart successfully'}), 201
    else:
        session.close()
        return jsonify({'error': 'User not authenticated'}), 401

