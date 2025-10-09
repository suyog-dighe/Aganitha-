@echo off
echo ========================================
echo DailyTrackr Backend Setup and Run
echo ========================================
echo.

echo Step 1: Installing dependencies...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Failed to install dependencies!
    pause
    exit /b 1
)
echo.

echo Step 2: Initializing database migrations...
flask db init
echo.

echo Step 3: Creating migration files...
flask db migrate -m "Initial migration with users and records tables"
if %errorlevel% neq 0 (
    echo Migration creation failed! Make sure PostgreSQL database 'dailytrackr' exists.
    pause
    exit /b 1
)
echo.

echo Step 4: Applying migrations to database...
flask db upgrade
if %errorlevel% neq 0 (
    echo Migration failed! Check database connection.
    pause
    exit /b 1
)
echo.

echo ========================================
echo Setup Complete! Starting Flask server...
echo ========================================
echo.

python app.py
