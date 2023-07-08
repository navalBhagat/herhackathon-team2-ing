import React from "react";
import {Fin_inform} from "./formStep2/Fin_inform";
import {Pension} from "./formStep2/Pension";

interface Props {
    onNext: () => void;
    onPrevious: () => void;
}

// @ts-ignore
export const FormStep2: React.FC<Props> = (props) => {
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
            <h2>FINANCIAL INFORMATION</h2>
            <hr />
            <Fin_inform />
            <h2>PENSION</h2>
            <hr />
            <Pension />
            <br/>
        </div>);
};
