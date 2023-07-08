import { useState } from "react";

export const Part2 = () => {
    const [leaveSelected, setLeaveSelected] = useState(false);
    const [paySelected, setPaySelected] = useState(false);

    return (
        <div className="form3 part2">
            <div className="input-text parental-leave">
                <text className="question">
                    Have you ever been on parental leave?
                </text>
                <div className="option1">
                    <label className="parental-leave" form="parental-leave">
                        No
                    </label>
                    <input
                        type="checkbox"
                        value="No"
                        name="parental-leave"
                        checked={leaveSelected === false}
                        onClick={() => {
                            setLeaveSelected(false);
                        }}
                    />
                </div>
                <div className="option2">
                    <label className="parental-leave" form="parental-leave">
                        Yes
                    </label>
                    <input
                        type="checkbox"
                        value="Yes"
                        name="parental-leave"
                        checked={leaveSelected === true}
                        onClick={() => {
                            setLeaveSelected(true);
                        }}
                    />
                </div>
                {leaveSelected && (
                    <div className="input-text parental-leave additional">
                        <div className="input-text parental-leave additional1">
                            <label
                                className="input-text parental-leave additional1"
                                form="parental-leave-months"
                            >
                                How long were you on parental leave? (in months)
                            </label>
                            <input
                                type="text"
                                id="parental-leave-months"
                                name="parental-leave-months"
                                className="parental-leave-months"
                            />
                        </div>
                        <div className="input-text parental-leave additional2">
                            <label
                                className="input-text parental-leave additional2"
                                form="parental-leave-date"
                            >
                                When did your leave start? (dd/mm/yyyy)
                            </label>
                            <input
                                type="date"
                                id="parental-leave-date"
                                name="parental-leave-date"
                                className="parental-leave-date"
                            />
                        </div>
                        <div className="input-text parental-leave additional3">
                            <text className="question">
                                Did you receive a percentage of your pay during
                                your parental leave?
                            </text>
                            <div className="option1">
                                <label
                                    className="parental-leave-pay"
                                    form="parental-leave-pay"
                                >
                                    No
                                </label>
                                <input
                                    type="checkbox"
                                    value="No"
                                    name="parental-leave-pay"
                                    checked={paySelected === false}
                                    onClick={() => {
                                        setPaySelected(false);
                                    }}
                                />
                            </div>
                            <div className="option2" style={{marginBottom: "1.5rem"}}>
                                <label
                                    className="parental-leave-pay"
                                    form="parental-leave-pay"
                                >
                                    Yes
                                </label>
                                <input
                                    type="checkbox"
                                    value="Yes"
                                    name="parental-leave-pay"
                                    checked={paySelected === true}
                                    onClick={() => {
                                        setPaySelected(true);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
