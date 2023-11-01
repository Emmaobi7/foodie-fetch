from flask import Blueprint, jsonify
from app.models import Product

products = Blueprint('products', __name__)

@products.route('/products', methods=['GET'])
def get_product_all():
    from app import Session
    try:
        session = Session()
        product_list = []
        product_obj = session.query(Product).all()
        for product in product_obj:
            product_dict = {
                    'id': product.id,
                    'title': product.title,
                    'price': product.price,
                    'category': product.category,
                    'image': product.image,
                    'description': product.description
                    }
            product_list.append(product_dict)
        session.close()
        return jsonify(product_list)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

