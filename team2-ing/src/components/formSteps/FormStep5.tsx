import React from "react";
import "../../styles/StepForm5.css";

export const FormStep5: React.FC = () => {
    return (
        <div className="form" style={{ marginTop: "12em" }}>
            <h2 className="center">THANKS FOR YOUR INPUTS!</h2>
            <h2 className="black_center">
                We are now processing your data
                <br />
                and creating your digital twin
            </h2>
            <div className="overviewlink">
                <a href="/overview" className="">
                    {" "}
                    Go to Overview, now!
                </a>
            </div>
        </div>
    );
};
