import React from "react";
import { Part1 } from "./overviewStep1/Part1";
import { Part2 } from "./overviewStep1/Part2";
import { Part3 } from "./overviewStep1/Part3";

interface Props {
    onNext: () => void;
}

export const OverviewStep1: React.FC<Props> = (props) => {
    return (
        <div className="overview">
            <div className="buttons">
                <span className="emptybutton" />
                <button onClick={props.onNext} className="nextbutton">
                    Continue
                </button>
            </div>
            <h2>OVERVIEW (AS-IS SITUATION)</h2>
            <br />
            <Part1 />
            <Part2 />
            <Part3 />
        </div>
    );
};
