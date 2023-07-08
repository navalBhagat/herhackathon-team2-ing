import React from "react";
import { Part1, Part2, Part3 } from "./formStep3/childcare";
import { Part4 } from "./formStep3/unpaidcarework";
import { Part5 } from "./formStep3/household";

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
            <h2>CHILDCARE</h2>
            <hr />
            <Part1 />
            <Part2 />
            <Part3 />
            <h2>OTHER UNPAID CARE WORK</h2>
            <hr />
            <Part4 />
            <h2>HOUSEHOLD</h2>
            <hr />
            <Part5 />
        </div>
    );
};
