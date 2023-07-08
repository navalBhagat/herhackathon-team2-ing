export const Part5 = () => {
    return (
        <div className="form3 part5">
            <div className="input-text household">
                <div className="input-text household-hours">
                    <label
                        className="input-text household-hours"
                        form="household-hours"
                    >
                        How many hours do you on household work?
                    </label>
                    <input
                        type="text"
                        id="household-hours"
                        name="household-hours"
                        className="household-hours"
                    />
                </div>
                <br />
                <div className="input-text household additional">
                    <text className="question">
                        We would like to know how much each partner spends on
                        household expenses each week: Please estimate how much
                        you spend n each fo the following items by yourself.
                        Ignore the amount your partner spends on these:
                    </text>
                    <div className="input-text household-groceries">
                        <label
                            className="household-groceries"
                            form="household-groceries"
                        >
                            Groceries
                        </label>
                        <input
                            type="text"
                            className="household-groceries"
                            id="household-groceries"
                            name="household-groceries"
                        />
                    </div>
                    <div className="input-text household-travel">
                        <label
                            className="household-travel"
                            form="household-travel"
                        >
                            Travel
                        </label>
                        <input
                            type="text"
                            className="household-travel"
                            id="household-travel"
                            name="household-travel"
                        />
                    </div>
                    <div className="input-text household-transportation">
                        <label
                            className="household-transportation"
                            form="household-transportation"
                        >
                            Transportation
                        </label>
                        <input
                            type="text"
                            className="household-transportation"
                            id="household-transportation"
                            name="household-transportation"
                        />
                    </div>
                    <div className="input-text household-utilities">
                        <label
                            className="household-utilities"
                            form="household-utilities"
                        >
                            Utilities
                        </label>
                        <input
                            type="text"
                            className="household-utilities"
                            id="household-utilities"
                            name="household-utilities"
                        />
                    </div>
                    <div className="input-text household-leisure">
                        <label
                            className="household-leisure"
                            form="household-leisure"
                        >
                            Leisure (clubs, take out, abonnements)
                        </label>
                        <input
                            type="text"
                            className="household-leisure"
                            id="household-leisure"
                            name="household-leisure"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
