import React, {useState} from "react";

export const Preferences = () => {
    const [workSelected, setWorkSelected] = useState(false);
    const [pensionSelected, setPensionSelected] = useState(false);
    const [careResSelected, setCareResSelected] = useState(false);
    return (
        <>
            <div className="form4">
                <div className="input-text work-pref">
                    Are you open to parttime/ flexible work?
                </div>
                <div className="option1">
                    <label className="work-pref" form="work-pref">
                        No
                    </label>
                    <input
                        type="checkbox"
                        value="No"
                        name="work-pref"
                        checked={workSelected === false}
                        onClick={() => {
                            setWorkSelected(false);
                        }}/>
                </div>
                <div className="option2">
                    <label className="work-pref" form="work-pref">
                        Yes
                    </label>
                    <input
                        type="checkbox"
                        value="Yes"
                        name="work-pref"
                        checked={workSelected === true}
                        onClick={() => {
                            setWorkSelected(true);}}/>
                </div>
                <br />
                <div className="input-text pref_pension">
                    Would you be open to change your pension system?
                </div>
                <div className="option1">
                    <label className="pref_pension" form="pref_pension">
                        No
                    </label>
                    <input
                        type="checkbox"
                        value="No"
                        name="pref_pension"
                        checked={pensionSelected === false}
                        onClick={() => {
                            setPensionSelected(false);
                        }}/>
                </div>
                <div className="option2">
                    <label className="pref_pension" form="pref_pension">
                        Yes
                    </label>
                    <input
                        type="checkbox"
                        value="Yes"
                        name="pref_pension"
                        checked={pensionSelected === true}
                        onClick={() => {
                            setPensionSelected(true);}}/>
                </div>
                <br />
                <div className="input-text pref_care">
                    Are you open to hiring help for your care responsibilities?
                </div>
                <div className="option1">
                    <label className="pref_care" form="pref_care">
                        No
                    </label>
                    <input
                        type="checkbox"
                        value="No"
                        name="pref_care"
                        checked={careResSelected === false}
                        onClick={() => {setCareResSelected(false);
                        }}/>
                </div>
                <div className="option2">
                    <label className="pref_care" form="pref_care">
                        Yes
                    </label>
                    <input
                        type="checkbox"
                        value="Yes"
                        name="pref_care"
                        checked={careResSelected === true}
                        onClick={() => {
                            setCareResSelected(true);}}/>
                </div>
            </div>

        </>
    );
}