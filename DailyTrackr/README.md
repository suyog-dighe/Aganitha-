# DailyTrackr - Daily Class Maintenance System

A full-stack web application for tracking daily classes and tasks with user authentication.

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS
- React Router DOM
- Axios for API calls

### Backend
- Flask (Python)
- PostgreSQL
- JWT Authentication
- Flask-CORS

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
venv\Scripts\activate  # Windows
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Configure PostgreSQL:
   - Create a database named `dailytrackr`
   - Update database credentials in `app.py` if needed

5. Run the Flask server:
```bash
python app.py
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev

Frontend will run on `http://localhost:5173`

## Features

- ✅ User Registration with validation
- ✅ Login page: Allow login via Email or Mobile and Password.
- ✅ Dashboard form:
  - Date Picker for selecting date.
  - Start Time input (time picker)
  - End Time input (time picker)
  - Shift Selection with values: Morning, Mid, Evening, Night.
  - Description input for class or activity name.
  - Submit button to save data permanently.
  - Validation: End time must be after start time.
- ✅ User login
- ✅ Add new daily record
- ✅ Get all user records

## Default Database Configuration
{{ ... }}
- Host: localhost
- Port: 5432
- Database: dailytrackr
- Username: postgres
- Password: postgres

Update these in `backend/app.py` as needed.
