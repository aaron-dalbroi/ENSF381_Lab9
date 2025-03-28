function HousePricePredictor() {
    
    function Predict(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted");
    }

    return (
        <div className="container_predictor">
            <h2>House Price Predictor</h2>
            <form className="form" onSubmit={Predict}>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input className="input_field" type="text" id="city" name="city" required />
                </div>
                <div className="form-group">
                    <label htmlFor="province">Province:</label>
                    <input className="input_field" type="text" id="province" name="province" required />
                </div>
                <div className="form-group">
                    <label htmlFor="latitude">Latitude:</label>
                    <input className="input_field" type="number" id="latitude" name="latitude" step="any" required />
                </div>
                <div className="form-group">
                    <label htmlFor="longitude">Longitude:</label>
                    <input className="input_field" type="number" id="longitude" name="longitude" step="any" required />
                </div>
                <div className="form-group">
                    <label htmlFor="leaseTerm">Lease Term:</label>
                    <input className="input_field" type="text" id="leaseTerm" name="leaseTerm" required />
                </div>
                <div className="form-group">
                    <label htmlFor="typeOfHouse">Type of House:</label>
                    <input className="input_field" type="text" id="typeOfHouse" name="typeOfHouse" required />
                </div>
                <div className="form-group">
                    <label htmlFor="beds">Number of Beds:</label>
                    <input className="input_field" type="number" id="beds" name="beds" required />
                </div>
                <div className="form-group">
                    <label htmlFor="baths">Number of Baths:</label>
                    <input className="input_field" type="number" id="baths" name="baths" required />
                </div>
                <div className="form-group">
                    <label htmlFor="squareFeet">Square Feet:</label>
                    <input className="input_field" type="number" id="squareFeet" name="squareFeet" required />
                </div>
                <div className="form-group">
                    <label htmlFor="furnishing">Furnishing:</label>
                    <select className="input_field" id="furnishing" name="furnishing" required>
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Partially Furnished">Partially Furnished</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="smoking">Smoking:</label>
                    <select className="input_field" id="smoking" name="smoking" required>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pets">Pets:</label>
                    <input type="checkbox" id="pets" name="pets" />
                </div>
                <button className="predictor_button" type="submit">Predict</button>
                <div className="prediction_result">
                    <p>Predicted Rent Price:</p>
                </div>
            </form>
        </div>
    );
}

export default HousePricePredictor;