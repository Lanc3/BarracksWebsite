# Database Setup Instructions

## 1. Start PostgreSQL with Docker

Make sure Docker Desktop is installed and running, then:

```bash
docker compose up -d
```

This starts a PostgreSQL container with:
- **Host**: localhost
- **Port**: 5432
- **Database**: barracks_db
- **User**: barracks
- **Password**: barracks_dev_password

## 2. Create .env file

Create a `.env` file in the project root with:

```env
DATABASE_URL="postgresql://barracks:barracks_dev_password@localhost:5432/barracks_db?schema=public"
SESSION_SECRET="replace_this_with_a_64_char_random_string_for_production_use_only"
```

Generate a secure SESSION_SECRET for production:
```bash
openssl rand -base64 48
```

## 3. Run Database Migrations

```bash
yarn rw prisma migrate dev --name initial_setup
```

## 4. Seed the Database

```bash
yarn rw prisma db seed
```

## 5. Start the Dev Server

```bash
yarn rw dev
```

## Admin Access

After seeding, log in with:
- **Email**: admin@barracks.local
- **Password**: admin123

Then navigate to `/admin/drinks` to manage the drinks menu.
