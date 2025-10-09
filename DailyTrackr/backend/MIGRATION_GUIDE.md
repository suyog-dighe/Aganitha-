# Database Migration Guide

## Using Flask-Migrate to Create Tables

Now the app uses Flask-Migrate for database migrations. Follow these steps:

### Step 1: Install New Dependencies

```bash
pip install Flask-Migrate Flask-SQLAlchemy
```

Or install all dependencies:
```bash
pip install -r requirements.txt
```

### Step 2: Initialize Migrations

```bash
flask db init
```

This creates a `migrations` folder.

### Step 3: Create Initial Migration

```bash
flask db migrate -m "Initial migration with users and records tables"
```

This generates migration files based on your models.

### Step 4: Apply Migration to Database

```bash
flask db upgrade
```

This creates the tables in your PostgreSQL database.

## Migration Commands Reference

### Create a new migration after model changes:
```bash
flask db migrate -m "Description of changes"
```

### Apply migrations:
```bash
flask db upgrade
```

### Rollback last migration:
```bash
flask db downgrade
```

### Show current migration version:
```bash
flask db current
```

### Show migration history:
```bash
flask db history
```

## What Changed

- ✅ Replaced raw psycopg2 with SQLAlchemy ORM
- ✅ Added Flask-Migrate for database migrations
- ✅ Models defined as Python classes (User, Record)
- ✅ No more manual SQL in code
- ✅ Automatic table creation via migrations
- ✅ Better database management

## Quick Start

1. Make sure PostgreSQL is running and database `dailytrackr` exists
2. Install dependencies: `pip install -r requirements.txt`
3. Initialize migrations: `flask db init`
4. Create migration: `flask db migrate -m "Initial migration"`
5. Apply migration: `flask db upgrade`
6. Run app: `python app.py`

Done! Tables are created and app is ready to use.
