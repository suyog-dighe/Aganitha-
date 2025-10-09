# 🚀 START HERE - DailyTrackr

## Welcome to DailyTrackr!

This is your complete full-stack Daily Class Maintenance System built with React and PostgreSQL.

## ⚡ Quick Start (3 Steps)

### Step 1: Create Database
Open PostgreSQL and run:
```sql
CREATE DATABASE dailytrackr;
```

### Step 2: Start Backend (Terminal 1)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
✅ Backend will run on `http://localhost:5000`

### Step 3: Start Frontend (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```
✅ Frontend will run on `http://localhost:5173`

### Step 4: Open Browser
Go to `http://localhost:5173` and start using the app!

## 📚 Documentation

- **QUICK_START.md** - Fast setup guide (5 minutes)
- **SETUP_GUIDE.md** - Detailed setup with troubleshooting
- **FEATURES.md** - Complete feature list
- **PROJECT_STRUCTURE.md** - Code structure and architecture
- **README.md** - Project overview

## 🎯 What You Can Do

1. **Register** - Create account with name, email, mobile, password
2. **Login** - Access with email or mobile
3. **Add Records** - Save daily class records with date, time, shift, description
4. **View Records** - See all your records in a beautiful table

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- Tailwind CSS
- React Router
- Axios

**Backend:**
- Flask (Python)
- PostgreSQL
- JWT Authentication

## 📁 Project Structure

```
DailyTrackr/
├── backend/
│   ├── app.py              # Flask API
│   ├── requirements.txt    # Python packages
│   └── init_db.sql         # Database script
│
├── frontend/
│   ├── src/
│   │   ├── pages/          # Registration, Login, Dashboard, Records
│   │   ├── components/     # Layout
│   │   └── utils/          # API & Auth helpers
│   └── package.json        # Node packages
│
└── Documentation files
```

## 🎨 Features Included

✅ User Registration with validation
✅ Login with Email or Mobile
✅ JWT Authentication
✅ Add Daily Records (Date, Time, Shift, Description)
✅ View Records Table
✅ Beautiful Modern UI
✅ Responsive Design
✅ Persistent PostgreSQL Storage
✅ Protected Routes
✅ Error Handling

## 🔧 Configuration

### Database (backend/app.py)
Default PostgreSQL settings:
- Host: localhost
- Port: 5432
- Database: dailytrackr
- User: postgres
- Password: postgres

**Change these if your PostgreSQL has different credentials!**

### API URL (frontend/src/utils/api.js)
Default: `http://localhost:5000`

## 🎯 First Time Setup Checklist

- [ ] PostgreSQL installed and running
- [ ] Python 3.8+ installed
- [ ] Node.js 16+ installed
- [ ] Database created (`dailytrackr`)
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] Backend server running (port 5000)
- [ ] Frontend server running (port 5173)
- [ ] Browser opened to localhost:5173

## 🐛 Common Issues

**"Database connection failed"**
- Check PostgreSQL is running
- Verify database name is `dailytrackr`
- Update credentials in `backend/app.py` if needed

**"Module not found" (Backend)**
- Activate virtual environment: `venv\Scripts\activate`
- Install dependencies: `pip install -r requirements.txt`

**"Cannot find module" (Frontend)**
- Run: `npm install`

**CORS errors**
- Ensure backend is running on port 5000
- Check Flask-CORS is installed

## 📞 Need Help?

1. Check **SETUP_GUIDE.md** for detailed instructions
2. Check **FEATURES.md** to understand all features
3. Verify both servers are running
4. Check browser console for errors
5. Check terminal for backend errors

## 🎉 You're Ready!

Everything is set up and ready to use. Follow the Quick Start steps above and you'll be tracking your daily classes in minutes!

**Happy Tracking!** 📝✨

---

**Pro Tip:** Keep both terminal windows open while using the app - one for backend, one for frontend.
