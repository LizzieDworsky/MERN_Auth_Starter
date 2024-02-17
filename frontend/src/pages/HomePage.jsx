import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../utils/useAuth";

// Function to fetch car data for the authenticated user
export async function getCars() {
    let token = localStorage.getItem("token");
    try {
        let response = await axios.get("http://localhost:5000/api/cars", {
            headers: { Authorization: "Bearer " + token },
        });
        return response.data;
    } catch (error) {
        // Handle 404 error indicating no cars found
        if (error.response && error.response.status === 404) {
            console.warn("Cars not found for this user.", error);
            return [];
        } else {
            // Rethrow other errors to be handled elsewhere
            throw error;
        }
    }
}

// HomePage component to display user's cars
export default function HomePage() {
    const data = useLoaderData() || []; // Use loader data or default to an empty array
    const [cars, setCars] = useState(data);
    const { user } = useAuth();

    // Render message if no cars are associated with the user
    if (cars.length === 0) {
        return (
            <div className="home-div">{`${user.username} currently has no cars.`}</div>
        );
    }

    // Render message indicating the user has cars
    return (
        <div className="home-div">{`${user.username} currently has cars.`}</div>
    );
}
