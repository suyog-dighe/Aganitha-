# Complete Setup Instructions - DailyTrackr

## ✅ What's Been Done

1. ✅ Backend created with Flask + SQLAlchemy + Flask-Migrate
2. ✅ Frontend created with React + Vite + Tailwind CSS
3. ✅ All pages implemented (Registration, Login, Dashboard, Records)
4. ✅ JWT authentication configured
5. ✅ Database models defined (User, Record)
6. ✅ Migration system set up

## 🚀 Complete Setup Steps

### Prerequisites
- PostgreSQL installed and running
- Python 3.8+ installed
- Node.js 16+ installed

---

### STEP 1: Create PostgreSQL Database

Open PostgreSQL (psql or pgAdmin) and run:
```sql
CREATE DATABASE dailytrackr;
```

---

### STEP 2: Backend Setup

Open Terminal 1 in the `backend` folder:

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment (Windows)
venv\Scripts\activate

# Install all dependencies
pip install -r requirements.txt
```

**Expected output:** All packages installed successfully including:
- Flask
- Flask-CORS
- Flask-Migrate
- Flask-SQLAlchemy
- psycopg2-binary
- PyJWT
- python-dotenv
- Werkzeug

---

### STEP 3: Run Database Migrations

Still in the `backend` folder with virtual environment activated:

```bash
# Initialize migrations (creates migrations folder)
flask db init

# Create migration files from models
flask db migrate -m "Initial migration with users and records tables"

# Apply migrations to database (creates tables)
flask db upgrade
```

**Expected output:**
- `migrations` folder created
- Migration files generated
- Tables `users` and `records` created in PostgreSQL

---

### STEP 4: Start Backend Server

```bash
python app.py
```

**Expected output:**
```
 * Running on http://0.0.0.0:5000
 * Restarting with stat
 * Debugger is active!
```

✅ **Backend is now running on http://localhost:5000**

---

### STEP 5: Frontend Setup

Open Terminal 2 in the `frontend` folder:

```bash
cd frontend

# Install dependencies
npm install
```

**Expected output:** All packages installed including:
- react
- react-dom
- react-router-dom
- axios
- lucide-react
- tailwindcss
- vite

---

### STEP 6: Start Frontend Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

✅ **Frontend is now running on http://localhost:5173**

---

### STEP 7: Use the Application

1. Open browser: **http://localhost:5173**
2. You'll see the Login page
3. Click **"Register here"**
4. Fill in all fields:
   - Name: Your Name
   - Email: your@email.com
   - Mobile: 1234567890
   - Password: password123
   - Confirm Password: password123
5. Click **"Create Account"**
6. You'll be redirected to Login
7. Login with your email/mobile and password
8. You're now on the **Dashboard**
9. Add a daily record:
   - Select date
   - Choose time slot
   - Pick shift (Morning/Mid/Evening/Night)
   - Enter description
   - Click "Save Record"
10. Click **"Records"** in navigation to see all your records

---

## 🎯 Quick Commands Reference

### Backend (Terminal 1)
```bash
cd backend
venv\Scripts\activate
python app.py
```

### Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

---

## 🔧 Troubleshooting

### "ModuleNotFoundError: No module named 'flask'"
- Make sure virtual environment is activated
- Run: `pip install -r requirements.txt`

### "Database connection failed"
- Check PostgreSQL is running
- Verify database `dailytrackr` exists
- Check credentials in `.env` file (or use defaults)

### "Migration failed"
- Make sure database exists
- Check database connection
- Try: `flask db stamp head` then `flask db migrate` again

### Frontend errors
- Delete `node_modules` and run `npm install` again
- Make sure backend is running on port 5000

---

## 📁 What You Have

### Backend Files
- `app.py` - Main Flask application with SQLAlchemy models
- `requirements.txt` - Python dependencies
- `migrations/` - Database migration files (created after `flask db init`)
- `.env.example` - Environment variables template

### Frontend Files
- `src/pages/Registration.jsx` - User registration
- `src/pages/Login.jsx` - User login
- `src/pages/Dashboard.jsx` - Add records
- `src/pages/Records.jsx` - View records table
- `src/components/Layout.jsx` - Navigation layout
- `src/utils/api.js` - API configuration
- `src/utils/auth.js` - Authentication helpers

---

## ✨ Features Working

✅ User registration with validation
✅ Login with email OR mobile
✅ JWT token authentication
✅ Protected routes
✅ Add daily records (date, time, shift, description)
✅ View all records in table
✅ Beautiful modern UI
✅ Responsive design
✅ Persistent PostgreSQL storage
✅ Database migrations

---

## 🎉 You're All Set!

Both servers should be running:
- Backend: http://localhost:5000
- Frontend: http://localhost:5173

Open the frontend URL in your browser and start using DailyTrackr!

---

## 📝 Notes

- Keep both terminal windows open while using the app
- Virtual environment must be activated for backend
- Database must be running for the app to work
- All data is permanently stored in PostgreSQL
- Use `Ctrl+C` to stop servers when done
