from flask import Blueprint, request, jsonify
from app.models import Cart

cart_api = Blueprint('cart_api', __name__)

@cart_api.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    from app import Session
    try:
        data = request.get_json()


        product_id = data.get('product_id')

        if not product_id:
            return jsonify({'error': 'Product ID is required'}), 400

        session = Session()
        product = session.query(Product).get(product_id)

        if not product:
            session.close()
            return jsonify({'error': 'Product not found'}), 404

        cart = Cart(user_id=user_id, product_id=product_id, quantity=1)
        session.add(cart)

        session.close()
        return jsonify({'message': 'Product added to cart successfully'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

