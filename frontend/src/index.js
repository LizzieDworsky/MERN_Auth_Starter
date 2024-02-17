import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage, { getCars } from "./pages/HomePage";

import { AuthProvider } from "./utils/useAuth";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <PrivateRoute>
                        <HomePage />
                    </PrivateRoute>
                ),
                loader: getCars,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
