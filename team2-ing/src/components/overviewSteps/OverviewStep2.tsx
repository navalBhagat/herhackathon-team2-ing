import React from "react";
import { Part1 } from "./overviewStep2/Part1";
import { Part2 } from "./overviewStep2/Part2";
import { Part3 } from "./overviewStep2/Part3";

interface Props {
    onNext: () => void;
    onPrev: () => void;
}

export const OverviewStep2: React.FC<Props> = (props) => {
    return (
        <div className="overview">
            <div className="buttons">
                <button onClick={props.onPrev} className="backbutton">
                    Go back
                </button>
                <button onClick={props.onNext} className="nextbutton">
                    Continue
                </button>
            </div>
            <Part1 />
            <Part2 />
            <Part3 />
        </div>
    );
};
