# DailyTrackr - Project Structure

## 📁 Complete Directory Structure

```
DailyTrackr/
│
├── backend/                          # Flask Backend
│   ├── app.py                        # Main Flask application
│   ├── requirements.txt              # Python dependencies
│   ├── .env.example                  # Environment variables template
│   ├── .gitignore                    # Git ignore file
│   └── init_db.sql                   # Database initialization script
│
├── frontend/                         # React Frontend
│   ├── public/                       # Public assets
│   ├── src/
│   │   ├── components/
│   │   │   └── Layout.jsx            # Main layout with navigation
│   │   ├── pages/
│   │   │   ├── Registration.jsx      # User registration page
│   │   │   ├── Login.jsx             # User login page
│   │   │   ├── Dashboard.jsx         # Add records page
│   │   │   └── Records.jsx           # View records table
│   │   ├── utils/
│   │   │   ├── api.js                # Axios API configuration
│   │   │   └── auth.js               # Authentication utilities
│   │   ├── App.jsx                   # Main App component with routing
│   │   ├── main.jsx                  # React entry point
│   │   └── index.css                 # Global styles with Tailwind
│   ├── index.html                    # HTML template
│   ├── package.json                  # Node dependencies
│   ├── vite.config.js                # Vite configuration
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration
│   └── .gitignore                    # Git ignore file
│
├── README.md                         # Project overview
├── SETUP_GUIDE.md                    # Detailed setup instructions
├── QUICK_START.md                    # Quick start guide
└── PROJECT_STRUCTURE.md              # This file
```

## 🗄️ Database Schema

### Users Table
```sql
users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mobile VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

### Records Table
```sql
records (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    time VARCHAR(50) NOT NULL,
    shift VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
```

## 🔌 API Endpoints

### Authentication
- **POST** `/register` - Register new user
  - Body: `{ name, email, mobile, password, confirmPassword }`
  - Response: `{ message, user_id }`

- **POST** `/login` - User login
  - Body: `{ identifier, password }`
  - Response: `{ message, token, user }`

### Records (Protected - Requires JWT Token)
- **POST** `/addRecord` - Add new record
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ date, time, shift, description }`
  - Response: `{ message, record_id }`

- **GET** `/getRecords` - Get all user records
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ records: [...] }`

### Health Check
- **GET** `/health` - Check API status
  - Response: `{ status, message }`

## 🎨 Frontend Routes

- `/` - Redirects to login
- `/register` - Registration page (public)
- `/login` - Login page (public)
- `/dashboard` - Add records page (protected)
- `/records` - View records table (protected)

## 🔐 Authentication Flow

1. User registers with all required fields
2. Password is hashed using Werkzeug
3. User logs in with email/mobile and password
4. Backend generates JWT token (7-day expiry)
5. Token stored in localStorage
6. Token sent with every API request in Authorization header
7. Backend validates token for protected routes
8. On logout, token removed from localStorage

## 📦 Key Dependencies

### Backend
- **Flask** - Web framework
- **Flask-CORS** - Cross-origin resource sharing
- **psycopg2-binary** - PostgreSQL adapter
- **PyJWT** - JWT token handling
- **Werkzeug** - Password hashing

### Frontend
- **React** - UI library
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 🎯 Key Features

### Registration Page
- ✅ Name validation (required)
- ✅ Email validation (format + required)
- ✅ Mobile validation (10 digits + required)
- ✅ Password validation (min 6 chars + required)
- ✅ Confirm password match validation
- ✅ Duplicate email/mobile check
- ✅ Real-time error display

### Login Page
- ✅ Login with email OR mobile
- ✅ Password authentication
- ✅ JWT token generation
- ✅ Session persistence
- ✅ Auto-redirect if logged in

### Dashboard
- ✅ Date picker
- ✅ Time slot dropdown (17 options)
- ✅ Shift selection (Morning/Mid/Evening/Night)
- ✅ Description textarea
- ✅ Form validation
- ✅ Success/error messages
- ✅ Auto-clear form on success

### Records Page
- ✅ Table view of all records
- ✅ Sorted by date (newest first)
- ✅ Shift icons with colors
- ✅ Formatted dates
- ✅ Loading states
- ✅ Empty state message
- ✅ Record count display

### Layout & Navigation
- ✅ Responsive navbar
- ✅ Active route highlighting
- ✅ User name display
- ✅ Logout functionality
- ✅ Protected routes
- ✅ Modern gradient background

## 🎨 UI/UX Features

- Modern gradient backgrounds
- Smooth transitions and hover effects
- Icon-based navigation
- Color-coded shifts
- Responsive design
- Loading spinners
- Error/success notifications
- Clean card-based layouts
- Accessible form inputs
- Mobile-friendly tables

## 🔒 Security Features

- Password hashing (Werkzeug)
- JWT token authentication
- Token expiry (7 days)
- Protected API routes
- CORS configuration
- SQL injection prevention (parameterized queries)
- Input validation (frontend + backend)
- Unique email/mobile constraints

## 📊 Data Persistence

- All data stored in PostgreSQL
- No auto-deletion
- Cascade delete (records deleted when user deleted)
- Indexed columns for performance
- Timestamp tracking (created_at)

## 🚀 Deployment Ready

- Environment variable configuration
- Production build scripts
- Git ignore files
- Separated frontend/backend
- Database initialization script
- Comprehensive documentation

---

**Built with ❤️ for efficient daily class tracking**
