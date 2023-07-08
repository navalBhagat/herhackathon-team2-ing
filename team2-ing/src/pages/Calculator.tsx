import { useNavigate } from "react-router-dom";
import { FormStep1, FormStep2, FormStep3, FormStep4, FormStep5 } from "../components";
import { useState } from "react";

export const Calculator = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep: number) => prevStep + 1);
    };

    const handlePrev = () => {
        setStep((prevStep: number) => prevStep - 1);
    };

    const handleSubmit = () => {
        navigate('/overview');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="Calculator">
                {step === 1 && <FormStep1 onNext={handleNext} />}
                {step === 2 && (
                    <FormStep2 onNext={handleNext} onPrevious={handlePrev} />
                )}
                {step === 3 && (
                    <FormStep3 onNext={handleNext} onPrevious={handlePrev} />
                )}
                {step === 4 && (
                    <FormStep4 onPrevious={handlePrev}/>
                )}
                {step === 5 && <FormStep5 />}
            </div>
        </form>
    );
};
