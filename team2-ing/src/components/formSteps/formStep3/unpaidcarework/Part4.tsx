import { useState } from "react";

export const Part4 = () => {
    const [careSelected, setCareSelected] = useState(false);
    return (
        <div className="form3 part4">
            <div className="input-text unpaid-care">
                <text className="question" style={{ marginBottom: "3px" }}>
                    Do you have any other care commitments?
                    <br />
                    <em style={{ fontSize: "14px" }}>
                        i.e., caring for parents, parents-in-law, grandparents,
                        neighbours, spouses, or other
                    </em>
                </text>
                <div className="option1">
                    <label className="unpaid-care" form="unpaid-care">
                        No
                    </label>
                    <input
                        type="checkbox"
                        value="No"
                        name="unpaid-care"
                        checked={careSelected === false}
                        onClick={() => {
                            setCareSelected(false);
                        }}
                    />
                </div>
                <div className="option2">
                    <label className="unpaid-care" form="unpaid-care">
                        Yes
                    </label>
                    <input
                        type="checkbox"
                        value="Yes"
                        name="unpaid-care"
                        checked={careSelected === true}
                        onClick={() => {
                            setCareSelected(true);
                        }}
                    />
                </div>
                {careSelected && (
                    <div className="input-text unpaid-care additional">
                        <div className="input-text unpaid-care additional1">
                            <label
                                className="input-text unpaid-care additional1"
                                form="unpaid-care-weekly-hours"
                            >
                                How many hours do you spend caring for a person,
                                other than a child, in a week?
                            </label>
                            <input
                                type="text"
                                id="unpaid-care-weekly-hours"
                                name="unpaid-care-weekly-hours"
                                className="unpaid-care-weekly-hours"
                            />
                        </div>
                        <div className="input-text unpaid-care additional2">
                            <label
                                className="input-text unpaid-care additional2"
                                form="unpaid-care-external"
                            >
                                How many hours of paid external help do you get
                                for this care? (care home, care help)
                            </label>
                            <input
                                type="text"
                                id="unpaid-care-external"
                                name="unpaid-care-external"
                                className="unpaid-care-external"
                            />
                        </div>
                        <div className="input-text unpaid-care additional3">
                            <label
                                className="input-text unpaid-care additional3"
                                form="unpaid-care-external-amount"
                            >
                                How much do you pay for the external care?
                            </label>
                            <input
                                type="text"
                                id="unpaid-care-external-amount"
                                name="unpaid-care-external-amount"
                                className="unpaid-care-external-amount"
                            />
                        </div>
                        <div className="input-text unpaid-care additional4">
                            <label
                                className="input-text unpaid-care additional4"
                                form="unpaid-care-benefits"
                            >
                                How much benefits are you receiving for the care
                                commitments?
                                <br />
                                <em
                                    style={{
                                        fontSize: "15px",
                                        marginBottom: "5px",
                                    }}
                                >
                                    If you partner is receiving all of these
                                    benefits into their account, please input 0
                                    euros
                                </em>
                            </label>
                            <input
                                type="text"
                                id="unpaid-care-benefits"
                                name="unpaid-care-benefits"
                                className="unpaid-care-benefits"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
