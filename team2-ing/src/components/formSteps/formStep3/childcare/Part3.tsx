export const Part3 = () => {
    return (
        <div className="form3 part3">
            <div className="input-text benefits">
                <label className="input-text benefits" form="benefits">
                    How much benefits are you receiving as a parent?
                    (Elterngeld, Kindergeld)
                    <br />
                    <em style={{fontSize: "15px", marginBottom: "5px"}}>
                        If your partner is receiving all of these benefits into
                        their account please input 0 euros
                    </em>
                </label>
                <input
                    type="text"
                    id="benefits"
                    name="benefits"
                    className="benefits"
                />
            </div>
        </div>
    );
};
