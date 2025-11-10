# E-Commerce Frontend Application

A modern, feature-rich e-commerce frontend built with React, Redux Toolkit, and Tailwind CSS. This application provides a complete shopping experience with user and admin dashboards, product management, order tracking, and payment integration.

## Features

### User Features
- 🛍️ Browse and search products
- 🛒 Cart management with real-time updates
- 💳 Secure payment processing with Stripe
- 📦 Order tracking and history
- ⭐ Product reviews and ratings
- 👤 User profile management
- 📱 Responsive design for all devices

### Admin Features
- 📊 Admin dashboard with sales statistics
- 📦 Product management (Add, Edit, Delete)
- 👥 User management
- 📋 Order management and tracking
- 📈 Sales analytics with charts
- 🖼️ Image upload functionality

## Tech Stack

- **Frontend Framework:** React 18
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Charts:** Chart.js with react-chartjs-2
- **Forms:** React Hook Form
- **Payment:** Stripe Integration
- **Build Tool:** Vite
- **Icons:** Remixicon
- **Notifications:** SweetAlert2

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nh246/lebaba_front.git
cd lebaba_front
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Application pages and routes
│   ├── blogs/        # Blog related pages
│   ├── category/     # Category pages
│   ├── dashboard/    # Admin and user dashboards
│   ├── home/        # Home page components
│   └── shop/        # Shop related pages
├── redux/           # Redux store and slices
├── routes/          # Route configurations
└── utils/           # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped with the development
- Special thanks to the React and Redux team for the amazing tools
- Tailwind CSS team for the awesome styling framework
