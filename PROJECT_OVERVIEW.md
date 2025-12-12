# Project Overview: Gacha Simulator v3

## 1. Introduction

The Gacha Simulator v3 is a modern, full-stack **MERN (MongoDB, Express, React, Node.js)** web application. It is designed to emulate the popular "gacha" mechanics prevalent in many mobile games, now with a persistent backend to store data and a fully integrated frontend for comprehensive project management. This project serves a dual purpose: to provide an entertaining simulation platform for users and to act as a robust learning tool for developers interested in full-stack web development with complete CRUD (Create, Read, Update, Delete) capabilities.

## 2. Architecture

The application follows a standard monorepo structure with a decoupled frontend and backend, promoting modularity and independent development.

### 2.1 Frontend Architecture (React + Vite)

The frontend is a component-based React application, promoting reusability and maintainability. It is responsible for rendering the user interface and interacting with the backend API to perform all CRUD operations on project data.

-   **`src/`**: Contains all the React source code.
-   **`components/`**: Houses reusable UI components (e.g., `Header.jsx`, `NavBar.jsx`).
-   **`pages/`**: Contains top-level components that represent different views or routes of the application (e.g., `HomePage.jsx`, `LoginPage.jsx`, `ProjectList.jsx` which now handles full project CRUD).
-   **`apiConfig.js`**: Centralized configuration for the backend API URL, allowing easy switching between development and deployed environments.

### 2.2 Backend Architecture (Node.js + Express)

The backend is a Node.js application using the Express framework, located in the `backend/` directory. It exposes a RESTful API to handle all data operations for the frontend.

-   **`server.js`**: The main entry point for the Express server. It sets up the database connection, middleware (including CORS), and defines API routes.
-   **`models/`**: This directory holds Mongoose schemas. `ProjectLog.js` defines the structure for data stored in MongoDB, now supporting all CRUD operations.
-   **`routes/`**: This directory organizes the API route handlers. `projects.js` defines the endpoints for **all CRUD operations (Create, Read, Update, Delete)** on `ProjectLog` data.
-   **`.env`**: A file to securely store environment variables, such as the `MONGODB_URI` connection string.

### 2.3 Data Flow (Full CRUD)

The application now supports a complete full-stack data flow for project management:

1.  **User Action (Create/Update/Delete)**: A user action in a React component (e.g., submitting a form, clicking an "Update Status" or "Delete" button) triggers an API call, typically using `fetch`.
2.  **API Request**: The frontend sends an HTTP request (e.g., `POST /api/projects`, `GET /api/projects/:id`, `PATCH /api/projects/:id`, `DELETE /api/projects/:id`) to the backend.
3.  **Backend Processing**: The Express server receives the request, and the corresponding route handler in `backend/routes/projects.js` processes it.
4.  **Database Interaction**: The route handler uses the Mongoose `ProjectLog` model to perform the requested operation on the MongoDB database (e.g., creating a new document, finding a document, updating a document, or deleting a document).
5.  **API Response**: The server sends a JSON response back to the frontend, indicating success or failure and returning any relevant data (e.g., the newly created or updated project).
6.  **Frontend Update**: The React application updates its local state based on the API response, causing the UI to re-render and display the new data instantly, providing a seamless user experience.

## 3. Technologies Used

-   **Frontend**:
    -   **React (JavaScript/JSX)**: The core library for building the user interface.
    -   **Vite**: A fast build tool and development server for the frontend.
    -   **CSS**: For styling the application, including responsive design.
    -   **React Router DOM**: For client-side routing.
-   **Backend**:
    -   **Node.js**: The JavaScript runtime environment for the server.
    -   **Express.js**: A web framework for building the backend API.
    -   **Mongoose**: An Object Data Modeling (ODM) library for MongoDB, used for schema definition and database interaction.
-   **Database**:
    -   **MongoDB Atlas**: A cloud-hosted MongoDB database service for persistent data storage.
-   **General**:
    -   **npm**: For package management in both frontend and backend.
    -   **dotenv**: To manage environment variables in the backend.
    -   **cors**: To handle Cross-Origin Resource Sharing between the frontend and backend.
    -   **ESLint**: For maintaining code quality and consistency.

## 4. How Everything Works (High-Level)

1.  **Initialization**: Both the frontend (using `npm run dev`) and backend (using `node server.js`) servers are started in separate terminals.
2.  **Frontend Rendering**: The React app, served by Vite, renders the user interface in the browser.
3.  **Full CRUD Interaction**:
    *   **Read**: Upon navigating to the `/projects` route, the frontend automatically fetches and displays all existing project logs from the backend. A `ProjectDetail` page can fetch a single project by ID.
    *   **Create**: Users can input a project title and description into a form, which sends a `POST` request to the backend. The new project then instantly appears in the list.
    *   **Update**: Users can change the status of a project by clicking a button, sending a `PATCH` request to the backend. The UI updates immediately.
    *   **Delete**: Users can remove a project from the list by clicking a "Delete" button, sending a `DELETE` request to the backend. The project is instantly removed from the UI.
4.  **Backend Logic**: The Express server, listening on port 3001, receives API calls for all CRUD operations. Route handlers validate requests and interact with the MongoDB Atlas database via Mongoose models.
5.  **Data Persistence**: All project data is stored permanently and managed in the MongoDB collection.
6.  **UI Update**: The frontend receives responses from the backend and efficiently updates its local state, reflecting all changes in the user interface without full page reloads.

## 5. Potential Enhancements & Future Directions

-   **Advanced State Management**: Explore libraries like Redux Toolkit or Zustand for more complex and scalable state management.
-   **User Authentication**: Implement a full authentication system using JWT or a similar technology.
-   **Testing Frameworks**: Add a comprehensive testing suite for both frontend and backend.
-   **Theming**: Add support for different themes or dark mode.
-   **Filtering/Sorting**: Implement features to filter and sort the project list.
-   **Project Edit Functionality**: Beyond status change, allow full editing of project title and description.

This overview provides a foundational understanding of the Gacha Simulator v3 project, its structure, underlying technologies, and operational principles.
