import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../utils/useAuth";

export async function getCars() {
    let token = localStorage.getItem("token");
    try {
        let response = await axios.get("http://localhost:5000/api/cars", {
            headers: { Authorization: "Bearer " + token },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.warn("Cars not found for this user.", error);
            return [];
        } else {
            throw error;
        }
    }
}

export default function HomePage() {
    const data = useLoaderData() || [];
    const [cars, setCars] = useState(data);
    const { user } = useAuth();

    if (cars.length === 0) {
        return <div>{`${user.username} currently has no cars.`}</div>;
    }

    return <div>{`${user.username} currently has cars.`}</div>;
}
