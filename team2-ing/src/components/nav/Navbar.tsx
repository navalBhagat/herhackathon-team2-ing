import { useContext } from "react";
import { UserContext } from "../../services/UserService";

export const Navbar = () => {
    const { loggedIn, setLoggedIn } = useContext(UserContext);
    return (
        <nav>
            {(loggedIn || window.location.href.includes("calculator")) && (
                <>
                    <a href="/calculator">Calculator</a>
                    <span className="divider" />
                    <a href="/" onClick={() => {setLoggedIn(false)}}>Logout</a>
                </>
            )}
        </nav>
    );
};
