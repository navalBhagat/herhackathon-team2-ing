import React from "react";

interface Props {
    onNext: () => void;
}

export const FormStep1: React.FC<Props> = (props) => {
    return (
        <div className="form">
            <div className="buttons">
                <span className="emptybutton" />
                <button onClick={props.onNext} className="nextbutton">
                    Continue
                </button>
            </div>
            <h2>Financial Information</h2>
            <hr />
        </div>
    );
};
