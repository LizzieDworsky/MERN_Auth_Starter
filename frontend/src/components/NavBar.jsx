import { Link } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const NavBar = () => {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                My Awesome App
            </Link>

            {/* Show welcome message if authenticated */}
            {isAuthenticated && (
                <div className="navbar-user">Welcome, {user.username}!</div>
            )}

            {/* Navigation links: Logout for authenticated users, Login/Register for guests  */}
            <div className="navbar-links">
                {isAuthenticated ? (
                    <div className="navbar-link" onClick={() => logout()}>
                        Logout
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="navbar-link">
                            Login
                        </Link>
                        <Link to="/register" className="navbar-link">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
