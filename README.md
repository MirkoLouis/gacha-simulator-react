# Gacha Simulator v3 (MERN Stack)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-3.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A modern, full-stack MERN (MongoDB, Express, React, Node.js) application designed to simulate the popular "gacha" mechanic with a persistent backend and comprehensive project management features.

## Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Installation](#installation)
- [Quick Start / Usage](#quick-start--usage)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Authors & Acknowledgments](#authors--acknowledgments)
- [Support & Contact](#support--contact)

## Description

The Gacha Simulator v3 is a full-stack web application designed to simulate the "gacha" mechanic found in many mobile games. It provides users with a platform to experience the thrill of pulling for rare characters or items, with data persistence handled by a Node.js backend and MongoDB database. This project now features complete CRUD (Create, Read, Update, Delete) functionality for project management, making it an excellent example of a modern MERN stack application with comprehensive interactivity.

### Key Features

- **Full MERN Stack**: A complete frontend and backend implementation.
- **REST API**: A Node.js and Express backend provides API endpoints for **all CRUD operations** (Create, Read, Update, Delete) for project logs.
- **Persistent Data**: User data and gacha results are stored in a MongoDB Atlas cloud database. Project logs are also persistently stored and managed.
- **Comprehensive Project Management**: Users can create, view, update the status of, and delete project entries through a responsive and intuitive UI.
- **Interactive Gacha Pulls:** Simulate single and multi-pulls with engaging animations.
- **Responsive Design:** Enjoy a seamless experience across various devices and screen sizes.

## Installation

### Prerequisites

- **Node.js:** v18.x or higher
- **npm:** v9.x or higher

### Step-by-step installation instructions

You need to install dependencies for both the frontend (React) and the backend (Node.js).

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gacha-simulator-v3.git
    cd gacha-simulator-v3
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    # This installs dependencies for the React app (in the root directory)
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    # Navigate to the backend directory and install its dependencies
    cd backend
    npm install
    cd ..
    ```

## Quick Start / Usage

To run the full application, you must start both the backend server and the frontend development server. This will require two separate terminals.

### Terminal 1: Start the Backend Server

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  (First time only) Create a `.env` file and add your `MONGODB_URI`. See the [Configuration](#configuration) section for details.
3.  Start the server:
    ```bash
    node server.js
    ```
    Your backend API should now be running on `http://localhost:3001`.

### Terminal 2: Start the Frontend App

1.  In a new terminal, from the project root directory, run:
    ```bash
    npm run dev
    ```
    This should open the React application in your browser, typically at `http://localhost:5173`.

## Configuration

### Backend Environment Variables

The backend requires a `.env` file for configuration.

1.  Create a file named `.env` inside the `backend/` directory.
2.  Add the following line, replacing the placeholder with your actual MongoDB Atlas connection string:
    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-uri>/<database-name>?retryWrites=true&w=majority
    ```

### Frontend Environment Variables (for Deployment)

For deploying the frontend, you'll need to configure the API endpoint.

1.  When deploying your frontend (e.g., to Vercel or Netlify), set an environment variable:
    ```
    VITE_API_URL=https://your-deployed-backend-url.com
    ```
    Replace `https://your-deployed-backend-url.com` with the actual URL of your deployed backend API.

## Development

### How to set up development environment

The development environment is set up by following the [Installation](#installation) steps.

### How to run tests

-   **Backend**: (Test suite not yet implemented)
-   **Frontend**: `npm test`

### How to build the project

-   **Backend**: No build step is necessary for this Node.js application.
-   **Frontend**: To build the React app for production, run `npm run build` from the root directory. This will compile the application into the `dist` directory.

### Contributing Guidelines Link

Please refer to `CONTRIBUTING.md` (if available) for detailed guidelines.

## Testing

You can test the backend API endpoints using a REST client like Postman or Insomnia. See `BACKEND_SETUP_GUIDE.md` for detailed instructions.

-   **`POST /api/projects`**: Creates a new project log.
-   **`GET /api/projects`**: Retrieves all project logs (and by ID).
-   **`PATCH /api/projects/:id`**: Updates an existing project log.
-   **`DELETE /api/projects/:id`**: Deletes a project log.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they adhere to the project's coding standards.
4.  Write or update tests for your changes.
5.  Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors & Acknowledgments

-   **Your Name/Organization:** Initial development and core contributions.
-   **Vite:** For the excellent frontend tooling.
-   **React:** For the UI library.
-   **Node.js, Express, Mongoose**: For the backend API framework.

## Support & Contact

If you encounter any issues or have questions, please feel free to:

-   **Open an issue:** Visit the [Issue Tracker](https://github.com/your-username/gacha-simulator-v3/issues) to report bugs or suggest features.
-   **Email:** contact@example.com (replace with actual contact info)