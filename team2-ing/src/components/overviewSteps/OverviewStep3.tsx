import React from "react";

interface Props {
    onPrev: () => void;
}

export const OverviewStep3: React.FC<Props> = (props) => {
    return (
        <div className="overview">
            <div className="buttons">
                <button onClick={props.onPrev} className="backbutton">
                    Go back
                </button>
                <span className="emptybutton" />
            </div>
            <h2 className="welcome">THANKS FOR USING OUR FINANCIAL FAIRSHARE CALCULATOR!</h2>
            <text className="bye">
                It is important to measure the fairshare on a regular basis.
                Therefore, we will remind you again in 6 months.
            </text>
        </div>
    );
};
