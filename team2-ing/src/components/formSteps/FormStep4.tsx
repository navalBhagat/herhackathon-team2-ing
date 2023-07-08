import React from "react";
import "../../my_styles/StepForm4.css";

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
            <h2>MENTAL LOAD</h2>
            <hr />
            <p className="myText">
                The mental load is a term for the invisible labor involved in managing a household and family. Also sometimes referred to as "worry work" or "cognitive labor," the mental load is about not the physical tasks but rather the overseeing of those tasks.
            </p>
            <p className="myText">
                You can calculate your mental load through the mental load test: <a href="https://equalcareday.de/wp-content/uploads/2021/02/mental-load-home-en.pdf">https://equalcareday.de/wp-content/uploads/2021/02/mental-load-home-en.pdf</a>
            </p>
            <br />
            <div className="myText">
                <div className="input-text mental-load">
                    <label htmlFor="mental-load" className="mental-load">
                        How much mental load points do you have (in total)?
                    </label>
                    <span className="formdivider" />
                    <input
                        type="text"
                        id="mental-load"
                        className="mental-load"
                    />
                </div>
            </div>
        </div>
    );
};
