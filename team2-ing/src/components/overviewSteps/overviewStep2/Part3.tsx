import React from "react";
import { Picture, Text } from "../../shared";

export const Part3 = () => {
    return (
        <>
            <h2>WHAT WOULD HAPPEN IF YOU CHANGED THE WAY YOU CARED?</h2>
            <hr />

            <div className="overview page2">
                <div className="text-picture">
                    <Text
                        title={"ARE YOU OPEN TO CHANGING THE AMOUNT YOU WORK?"}
                        description={
                            "Check out the table below to find your net income in case either of you decide to maybe work 70% instead of 100% or 80% instead of 50%. The colours also tell you which combinations give you the same amount of income!"
                        }
                    />
                    <Picture
                        title=""
                        image="./assets/graphs/200grid_salary.png"
                    />
                </div>
                <div className="text-picture">
                    <Text
                        title={
                            "WHAT WOULD HAPPEN IF YOU BOTH DID EXACTLY THE SAME AMOUNT OF CARE WORK?"
                        }
                        description={
                            "Below is your distribution of hours spent on care, if you both did exactly the same amount!"
                        }
                    />
                    <Picture
                        title=""
                        image="./assets/graphs/200hours-half-half.png"
                    />
                </div>
                <div className="text-picture">
                    <Text
                        title={
                            "WHAT WOULD HAPPEN IF YOU HIRED HELP FOR YOUR CARING RESPONSIBILITIES?   "
                        }
                        description={
                            "Below you can see how much money you have left, depending on how much percent you both work. And how many hours a week you hire someone to help with your care duties."
                        }
                    />
                    <Picture
                        title=""
                        image="./assets/graphs/200grid_carer.png"
                    />
                </div>
            </div>
        </>
    );
};
