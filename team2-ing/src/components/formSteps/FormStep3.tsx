import React from "react";

interface Props {
    onNext: () => void;
    onPrevious: () => void;
}

export const FormStep3: React.FC<Props> = (props) => {
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
            <h2>Financial Information 3</h2>
            <hr />
        </div>
    );
};
