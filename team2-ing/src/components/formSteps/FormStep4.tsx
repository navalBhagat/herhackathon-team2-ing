import "../../my_styles/StepForm4.css";
import { Preferences } from "./formStep4/preferences"
import React from "react";


interface Props {
    onNext: () => void;
    onPrevious: () => void;
}

export const FormStep4: React.FC<Props> = (props) => {
    return (
        <div className="form">
            <div className="buttons">
                <button onClick={props.onPrevious} className="backbutton">
                    Go Back
                </button>
                <button onClick={props.onNext} className="nextbutton">
                    Continue
                </button>
            </div>
            <h2>Mental Load</h2>
            <hr />
            <p className="form4">
                The mental load is a term for the invisible labor involved in managing a household and family. Also sometimes referred to as "worry work" or "cognitive labor," the mental load is about not the physical tasks but rather the overseeing of those tasks.
            </p>
            <p className="form4">
                You can calculate your mental load through the mental load test: <a href="https://equalcareday.de/wp-content/uploads/2021/02/mental-load-home-en.pdf">https://equalcareday.de/wp-content/uploads/2021/02/mental-load-home-en.pdf</a>
            </p>
            <br />
            <div className="form4">
                <div className="input-text mental-load-work">
                    <label htmlFor="mental-load-work" className="mental-load-work">
                        How much mental load points do you have (in total)?
                    </label>
                    <span className="formdivider" />
                    <input
                        type="text"
                        id="mental-load-work"
                        className="mental-load-work"
                    />
                </div>
            </div>
            <br />
            <h2>Personal Preferences</h2>
            <hr />
            <br />
            <Preferences />
            <br />
            <br />
        </div>
    );
};
