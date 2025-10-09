# DailyTrackr Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Python 3.8+** - [Download Python](https://www.python.org/downloads/)
- **Node.js 16+** and npm - [Download Node.js](https://nodejs.org/)
- **PostgreSQL 12+** - [Download PostgreSQL](https://www.postgresql.org/download/)

## Step-by-Step Setup

### 1. PostgreSQL Database Setup

1. **Start PostgreSQL service** (if not already running)

2. **Create the database:**
   - Open PostgreSQL command line (psql) or pgAdmin
   - Run the following command:
   ```sql
   CREATE DATABASE dailytrackr;
   ```

3. **Verify database creation:**
   ```sql
   \l
   ```
   You should see `dailytrackr` in the list.

### 2. Backend Setup (Flask)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Configure environment variables:**
   - Copy `.env.example` to create `.env` file
   - Update database credentials if needed:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=dailytrackr
   DB_USER=postgres
   DB_PASSWORD=your_postgres_password
   JWT_SECRET_KEY=your-secret-key-here
   ```

6. **Run the Flask server:**
   ```bash
   python app.py
   ```
   
   The backend will start on `http://localhost:5000`
   
   **Note:** On first run, the database tables will be created automatically.

### 3. Frontend Setup (React + Vite)

1. **Open a new terminal** and navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The frontend will start on `http://localhost:5173`

### 4. Access the Application

1. Open your browser and go to: `http://localhost:5173`
2. You'll be redirected to the Login page
3. Click "Register here" to create a new account
4. Fill in all required fields and register
5. Login with your credentials
6. Start adding daily records!

## Troubleshooting

### Database Connection Issues

**Error: "Database connection failed"**
- Verify PostgreSQL is running
- Check database credentials in `.env` file
- Ensure the `dailytrackr` database exists
- Test connection:
  ```bash
  psql -U postgres -d dailytrackr
  ```

### Backend Issues

**Error: "Module not found"**
- Ensure virtual environment is activated
- Reinstall dependencies:
  ```bash
  pip install -r requirements.txt
  ```

**Port 5000 already in use:**
- Change the port in `app.py`:
  ```python
  app.run(debug=True, host='0.0.0.0', port=5001)
  ```
- Update API_BASE_URL in `frontend/src/utils/api.js`

### Frontend Issues

**Error: "Cannot find module"**
- Delete `node_modules` and reinstall:
  ```bash
  rm -rf node_modules
  npm install
  ```

**CORS errors:**
- Ensure Flask-CORS is installed
- Backend should be running on port 5000
- Check API_BASE_URL in `frontend/src/utils/api.js`

## Testing the Application

### Test Registration
1. Go to Registration page
2. Fill all fields:
   - Name: Test User
   - Email: test@example.com
   - Mobile: 1234567890
   - Password: test123
   - Confirm Password: test123
3. Click "Create Account"

### Test Login
1. Use registered email or mobile
2. Enter password
3. Click "Login"

### Test Adding Records
1. Select a date
2. Choose a time slot
3. Select a shift (Morning/Mid/Evening/Night)
4. Enter description
5. Click "Save Record"

### Test Viewing Records
1. Click "Records" in navigation
2. View all saved records in table format

## Production Deployment Notes

### Backend
- Set `FLASK_ENV=production` in `.env`
- Use a production WSGI server like Gunicorn:
  ```bash
  pip install gunicorn
  gunicorn -w 4 -b 0.0.0.0:5000 app:app
  ```
- Use environment variables for sensitive data
- Enable HTTPS

### Frontend
- Build for production:
  ```bash
  npm run build
  ```
- Serve the `dist` folder using a web server (Nginx, Apache, etc.)
- Update API_BASE_URL to production backend URL

### Database
- Use strong passwords
- Enable SSL connections
- Regular backups
- Set up proper user permissions

## Default Credentials for Testing

After setup, you can create a test account with:
- Email: admin@dailytrackr.com
- Mobile: 9876543210
- Password: admin123

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Ensure both backend and frontend servers are running
4. Check browser console for frontend errors
5. Check terminal for backend errors

## Features Checklist

✅ User Registration with validation
✅ Login with Email or Mobile
✅ JWT Authentication
✅ Protected Routes
✅ Add Daily Records
✅ View Records Table
✅ Persistent PostgreSQL Storage
✅ Modern UI with Tailwind CSS
✅ Responsive Design
✅ Form Validation
✅ Error Handling
✅ Success Messages
✅ Logout Functionality

Enjoy using DailyTrackr! 🎉
