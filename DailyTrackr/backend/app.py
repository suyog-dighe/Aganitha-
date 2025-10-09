from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import jwt
import datetime
from functools import wraps
from werkzeug.security import generate_password_hash, check_password_hash
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
app.config['SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key-change-this')

# Database configuration
db_host = os.getenv('DB_HOST', 'localhost')
db_port = os.getenv('DB_PORT', '5432')
db_name = os.getenv('DB_NAME', 'dailytrackr')
db_user = os.getenv('DB_USER', 'postgres')
db_password = os.getenv('DB_PASSWORD', 'postgres')

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Models
class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    mobile = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    
    records = db.relationship('Record', backref='user', lazy=True, cascade='all, delete-orphan')

class Record(db.Model):
    __tablename__ = 'records'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.String(50), nullable=False)
    shift = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)

# JWT token decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        
        if not token:
            return jsonify({'message': 'Token is missing'}), 401
        
        try:
            if token.startswith('Bearer '):
                token = token.split(' ')[1]
            
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user_id = data['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'message': 'Invalid token'}), 401
        
        return f(current_user_id, *args, **kwargs)
    
    return decorated

# Routes

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'mobile', 'password', 'confirmPassword']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'message': f'{field} is required'}), 400
        
        # Validate password match
        if data['password'] != data['confirmPassword']:
            return jsonify({'message': 'Passwords do not match'}), 400
        
        # Validate email format
        if '@' not in data['email']:
            return jsonify({'message': 'Invalid email format'}), 400
        
        # Check if email or mobile already exists
        existing_user = User.query.filter(
            (User.email == data['email']) | (User.mobile == data['mobile'])
        ).first()
        
        if existing_user:
            return jsonify({'message': 'Email or mobile number already registered'}), 409
        
        # Hash password
        hashed_password = generate_password_hash(data['password'])
        
        # Create new user
        new_user = User(
            name=data['name'],
            email=data['email'],
            mobile=data['mobile'],
            password=hashed_password
        )
        
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({
            'message': 'Registration successful',
            'user_id': new_user.id
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': f'Server error: {str(e)}'}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        
        if not data.get('identifier') or not data.get('password'):
            return jsonify({'message': 'Identifier and password are required'}), 400
        
        # Check if identifier is email or mobile
        user = User.query.filter(
            (User.email == data['identifier']) | (User.mobile == data['identifier'])
        ).first()
        
        if not user:
            return jsonify({'message': 'Invalid credentials'}), 401
        
        # Verify password
        if not check_password_hash(user.password, data['password']):
            return jsonify({'message': 'Invalid credentials'}), 401
        
        # Generate JWT token
        token = jwt.encode({
            'user_id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7)
        }, app.config['SECRET_KEY'], algorithm='HS256')
        
        return jsonify({
            'message': 'Login successful',
            'token': token,
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'mobile': user.mobile
            }
        }), 200
        
    except Exception as e:
        return jsonify({'message': f'Server error: {str(e)}'}), 500

@app.route('/addRecord', methods=['POST'])
@token_required
def add_record(current_user_id):
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['date', 'time', 'shift', 'description']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'message': f'{field} is required'}), 400
        
        # Create new record
        new_record = Record(
            user_id=current_user_id,
            date=datetime.datetime.strptime(data['date'], '%Y-%m-%d').date(),
            time=data['time'],
            shift=data['shift'],
            description=data['description']
        )
        
        db.session.add(new_record)
        db.session.commit()
        
        return jsonify({
            'message': 'Record added successfully',
            'record_id': new_record.id
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': f'Server error: {str(e)}'}), 500

@app.route('/getRecords', methods=['GET'])
@token_required
def get_records(current_user_id):
    try:
        # Get all records for the current user, ordered by date and time
        records = Record.query.filter_by(user_id=current_user_id).order_by(
            Record.date.desc(), Record.created_at.desc()
        ).all()
        
        # Convert to dictionary
        records_list = []
        for record in records:
            records_list.append({
                'id': record.id,
                'date': record.date.strftime('%Y-%m-%d'),
                'time': record.time,
                'shift': record.shift,
                'description': record.description,
                'created_at': record.created_at.strftime('%Y-%m-%d %H:%M:%S')
            })
        
        return jsonify({
            'records': records_list
        }), 200
        
    except Exception as e:
        return jsonify({'message': f'Server error: {str(e)}'}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'message': 'DailyTrackr API is running'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
