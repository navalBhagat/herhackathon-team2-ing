import React from "react";
import { Text } from "../../shared";

export const Part2 = () => {
    return (
        <>
            <h2>TOP 3 RECOMMENDATIONS FOR YOU</h2>
            <hr />

            <div className="overview page2">
                <Text
                    title={"1. ING recommends to change your tax class!"}
                    description={
                        "We recommend that you consider increasing your working hours. You can also change both partners to TAX category IV, despite the common myth, you will still pay the same amount of taxes as in category III and V. But you will get much better benefits. We also recommend that you consider a private pension plan to enhance your retirement in the future. It is TAX deductible."
                    }
                />
                <Text
                    title={"2. ING recommends to consider hiring care help!"}
                    description={
                        "We recommend that you consider hiring household or carework services, this can help you with you care burden. And you may be able to increase the job hours if you wish. Some of these may be TAX deductible."
                    }
                />
                <Text
                    title={"3. ING recommends to keep in touch!"}
                    description={
                        "We recommend that you discuss your financial situation with your financial advisor at least once a year to consider new life events (children, change of marital status) in order to update your insurance and savings policies. We recommend that you discuss how you split your fixed and variable expenses between your partners. Maybe it makes more sense that one of you pays more/less."
                    }
                />
                <div className="hint">
                    <img
                        src="./assets/images/hint.png"
                        className="hint-image"
                    />
                    <Text
                        title=""
                        description="HINT: Our Partner XY offers an special offer on XY. This could be interesting for you. If you use the code XY you get 20% discount on the recommended service.  You can find more information on this under www.xy.de! "
                    />
                </div>
            </div>
        </>
    );
};
