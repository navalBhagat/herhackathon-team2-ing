import React from "react";
import "../../my_styles/StepForm5.css"

interface Props {
    onPrevious: () => void;
}

export const FormStep5: React.FC<Props> = (props) => {
    return (
        <div className="form" style={{ marginTop: '12em' }}>
            <h2 className="center">
                THANKS FOR YOUR INPUTS!
            </h2>
            <h2 className="black_center">
                We are now processing your data<br />
                and creating your digital twin
            </h2>
        </div>
    );
};
