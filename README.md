# 🎸 Musician Gear Tracker

A comprehensive web application for musicians, bands, and music professionals to manage their equipment inventory, track maintenance, monitor locations, and share specifications.

## 🚀 Features

- **Digital Equipment Catalog**: Create detailed inventory of your gear with specs, images, and documents
- **Maintenance Scheduler**: Set reminders based on usage and track maintenance history
- **Location Tracking**: Know where each piece of equipment is stored or being used
- **Value Tracking**: Monitor current market value and depreciation
- **Sharing & Collaboration**: Share gear information with band members and technicians
- **Export & Reporting**: Generate PDF reports and tech riders

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI components
- Chart.js for data visualization
- PWA support with Workbox

### Backend
- Node.js with Express
- JWT authentication with OAuth 2.0
- Prisma ORM with PostgreSQL
- AWS S3 for file storage
- Elasticsearch for advanced search
- Redis for caching

### DevOps
- Docker and Docker Compose
- AWS deployment (EC2, S3, RDS)
- CI/CD with GitHub Actions

## 📋 Requirements

- Node.js (v18+)
- Docker and Docker Compose
- PostgreSQL (or use Docker container)
- Redis (or use Docker container)

## 🔧 Local Development Setup

### Using Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/gear-tracker-for-musicians.git
   cd gear-tracker-for-musicians
   ```

2. Start the Docker environment:
   ```bash
   docker-compose up -d
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379
   - Elasticsearch: localhost:9200

### Manual Setup

#### Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (copy `.env.example` to `.env` and update values)

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

#### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## 📚 API Documentation

API documentation is available at http://localhost:5000/api-docs when running in development mode.

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 📦 Deployment

### Production Deployment

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to AWS:
   ```bash
   # Using provided scripts
   npm run deploy:prod
   ```

### Staging Deployment

```bash
npm run deploy:staging
```

## 🔐 Security Considerations

- All API endpoints are secured with JWT authentication
- Passwords are hashed using bcrypt
- HTTPS is enforced in production
- Input validation and sanitization is implemented
- Rate limiting is applied to prevent abuse

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📊 Project Structure

```
musician-gear-tracker/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # API controllers
│   │   ├── middleware/      # Express middleware
│   │   ├── models/          # Data models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   └── index.js         # Entry point
│   ├── prisma/              # Prisma ORM schema and migrations
│   └── tests/               # Backend tests
├── frontend/                # React.js frontend
│   ├── public/              # Static files
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   ├── store/           # Redux store
│   │   ├── utils/           # Utility functions
│   │   └── App.tsx          # Root component
│   └── tests/               # Frontend tests
├── docs/                    # Documentation
├── .github/                 # GitHub Actions workflows
├── docker-compose.yml       # Docker Compose configuration
└── README.md                # Project documentation
```

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the team at support@musiciantracker.com.

---

Made with ❤️ for musicians everywhere