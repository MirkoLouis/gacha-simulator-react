## Project Overview

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that simulates a "gacha" game mechanic. The project is structured into two main parts: a React frontend and a Node.js/Express backend.

-   **Frontend:** The frontend is a single-page application built with React and Vite. It interacts with the backend via a REST API to fetch data and perform actions. It uses `react-router-dom` for navigation.
-   **Backend:** The backend is a Node.js server using the Express framework. It connects to a MongoDB database using Mongoose to provide data persistence. It exposes a REST API for the frontend to consume.

The application allows users to perform "pulls" to receive items, simulating the gacha experience.

## Building and Running

To run this application, you need to run both the frontend and backend servers simultaneously in two separate terminals.

### Backend Server

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```
    MONGODB_URI=your_mongodb_connection_string
    ```
4.  **Start the server:**
    ```bash
    node server.js
    ```
    The backend API will be running on `http://localhost:3001`.

### Frontend Application

1.  **Navigate to the project root directory:**
    ```bash
    # (If you were in the backend directory)
    cd .. 
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The React application will open in your browser at `http://localhost:5173`.

### Key Scripts

**Frontend (`package.json`):**

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Builds the React application for production.
-   `npm run lint`: Runs the ESLint linter on the codebase.
-   `npm run preview`: Previews the production build locally.

**Backend (`backend/package.json`):**

-   There are no predefined scripts. Use `node server.js` to start the server.

## Development Conventions

-   **Structure:** The project is split into a `frontend` (root) and `backend` directory.
-   **Frontend Style:** The presence of `App.css` and `index.css` suggests standard CSS for styling. Components are organized in `src/components`.
-   **API:** The backend provides a RESTful API. Based on `backend/routes/projects.js`, endpoints are likely structured under `/api/...`.
-   **Linting:** ESLint is configured for the frontend to maintain code quality. Run `npm run lint` to check.
-   **Module System:** The frontend uses ES Modules (`"type": "module"`), while the backend uses CommonJS (`"type": "commonjs"`). This is a key distinction to be aware of when working on the different parts of the application.
