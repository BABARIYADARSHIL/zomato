from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask_cors import CORS
from sqlalchemy import or_
from sqlalchemy.orm import joinedload

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:darshil9904@localhost:3306/food_order_db'
db = SQLAlchemy(app)


class Restaurant(db.Model):
    __tablename__ = 'restaurants'
    id = db.Column(db.Integer, primary_key=True)
    restaurantName = db.Column(db.String(255), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    foodType = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    image2 = db.Column(db.String(255), nullable=False)
    image3 = db.Column(db.String(255), nullable=False)
    image4 = db.Column(db.String(255), nullable=False)
    categories = db.relationship('Category', backref='restaurant', lazy=True)
    items = db.relationship('Item', backref='restaurant', lazy=True)

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    restaurantId = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    category = db.Column(db.String(50), nullable=False)

class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    restaurantId = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)

@app.route('/search', methods=["POST", "GET"])
def search():
    search_term = request.json.get('search')
    if not search_term:
        return jsonify({'message': 'Search term is required'}), 400
    restaurants = db.session.query(Restaurant).options(joinedload(Restaurant.items)).join(Category).join(Item).filter(or_(Restaurant.restaurantName.like(f'%{search_term}%'),Category.category.like(f'%{search_term}%'),Item.name.like(f'%{search_term}%'))).all()

    restaurants_data = []
    for restaurant in restaurants:
        categories = [category.category for category in restaurant.categories]
        items = [{'id': item.id, 'name': item.name, 'price': item.price} for item in restaurant.items]

        restaurants_data.append({
            'id': restaurant.id,
            'restaurantName': restaurant.restaurantName,
            'rating': restaurant.rating,
            'foodType': restaurant.foodType,
            'location': restaurant.location,
            'image': restaurant.image,
            'image2': restaurant.image2,
            'image3': restaurant.image3,
            'image4': restaurant.image4,
            'categories': categories,
            'items': items
        })

    return jsonify(restaurants_data), 200



@app.route('/restaurant', methods=['GET'])
def get_restaurant():
    restaurants = Restaurant.query.all()
    result = []
    for restaurant in restaurants:
        restaurant_data = {
            'id': restaurant.id,
            'restaurantName': restaurant.restaurantName,
            'rating': restaurant.rating,
            'foodType': restaurant.foodType,
            'location': restaurant.location,
            'image': restaurant.image,
            'image2': restaurant.image2,
            'image3': restaurant.image3,
            'image4': restaurant.image4,
            'categories': [category.category for category in restaurant.categories],
            'items': [{'name': item.name, 'price': item.price} for item in restaurant.items]
        }
        result.append(restaurant_data)
    return jsonify(result)
if __name__ == "__main__":
    app.run(host="127.0.0.1",port=5500)