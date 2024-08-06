from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta
from functools import wraps
import jwt
from flask import jsonify
from flask_cors import CORS
from sqlalchemy import or_
from sqlalchemy.orm import joinedload


JWT_EXPIRATION_DELTA = timedelta(hours=1)

app = Flask(__name__)
CORS(app)

app.secret_key = 'super-secret-key'
app.config['SECRET_KEY'] = 'DARSHIL'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:darshil9904@localhost:3306/food_order_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})


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


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), nullable=False)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get("token")        
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = data['user']
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired!'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated


@app.route('/protected_route')
def protected_route():
    token = request.headers.get('token')
    if not token:
        return jsonify({'message': 'Token is missing'}), 401
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        return jsonify({'message': 'You have access to this route'})
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token has expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token'}), 401


@app.route('/restaurants', methods=['GET'])
@token_required
def get_restaurants(current_user):
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


@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = []
    for user in users:
        user_data = {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'password': user.password,
            'role': user.role
        }
        result.append(user_data)
    return jsonify(result)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()

        if not data or 'email' not in data or 'password' not in data:
            return jsonify({'error': 'Invalid input'}), 400

        email = data['email']
        password = data['password']
       

        user = User.query.filter_by(email=email, password=password).first()
    
        if user:
            token = jwt.encode({'user': user.id, 'exp': datetime.utcnow() + timedelta(hours=1)}, app.config['SECRET_KEY'])
            return jsonify({'message': 'Login successful', 'token': token ,'email':email,'id':user.id,'name':user.name,'role':user.role}), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401

    return "Method not Allowed", 405

@app.route('/search', methods=["POST", "GET"])
def search():
    search_term = request.json.get('search', '')
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