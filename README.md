# MERN Starter Code Project

## Description

This project serves as a comprehensive starter code for building applications using the MERN stack (MongoDB, Express.js, React, and Node.js). It features a secure authentication system using bcrypt-encrypted JWTs and dynamic routing with the latest version of React Router. Designed to be scalable and easy to adapt, this starter code includes a basic implementation of a car management system as an example.

## Features

-   **MERN Stack**: Full setup for MongoDB, Express.js, React, and Node.js.
-   **Authentication**: Secure login and registration system using bcrypt-encrypted JWTs.
-   **React Router**: Dynamic client-side routing with the latest React Router.
-   **Protected Routes**: Frontend routing includes private routes accessible only to authenticated users.
-   **Data Loading**: Example of route-based data loading in React components.
-   **Schema Validation**: Backend validation using Mongoose schemas and Joi for complex validations.
-   **Error Handling**: Basic error handling on both client and server sides.

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. Set up the `.env` file for environment variables:
    - Create a `.env` file in the root of the backend directory, at the same level as the `index.js` file.
    - Add the following lines to the `.env` file, replacing `databaseName` with the name of your MongoDB database and `AddASecretMessageHere` with your chosen secret key for JWT:
        ```
        CONNECTION_STRING="mongodb://localhost:27017/databaseName?retryWrites=true&w=majority"
        JWT_SECRET="AddASecretMessageHere"
        ```
    - The `connectDb` function and import should already be set up and called in your `index.js` file, utilizing these `.env` variables for database connection and JWT authentication.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install the necessary dependencies:
    ```bash
    npm install
    ```
3. (Optional) Set up any environment variables specific to the frontend, such as API endpoints, in a `.env` file within the frontend directory.

## Usage

1. Start the backend server:
    ```bash
    cd backend
    npm start
    ```
2. Start the frontend application:
    ```bash
    cd frontend
    npm start
    ```
3. Access the application at `http://localhost:3000` (or the port specified for your React app).

## File Structure

The project is organized into a frontend and backend directory, each containing the respective parts of the application.

### Backend

Located in the `backend/` directory, the server-side code is structured as follows:

-   `models/`: Contains Mongoose models for database schemas.
-   `routes/`: Defines the API endpoints and associates them with controller functions.
-   `controllers/`: Contains functions to handle requests for each route.
-   `middleware/`: Holds middleware functions for tasks like authentication and error handling.
-   `db/`: Contains the database connection setup and initialization logic.
-   `.env`: (Not tracked by Git) Stores environment variables for database connection strings, JWT secrets, etc.
-   `index.js`: The entry point for the backend server setup and middleware integration.
-   `MERN_Auth_Starter.postman_collection.json`: The Postman collection for testing the backend endpoints.

### Frontend

Located in the `frontend/` directory, the React application is structured as follows:

-   `public/`: Contains static assets like `index.html`, favicon, and manifest file.
-   `src/`:
    -   `components/`: Reusable React components.
    -   `utils/`: Houses custom hooks and utility functions for shared logic and functionalities across components. Key elements include:
        -   `PrivateRoute.jsx`: Utilizes the `useAuth` hook to check for user authentication, conditionally rendering child components based on authentication status and redirecting unauthenticated users to the login page. This component ensures secure and user-friendly navigation by restricting access to certain parts of the application to authenticated users only.
    -   `pages/`: Components representing entire pages.
    -   `App.js`: The core application component, incorporating the main layout and routing logic.
    -   `index.js`: The entry point for the React application, responsible for setting up the root component and integrating React Router.
-   `.env`: (Not tracked by Git) An environment file for specifying frontend configurations, such as API endpoints.

Each directory and file is crafted to ensure modularity, ease of navigation, and separation of concerns, contributing to the maintainability and scalability of the application.

### Configuration Files

-   `.env.example`: An example environment file that outlines the required environment variables for the project, serving as a template for `.env`.

### Future Work

#### Fullstack Enhancements

-   **Expand Functionality**: Leverage this project as a foundational platform for a variety of applications. The current structure and features, exemplified by the car management guide, provide a versatile base. Future expansions could integrate new services, features, or modules to cater to diverse business needs or user requirements, moving beyond the initial guide.

#### Backend Enhancements

-   **Logging**: Implement comprehensive logging for both requests and errors to facilitate easier monitoring, debugging, and tracing of issues as they arise.
-   **Rate Limiting**: Introduce rate limiting to safeguard against abuse and potential Denial of Service (DoS) attacks, ensuring the API's availability and reliability.
-   **Security Enhancements**: Tighten CORS configurations to mitigate risks, particularly if the API serves a web frontend. Additionally, consider implementing more stringent security measures such as CSRF (Cross-Site Request Forgery) protection.
-   **Testing**: Establish a thorough suite of unit and integration tests to validate the reliability and functionality of the API, simplifying maintenance and future development efforts.

#### Frontend Enhancements

-   **Form Validation**: Implement comprehensive client-side validation for forms to provide immediate feedback on incorrect or missing inputs, enhancing the user experience before submission.
-   **Error Handling**: Improve the handling of errors in the UI, such as showing user-friendly messages when network requests fail or authentication issues arise, to inform users clearly about what went wrong.
-   **Responsive Design**: Ensure that the application's UI is fully responsive, offering a seamless experience across various devices and screen sizes, thereby accommodating a wider user base.
-   **Loading States**: Incorporate visual indicators or animations to signal ongoing data fetching or processing operations, improving the overall interactivity and user feedback during wait times.
-   **Security Considerations**: Reevaluate and bolster the security around sensitive operations, particularly in how tokens are managed (e.g., storage and transmission). Explore more secure alternatives to localStorage for storing tokens, such as HttpOnly cookies or secure in-memory solutions.

## Challenges and Lessons Learned

## Contributing

Contributions to this project are welcome. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push your branch and submit a pull request.

## Acknowledgments

Special thanks to Dan Tulpa and JJ Vega for their inspiration and contributions to this project. Their expertise and support were invaluable in overcoming challenging aspects of the project.

-   [Dan Tulpa - GitHub](https://github.com/dtulpa16)
-   [JJ Vega - GitHub](https://github.com/jjvega86)
