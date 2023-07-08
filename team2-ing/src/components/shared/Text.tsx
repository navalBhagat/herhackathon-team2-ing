import React from "react";

interface Props {
    title: string;
    description: string;
}

export const Text: React.FC<Props> = (props) => {
    return (
        <div className="text-overview">
            <div className="text-overview-title">{props.title}</div>
            <div className="text-overview-description">{props.description}</div>
        </div>
    );
};
