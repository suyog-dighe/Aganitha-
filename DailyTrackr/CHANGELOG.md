# Changelog

## Version 1.1.0 - Updated Time Selection

### Changed
- **Dashboard Form**: Replaced time slot dropdown with separate Start Time and End Time inputs
  - Users now select start time using HTML5 time picker
  - Users now select end time using HTML5 time picker
  - Added validation: End time must be after start time
  - Time is stored in format: "HH:MM – HH:MM" (e.g., "08:00 – 09:00")

### Benefits
- More flexible time selection
- Users can choose any time, not limited to predefined slots
- Better user experience with native time pickers
- Automatic validation ensures logical time ranges

---

## Version 1.0.0 - Initial Release

### Features
- User registration with full validation
- Login with email or mobile number
- JWT authentication
- Add daily records (date, time, shift, description)
- View all records in table format
- PostgreSQL database with migrations
- Modern React + Tailwind CSS UI
- Flask backend with SQLAlchemy ORM
- Protected routes and session management

### Database
- Users table with hashed passwords
- Records table with foreign key to users
- Flask-Migrate for database migrations

### Security
- Password hashing with Werkzeug
- JWT tokens with 7-day expiry
- Protected API endpoints
- Input validation on frontend and backend
