<div align="center">
  <img src="lostpet101.webp" alt="LostPet101 Logo" width="600"/>
  
  # LostPet101
  
  ### 🐾 **A Free & Open-Source Platform for Reuniting Lost Pets with Their Families** 🐾
  
  [![Ruby](https://img.shields.io/badge/Ruby-3.2.0-red.svg)](https://www.ruby-lang.org/)
  [![Rails](https://img.shields.io/badge/Rails-7.0.4-red.svg)](https://rubyonrails.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue.svg)](https://www.postgresql.org/)
  [![License](https://img.shields.io/badge/License-Open%20Source-green.svg)](LICENSE)
  
  **Built with ❤️ by expert software engineers over 8 months of dedicated development**
  
</div>

---

## 🌟 Overview

**LostPet101** is a comprehensive, free, and open-source platform designed to help pet owners find their lost companions. This project represents a massive commitment to community service, combining cutting-edge technology with a heartfelt mission to reunite families with their beloved pets.

### Our Mission

Every pet deserves to find their way home. LostPet101 provides a complete solution for pet owners, offering:

-   **Free Lost & Found Pet Reports** - Create detailed reports with photos and information
-   **Free Printable Flyers** - Generate professional flyers instantly for distribution
-   **Community-Driven Search** - Connect with neighbors and community members
-   **Real-Time Updates** - Stay informed about potential matches
-   **Zero Cost** - Completely free for all users, forever

---

## ✨ Key Features

### 🎯 Core Functionality

-   **📝 Lost & Found Reports**

    -   Create detailed reports with pet information, photos, and location data
    -   Multi-step form wizard for easy report creation
    -   Support for multiple pet species (dogs, cats, birds, horses, rabbits, reptiles, ferrets, and more)
    -   Advanced search functionality with filters

-   **🖨️ Free Flyer Generation**

    -   **Instant flyer creation** with all pertinent information
    -   Print-ready format for distribution
    -   Professional design optimized for visibility
    -   **100% Free** - No hidden costs, no subscriptions

-   **👥 User Management**

    -   Secure authentication system
    -   User profiles with contact information
    -   Address management for location-based matching
    -   Password reset functionality

-   **💬 Communication Tools**

    -   Report requests for contacting pet owners
    -   Feedback system for community input
    -   Like/favorite functionality for tracking pets

-   **🔍 Advanced Search**

    -   Search by pet name, species, breed, color, size, and more
    -   Location-based filtering
    -   Real-time search results

-   **📱 Responsive Design**
    -   Mobile-first approach
    -   Works seamlessly on all devices
    -   Modern, intuitive user interface

---

## 🛠️ Technology Stack

### Backend

-   **Ruby on Rails 7.0.4** - The best full-stack framework for rapid, robust development
-   **Ruby 3.2.0** - Modern Ruby with performance improvements
-   **PostgreSQL** - Robust relational database
-   **Active Storage** - File upload and management
-   **AWS S3** - Scalable cloud storage for pet images
-   **Puma** - High-performance web server
-   **BCrypt** - Secure password hashing
-   **Rack CORS** - Cross-origin resource sharing

### Frontend

-   **React 18.2.0** - Modern UI library with hooks and concurrent features
-   **React Router 6.6.1** - Client-side routing
-   **Tailwind CSS 3.2.4** - Utility-first CSS framework
-   **React Hook Form** - Performant form management
-   **Axios** - HTTP client for API communication
-   **Redux Toolkit** - State management
-   **Formik & Yup** - Form validation
-   **Headless UI** - Accessible UI components

### Development Tools

-   **Docker** - Containerization for consistent development environments
-   **Solargraph** - Ruby language server
-   **ESLint & Prettier** - Code quality and formatting
-   **Faker** - Test data generation

---

## 🚀 Getting Started

### Prerequisites

-   Ruby 3.2.0
-   Rails 7.0.4
-   PostgreSQL
-   Node.js 16+ and npm/yarn
-   AWS S3 account (for image storage)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/lostpet101.git
    cd lostpet101
    ```

2. **Install Ruby dependencies**

    ```bash
    bundle install
    ```

3. **Install JavaScript dependencies**

    ```bash
    cd frontend
    npm install
    cd ..
    ```

4. **Set up the database**

    ```bash
    rails db:create
    rails db:migrate
    rails db:seed
    ```

5. **Configure environment variables**

    ```bash
    cp .env.example .env
    # Edit .env with your configuration
    ```

6. **Start the Rails server**

    ```bash
    rails server
    ```

7. **Start the React development server** (in a new terminal)
    ```bash
    cd frontend
    npm start
    ```

### Docker Setup (Alternative)

We provide Docker configurations for easy setup:

```bash
# Development environment
docker-compose -f docker/docker-compose.dev.yml up

# Production environment
docker-compose -f docker/docker-compose.prod.yml up
```

---

## 📁 Project Structure

```
lostpet101/
├── app/                    # Rails application
│   ├── controllers/        # API controllers
│   ├── models/            # Data models (User, Pet, Report, etc.)
│   └── views/             # View templates
├── config/                 # Rails configuration
│   ├── routes.rb          # API routes
│   └── database.yml       # Database configuration
├── db/                    # Database files
│   ├── migrate/          # Database migrations
│   └── schema.rb         # Database schema
├── frontend/              # React application
│   ├── src/
│   │   ├── app/          # Main application code
│   │   │   ├── features/ # Feature modules
│   │   │   └── pages/    # Page components
│   │   └── assets/       # Static assets
│   └── public/           # Public assets
├── docker/               # Docker configurations
└── script/              # Utility scripts
```

---

## 🎨 Features in Detail

### Report Creation Wizard

Our intuitive multi-step form guides users through creating comprehensive pet reports:

1. **Report Information** - Lost/Found status, date, location
2. **Pet Details** - Species, breed, color, size, age, description
3. **Preview & Submit** - Review and publish

### Flyer Generation

The flyer generation feature creates print-ready flyers with:

-   High-quality pet photos
-   All relevant information (name, breed, description, contact info)
-   Professional layout optimized for visibility
-   Instant download and printing capability

### Search & Discovery

-   Advanced filtering by multiple criteria
-   Location-based search
-   Real-time results
-   Save favorite pets for quick access

---

## 🤝 Contributing

We welcome contributions! This is an open-source project built for the community, by the community.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

-   Follow Ruby style guide for backend code
-   Use ESLint and Prettier for frontend code
-   Write tests for new features
-   Update documentation as needed
-   Be respectful and inclusive in all interactions

---

## 📝 API Documentation

### Authentication Endpoints

-   `POST /users/signup` - Create a new account
-   `POST /users/signin` - Sign in
-   `DELETE /users/signout` - Sign out
-   `POST /users/reset_password` - Request password reset
-   `PATCH /users/reset_password` - Reset password

### Report Endpoints

-   `GET /reports` - List all reports
-   `POST /reports` - Create a new report
-   `GET /reports/:id` - Get a specific report
-   `POST /reports/search` - Search reports
-   `PATCH /reports/:id` - Update a report
-   `DELETE /reports/:id` - Delete a report

### Pet Endpoints

-   `GET /pets` - List all pets
-   `GET /pets/:id` - Get a specific pet
-   `POST /pets/:pet_id/likes` - Like a pet
-   `DELETE /pets/:pet_id/likes` - Unlike a pet

---

## 🧪 Testing

```bash
# Run Rails tests
rails test

# Run React tests
cd frontend
npm test
```

---

## 📦 Deployment

### Production Deployment

1. Set up environment variables
2. Configure AWS S3 credentials
3. Set up PostgreSQL database
4. Build frontend assets: `cd frontend && npm run build`
5. Deploy using your preferred method (Heroku, AWS, DigitalOcean, etc.)

### Docker Production

```bash
docker-compose -f docker/docker-compose.prod.yml up -d
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

-   Built with dedication over 8 months by expert software engineers
-   Inspired by the need to help reunite pets with their families
-   Made possible by the open-source community
-   Special thanks to all contributors and users

---

## 📧 Contact & Support

-   **Issues**: [GitHub Issues](https://github.com/yourusername/lostpet101/issues)
-   **Discussions**: [GitHub Discussions](https://github.com/yourusername/lostpet101/discussions)
-   **Email**: [Your Email]

---

## 🌍 Impact

LostPet101 is more than just software—it's a commitment to helping families reunite with their beloved pets. Every feature, every line of code, and every flyer generated represents our dedication to making a positive impact in communities worldwide.

**Together, we can help bring every lost pet home.** 🏠❤️🐾

---

<div align="center">
  <p>Made with ❤️ for pets and their families</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
