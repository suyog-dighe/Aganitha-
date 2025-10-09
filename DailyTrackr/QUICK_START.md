# Quick Start Guide - DailyTrackr

## 🚀 Get Started in 5 Minutes

### Step 1: Setup PostgreSQL Database
```sql
-- Open PostgreSQL (psql or pgAdmin) and run:
CREATE DATABASE dailytrackr;
```

### Step 2: Start Backend (Terminal 1)
```bash
cd backend
python -m venv venv
venv\Scripts\activate          # Windows
pip install -r requirements.txt

# Create database tables using migrations
flask db init
flask db migrate -m "Initial migration"
flask db upgrade

# Start the server
python app.py
```
✅ Backend running at `http://localhost:5000`

### Step 3: Start Frontend (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend running at `http://localhost:5173`

### Step 4: Use the App
1. Open browser: `http://localhost:5173`
2. Register a new account
3. Login
4. Add daily records
5. View records table

## 📝 Default Database Config
- Host: localhost
- Port: 5432
- Database: dailytrackr
- User: postgres
- Password: postgres

**Update in `backend/app.py` if your PostgreSQL has different credentials**

## ⚡ Quick Commands

### Backend
```bash
cd backend
venv\Scripts\activate
python app.py
```

### Frontend
```bash
cd frontend
npm run dev
```

That's it! Happy tracking! 🎉
