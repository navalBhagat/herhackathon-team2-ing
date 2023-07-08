import { useContext } from "react";
import { UserContext } from "../../services/UserService";

export const Navbar = () => {
    const { loggedIn } = useContext(UserContext);
    return (
        <nav>
            <a href="/">Home</a>
            {(loggedIn || window.location.href.includes("calculator")) && (
                <>
                    <span className="divider" />
                    <a href="/calculator">Calculator</a>
                    <span className="divider" />
                    <a href="/">Logout</a>
                </>
            )}
        </nav>
    );
};
