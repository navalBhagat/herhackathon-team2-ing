import React from "react";

interface Props {
    onNext: () => void;
    onPrevious: () => void;
}

export const FormStep2: React.FC<Props> = (props) => {
    return (
        <div className="form">
            <div className="buttons">
                <button onClick={props.onPrevious} className="backbutton">
                    Go Back
                </button>
                <button onClick={props.onNext} className="nextbutton">
                    Continue
                </button>
            </div>
            <h2>FINANCIAL INFORMATION</h2>
            <hr />
            <h2 className="Shared Info" >
                Shared Information
            </h2>
             <p style={{ color: 'black' }}>What is your relationship status? </p>
                <form>
          
          <input type="text" id="name" />
      </form>
                <p style={{ color: 'black' }}>How much is your rent?</p>
                <input type="number" placeholder=' €' id="rent" />
                <p style={{ color: 'black' }}>What insurances do you have?</p>
                <input type="text" id="insurance" />
                <h2 className="Shared Info" >
                General Information
            </h2>
            <p style={{ color: 'black' }}>How much is your monthly net income? </p>
            <p style={{ color: 'black' }}>* To calculate your net income: </p> 
            <a href="https://www.brutto-netto-rechner.info/">click here</a>
            <p style={{ color: 'black' }}>Do you have a additional income?  </p>

            <p style={{ color: 'black' }}>How much is your additional income? (per month)  </p>
            <input type="number" placeholder=' €' id="add-in1" />
            <p style={{ color: 'black' }}>How many hours are you working (per week)? </p>
            <input type="number" placeholder=' hour' id="add-in2" />
            <p style={{ color: 'black' }}>What is your tax class? </p>
            <input type="text" placeholder=' options: I, III; IV; V' id="add-in3" />
            <p style={{ color: 'black' }}>*I (You are single, widowed,separated/divorced); III (You are married (or widowed within the first year of the spouse’s death) with a significantly higher income than your partner in tax class 5); IV (You are married with both spouses earning similar income); V (You are married with a significantly lower income than your partner in tax class 3)</p>
            <p style={{ color: 'black' }}>How much money do you save (e.g., ETFs) (per month)? </p>
            <input type="number" placeholder=' €' id="add-in4" />
            <p style={{ color: 'black' }}>How much debts have to be paid (per month)? </p>
            <input type="number" placeholder=' €' id="add-in5" />
                </div>
    );
};
