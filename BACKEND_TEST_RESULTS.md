# Backend API Test Results - Gacha Simulator v3

This document summarizes the successful test results for the MERN backend API's `CREATE` and `READ` functionalities, conducted using a REST client (e.g., Postman/Insomnia).

## 1. CREATE Route Test (`POST /api/projects`)

**Request Details:**
-   **Method**: `POST`
-   **URL**: `http://localhost:3001/api/projects`
-   **Headers**: `Content-Type: application/json`
-   **Body Sent**:
    ```json
    {
        "title": "My First Project Log",
        "description": "Testing the CREATE endpoint for my MERN backend.",
        "status": "In Progress"
    }
    ```

**Response Received:**
-   **Status Code**: `201 Created`
-   **Body**:
    ```json
    {
        "title": "My First Project Log",
        "description": "Testing the CREATE endpoint for my MERN backend.",
        "status": "In Progress",
        "_id": "692d1ae70c8a093dcb54cebd",
        "createdAt": "2025-12-01T04:34:47.211Z",
        "__v": 0
    }
    ```

**Conclusion**: The `POST` request successfully created a new `ProjectLog` entry in the MongoDB database, returning the newly created document with its assigned `_id` and `createdAt` timestamp, as expected.

## 2. READ Route Test (`GET /api/projects`)

**Request Details:**
-   **Method**: `GET`
-   **URL**: `http://localhost:3001/api/projects`

**Response Received:**
-   **Status Code**: `200 OK`
-   **Body**:
    ```json
    [
        {
            "_id": "692d1ae70c8a093dcb54cebd",
            "title": "My First Project Log",
            "description": "Testing the CREATE endpoint for my MERN backend.",
            "status": "In Progress",
            "createdAt": "2025-12-01T04:34:47.211Z",
            "__v": 0
        }
    ]
    ```

**Conclusion**: The `GET` request successfully retrieved all `ProjectLog` entries from the MongoDB database, including the one created in the previous `POST` request. This demonstrates correct data persistence and retrieval.
