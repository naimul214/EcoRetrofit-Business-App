# EcoRetrofit-AI

An AI-driven energy optimization platform designed to reduce the carbon footprint and operational costs of commercial buildings in Canada. Built as part of the INFT 42000 Business Application of AI Capstone.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Email API**: Resend SDK
- **Styling**: Tailwind CSS (Apple-Inspired Dark Mode UI)

## Features

- **Lead Generation**: Premium, glassmorphic contact forms tailored for property managers.
- **Transactional Emails**: Automated, branded welcome emails triggered via Resend upon form submission.
- **Data Persistence**: Robust PostgreSQL database schema managing Clients, Buildings, Energy Readings, and ESG Reports.
- **Responsive Design**: Fluid, mobile-friendly interface built with strict accessibility and aesthetic standards.

## Getting Started

### Prerequisites

- **Docker Desktop** - Everything runs in containers.
- Git

### Quick Start (Docker)

1. **Clone the repository**
```bash
git clone [https://github.com/naimul214/EcoRetrofit-Business-App]
cd EcoRetrofit-Business-App
```

2. **Set up environment variables**
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/capstone_db"
RESEND_API_KEY="re_yourApiKeyHere"
RESEND_FROM_EMAIL="onboarding@resend.dev"
```

3. **Build and run everything with Docker**
```bash
docker compose up --build -d
```

4. **Set up the database**
```bash
docker compose exec app npx prisma db push
```

5. **Open the app**
Visit http://localhost:3000

### Alternative: Local Development

If you prefer hot-reload for faster development in your VS Code environment:

```bash
# Start only the database in Docker
docker compose up db -d

# Install dependencies locally
npm install

# Set up database
npx prisma migrate dev

# Run with hot-reload
npm run dev
```

## Database Schema (EcoRetrofit Core Models)

- **Client**: Property managers and sustainability consultants.
- **Building**: Commercial real estate profiles linked to clients.
- **EnergyReading**: Timeseries data for HVAC and lighting consumption.
- **MaintenanceAlert**: System-generated warnings for facility management.
- **EsgReport**: Aggregated carbon reduction metrics.

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/contact` | Creates a new Client record and triggers Resend welcome email |

## License

Developed for educational purposes - Durham College INFT 42000 Business Application of AI.