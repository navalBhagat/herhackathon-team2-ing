import React, { useState } from "react";
import { OverviewStep1, OverviewStep2, OverviewStep3 } from "../components";

export const Overview = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep: number) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep: number) => prevStep - 1);
    };
    return (
        <div className="overview">
            {step === 1 && <OverviewStep1 onNext={handleNext} />}
            {step === 2 && (
                <OverviewStep2 onNext={handleNext} onPrev={handlePrev} />
            )}
            {step === 3 && <OverviewStep3 onPrev={handlePrev} />}
        </div>
    );
};
