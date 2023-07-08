import React from "react";

export const Pension = () => {
    return (
        <div className="form3 part5">
            <div className="input-text pension">
                <div className="input-text pension-points">
                    <label
                        className="input-text pension-points"
                        form="pension-points"
                    >
                        What are your earning points?
                    </label>
                    <input
                        type="text"
                        id="pension-points"
                        name="pension-points"
                        className="pension-points"
                    />
                    <br/>
                </div>
                <div className="input-text pension-access">
                    <label
                        className="input-text pension-access"
                        form="pension-access"
                    >
                        What are your access factor?
                    </label>
                    <input
                        type="text"
                        id="pension-access"
                        name="pension-access"
                        className="pension-access"
                    />
                    <br/>
                </div>
                <div className="input-text pension-value">
                    <label
                        className="input-text pension-value"
                        form="pension-value"
                    >
                        What are your current pension value?
                    </label>
                    <input
                        type="text"
                        id="pension-value"
                        name="pension-value"
                        className="pension-value"
                    />
                    <br/>
                </div>
                <div className="input-text pension-factor">
                    <label
                        className="input-text pension-factor"
                        form="pension-factor"
                    >
                        What are your pension factor?
                    </label>
                    <input
                        type="text"
                        id="pension-factor"
                        name="pension-factor"
                        className="pension-factor"
                    />
                    <br/>
                </div>
            </div>
        </div>
    );
}
