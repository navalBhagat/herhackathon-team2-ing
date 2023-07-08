import React, {useState} from "react";

export const Fin_inform = () => {
    // @ts-ignore
    return (
        <div className="form3 part5">
            <div className="input-text relationship">
                <div className="input-text relationship-status">
                    <label
                        className="input-text relationship-status"
                        form="relationship-status"
                    >
                        What is your relationship status?
                    </label>
                    <input
                        type="text"
                        id="relationship-status"
                        name="relationship-status"
                        className="relationship-status"
                    />
                <br />
                </div>
                <div className="input-text relationship-rent">
                    <label
                        className="input-text relationship-rent"
                        form="relationship-rent"
                    >
                        How much is your rent?
                    </label>
                    <input
                        type="text"
                        id="relationship-rent"
                        name="relationship-rent"
                        className="relationship-rent"
                    />
                    <br />
                </div>
                <div className="input-text relationship-insurance">
                    <label
                        className="input-text relationship-insurance"
                        form="relationship-insurance"
                    >
                        How much do you pay for the insurance?
                    </label>
                    <input
                        type="text"
                        id="relationship-insurance"
                        name="relationship-insurance"
                        className="relationship-insurance"
                    />
                    <br />
                </div>
                <div className="input-text relationship-net">
                    <label
                        className="input-text relationship-net"
                        form="relationship-net"
                    >
                        How much is your net income (per month)?
                        <em style={{fontSize: "15px", marginBottom: "5px"}}>
                            *You can use the Brutto-Netto-Rechnner to calculate you net income: <a href=" https://www.brutto-netto-rechner.info/"> https://www.brutto-netto-rechner.info/</a>
                        </em>
                    </label>
                    <input
                        type="text"
                        id="relationship-net"
                        name="relationship-net"
                        className="relationship-net"
                    />
                    <br />
                </div>
                <div className="input-text relationship-work_hours">
                    <label
                        className="input-text relationship-work_hours"
                        form="relationship-work_hours"
                    >
                        How many hours are you working (per week)?
                    </label>
                    <input
                        type="text"
                        id="relationship-work_hours"
                        name="relationship-work_hours"
                        className="relationship-work_hours"
                    />
                    <br />
                </div>
                <div className="input-text relationship-tax_class">
                    <label
                        className="input-text relationship-tax_class"
                        form="relationship-tax_class"
                    >
                        What is your tax class?
                        <em style={{fontSize: "15px", marginBottom: "5px"}}>
                            *I (You are single, widowed,separated/divorced);  <br />
                            II (You are a single parent, living separately);  <br />
                            III (You are married (or widowed within the first year of the spouse’s death) with a significantly higher income than your partner in tax class 5); <br />
                            IV (You are married with both spouses earning similar income); <br />
                            V (You are married with a significantly lower income than your partner in tax class 3) <br />
                        </em>
                    </label>
                    <input
                        type="text"
                        id="relationship-tax_class"
                        name="relationship-tax_class"
                        className="relationship-tax_class"
                    />
                    <br />
                </div>
                <div className="input-text relationship-saving">
                    <label
                        className="input-text relationship-saving"
                        form="relationship-saving"
                    >
                        How much money do you save (e.g., ETFs) (per month)?
                    </label>
                    <input
                        type="text"
                        id="relationship-saving"
                        name="relationship-saving"
                        className="relationship-saving"
                    />
                    <br />
                </div>
                <div className="input-text relationship-debts">
                    <label
                        className="input-text relationship-debts"
                        form="relationship-debts"
                    >
                        How much debts have to be paid (per month)?
                    </label>
                    <input
                        type="text"
                        id="relationship-debts"
                        name="relationship-debts"
                        className="relationship-debts"
                    />
                    <br />
                </div>
            </div>
        </div>
    );
};
