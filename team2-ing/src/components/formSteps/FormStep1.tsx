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
            <h2 className="welcome">
                Welcome to our Financial Fairshare Calculator!
            </h2>
            <br />
            <div className="form1 inputfields">
                <div className="input-text partner1-name">
                    <label form="partner1-name" className="partner1-name">
                        What is your name? (partner 1)
                    </label>
                    <span className="formdivider" />
                    <input
                        type="text"
                        name="partner1-name"
                        className="partner1-name"
                    />
                </div>
                <br />
                <div className="input-text partner2-name">
                    <label form="partner2-name" className="partner2-name">
                        What is your name? (partner 2)
                    </label>
                    <span className="formdivider" />
                    <input
                        type="text"
                        name="partner2-name"
                        className="partner2-name"
                    />
                </div>
            </div>
        </div>
    );
};
