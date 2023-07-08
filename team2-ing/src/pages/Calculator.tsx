import { FormStep1, FormStep2, FormStep3, FormStep5 } from "../components";
import { useState } from "react";

export const Calculator = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep: number) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep: number) => prevStep - 1);
    };

    return (
        <form>
            <div className="Calculator">
                {step === 1 && <FormStep1 onNext={handleNext} />}
                {step === 2 && (
                    <FormStep2 onNext={handleNext} onPrevious={handlePrev} />
                )}
                {step === 3 && (
                    <FormStep3 onNext={handleNext} onPrevious={handlePrev} />
                )}
                {step === 4 && <FormStep5 onPrevious={handlePrev} />}
            </div>
        </form>
    );
};
