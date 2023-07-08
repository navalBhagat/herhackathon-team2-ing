import React from "react";
import { Picture } from "../../shared";

export const Part1 = () => {
    return (
        <>
            <h2>GENERAL INFORMATION</h2>
            <hr />

            <div className="pictures part1">
                <Picture
                    title="NET INCOME"
                    image="./assets/graphs/200income_only.png"
                />
                <Picture
                    title="PENSION"
                    image="./assets/graphs/200pension_only.png"
                />
                <Picture
                    title="SPENDINGS"
                    image="./assets/graphs/200spendings.png"
                />
            </div>
        </>
    );
};
