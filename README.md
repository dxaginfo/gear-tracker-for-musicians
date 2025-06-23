# Musician Gear Tracker

A comprehensive web application to help musicians, bands, and music professionals manage their equipment inventory.

![Musician Gear Tracker](https://via.placeholder.com/1200x600?text=Musician+Gear+Tracker)

## Overview

The Musician Gear Tracker is designed to address critical needs in equipment management, maintenance scheduling, and loss prevention by providing a digital solution to catalog instruments, track maintenance, monitor location, and share specifications with technicians or bandmates.

## Features

### Core Features

- **Digital Equipment Catalog**: Create detailed inventory of your gear including photos, serial numbers, purchase records, and custom specifications
- **Maintenance Scheduler**: Receive notifications when it's time to maintain your equipment based on usage and environmental conditions
- **Location Tracking**: Mark where each piece of equipment is stored or located and create packing lists for gigs
- **Sharing and Collaboration**: Share gear information with band members and generate tech riders with equipment specifications
- **Export and Reporting**: Generate PDF reports for insurance claims or export inventory lists to spreadsheets

### Advanced Features

- **Equipment Value Tracking**: Track the current market value of your vintage instruments and calculate depreciation
- **Maintenance Predictions**: Get AI-powered predictions for when your gear needs maintenance
- **Mobile Integration**: Scan barcodes/QR codes to quickly check equipment and access inventory offline

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI for UI components
- Chart.js for data visualization
- Formik with Yup for form validation
- PWA support with Workbox for offline functionality

### Backend
- Node.js with Express
- JWT authentication with OAuth 2.0 integration
- Prisma ORM
- AWS S3 for file storage
- Elasticsearch for advanced search
- Redis for caching

### Database
- PostgreSQL for relational data
- Elasticsearch for search indexing

### DevOps
- Docker and Docker Compose
- AWS (EC2, S3, RDS)
- CI/CD with GitHub Actions

## System Architecture

The application follows a modern microservices architecture with the following components:

1. **Client Layer**: Web application with mobile-responsive design and offline-first architecture
2. **API Gateway**: Handles routing, authentication, and rate limiting
3. **Service Layer**: Includes User, Inventory, Maintenance, Location, Collaboration, and Export services
4. **Data Layer**: PostgreSQL, Elasticsearch, Redis, and S3
5. **External Integrations**: Email service, OAuth providers, and cloud storage

## Installation and Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose
- PostgreSQL (v14 or higher)
- Redis

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/gear-tracker-for-musicians.git
   cd gear-tracker-for-musicians
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. Start the development environment:
   ```bash
   npm run dev
   ```

5. The application will be available at http://localhost:3000

### Docker Setup

1. Build and start the containers:
   ```bash
   docker-compose up -d
   ```

2. The application will be available at http://localhost:3000

## Deployment

### Production Deployment

1. Build the production application:
   ```bash
   npm run build
   ```

2. Deploy to AWS:
   ```bash
   npm run deploy
   ```

## API Documentation

API documentation is available at `/api/docs` when running the application.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

DX AG - dxag.info@gmail.com

Project Link: [https://github.com/dxaginfo/gear-tracker-for-musicians](https://github.com/dxaginfo/gear-tracker-for-musicians)