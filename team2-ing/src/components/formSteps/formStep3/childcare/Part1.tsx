import { useState } from "react";

export const Part1 = () => {
    const [childcareSelected, setChildcareSelected] = useState(false);
    return (
        <div className="form3 part1">
            <div className="input-text childcare">
                <text className="question">
                    Do you have childcare responsibilities?
                </text>
                <div className="option1">
                    <label className="childcare" form="childcare">
                        No
                    </label>
                    <input
                        type="checkbox"
                        value="No"
                        name="childcare"
                        checked={childcareSelected === false}
                        onClick={() => {
                            setChildcareSelected(false);
                        }}
                    />
                </div>
                <div className="option2">
                    <label className="childcare" form="childcare">
                        Yes
                    </label>
                    <input
                        type="checkbox"
                        value="Yes"
                        name="childcare"
                        checked={childcareSelected === true}
                        onClick={() => {
                            setChildcareSelected(true);
                        }}
                    />
                </div>
                {childcareSelected && (
                    <div className="input-text childcare additional">
                        <div className="input-text childcare additional1">
                            <label
                                className="input-text childcare additional1"
                                form="childcare-hours"
                            >
                                How many hours do you spend caring for a child
                                in a week?
                            </label>
                            <input
                                type="text"
                                id="childcare-hours"
                                name="childcare-hours"
                                className="childcare-hours"
                            />
                        </div>
                        <div className="input-text childcare additional2">
                            <label
                                className="input-text childcare additional2"
                                form="childcare-hours-external"
                            >
                                How many hours of paid external help do you get
                                for childcare? (nursery, kindergarden, nanny)
                            </label>
                            <input
                                type="text"
                                id="childcare-hours-external"
                                name="childcare-hours-external"
                                className="childcare-hours-external"
                            />
                        </div>
                        <div className="input-text childcare additional3">
                            <label
                                className="input-text childcare additional3"
                                form="childcare-hours-external-amount"
                            >
                                How much do you pay for childcare?
                            </label>
                            <input
                                type="text"
                                id="childcare-hours-external-amount"
                                name="childcare-hours-external-amount"
                                className="childcare-hours-external-amount"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
