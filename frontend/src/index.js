import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage, { getCars } from "./pages/HomePage";

import { AuthProvider } from "./utils/useAuth";
import PrivateRoute from "./utils/PrivateRoute";

// Define the application routes using React Router
const router = createBrowserRouter([
    {
        path: "", // Base path
        element: <App />, // Main layout component
        // Nested components
        children: [
            {
                path: "/",
                element: (
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                ),
                loader: getCars, // Data loader for HomePage
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
        ],
    },
]);

// Create a root container in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the application wrapped in AuthProvider and RouterProvider
root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
