import { useContext } from "react";
import { UserContext } from "../../services/UserService";

export const SignUp = () => {
    const { loggedIn, setLoggedIn } = useContext(UserContext);

    const handleSubmit = () => {
        setLoggedIn(true);
    };

    if (!loggedIn) {
        return (
            <div>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="title">Login</div>
                    <div className="email">
                        <label form="email" className="Email-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="Email-input"
                            required
                        ></input>
                    </div>
                    <br />
                    <div className="password">
                        <label form="password" className="Pass-label">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="Pass-input"
                            required
                        ></input>
                    </div>
                    <br />
                    <input type="submit" value="Login" className="submit" />
                    <br />
                </form>
            </div>
        );
    } else {
        return (
            <>
                <div className="registered">Registered!</div>
            </>
        );
    }
};
