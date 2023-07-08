import React, { useState } from "react";

enum options {
    top = "Top",
    ok = "Ok",
    bad = "Bad",
}

export const Top: React.FC = () => {
    return (
        <div className="result-type-container">
            <img src="./assets/images/top.png" className="result-type-image" />
            <text className="result-type-text">
                Congratulations! You share your working hours, care work, and
                household equally.
            </text>
        </div>
    );
};

export const Ok: React.FC = () => {
    return (
        <div className="result-type-container">
            <img src="./assets/images/ok.png" className="result-type-image" />
            <text className="result-type-text">
                Keep it up! You're on a good path. Pay attention to the
                recommendations below.
            </text>
        </div>
    );
};

export const Bad: React.FC = () => {
    return (
        <div className="result-type-container">
            <img src="./assets/images/bad.png" className="result-type-image" />
            <text className="result-type-text">
                Ohh! Your work is not equally distributed Discuss whether the
                current situation is really desirable for you and your partner.
            </text>
        </div>
    );
};

export const Part1 = () => {
    const [option, selectOption] = useState<options>(options.top);
    const handleClick = (value: typeof option) => {
        selectOption(value);
    };
    return (
        <>
            <div className="result-toggle">
                <h2>OVERALL RESULT</h2>
                <div className="result-type">
                    <button
                        onClick={() => {
                            handleClick(options.top);
                        }}
                        className="result-type-button"
                    >
                        Top
                    </button>
                    <button
                        onClick={() => {
                            handleClick(options.ok);
                        }}
                        className="result-type-button"
                    >
                        Ok
                    </button>
                    <button
                        onClick={() => {
                            handleClick(options.bad);
                        }}
                        className="result-type-button"
                    >
                        Bad
                    </button>
                </div>
            </div>
            <hr />

            <div className="overview page2">
                <div className="result-title">FAIRSHARING</div>
                {option === options.top && <Top />}
                {option === options.ok && <Ok />}
                {option === options.bad && <Bad />}
            </div>
        </>
    );
};
