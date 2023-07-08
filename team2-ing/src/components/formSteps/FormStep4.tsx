import React from "react";

interface Props {
    onPrevious: () => void;
}

export const FormStep4: React.FC<Props> = (props) => {
    return (
        <div className="form">
            <div className="buttons">
                <button onClick={props.onPrevious} className="backbutton">
                    Go Back
                </button>
                <span className="emptybutton" />
            </div>
            <h2>Financial Information 4</h2>
            <hr />
            <input value="Submit" type="submit" className="formSubmit"/>
        </div>
    );
};
