import { useContext } from "react";
import { UserContext } from "../../services/UserService";

export const Navbar = () => {
    const { loggedIn, setLoggedIn } = useContext(UserContext);
    return (
        <nav>
            {(loggedIn || window.location.href.includes("calculator") || window.location.href.includes("overview")) && (
                <>
                    <a href="/" onClick={() => {setLoggedIn(false)}}>Logout</a>
                </>
            )}
        </nav>
    );
};
