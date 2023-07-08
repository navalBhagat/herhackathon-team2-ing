import { useState } from "react";

export const SignUp = () => {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = () => {
        if (!submit) {
            setSubmit(true);
        }
    };

    if (!submit) {
        return (
            <div>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="title">Sign Up</div>
                    <div className="email">
                        <label form="email" className="Email-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="Email-input"
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
                    ></input>
                    </div>
                    <br />
                    <input type="submit" value="Sign Up" className="submit" />
                    <br />
                </form>
            </div>
        );
    } else {
        return <div className="registered">Registered!</div>;
    }
};
