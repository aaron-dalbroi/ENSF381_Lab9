import React, { useState } from "react";

function HousePricePredictor() {
    const [formData, setFormData] = useState({
        city: "",
        province: "",
        latitude: "",
        longitude: "",
        lease_term: "",
        type: "",
        beds: "",
        baths: "",
        sq_feet: "",
        furnishing: "Unfurnished",
        smoking: "No",
        pets: false,
    });
    const [predictedPrice, setPredictedPrice] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    async function Predict(e) {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch("http://localhost:5000/predict_house_price", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setPredictedPrice(data.predicted_price);
                setErrorMessage("");
            } else {
                setErrorMessage(data.message || "Prediction failed");
                setPredictedPrice(null);
            }
        } catch (error) {
            setErrorMessage("An error occurred during prediction");
            console.error(error);
        }
    }

    return (
        <div className="container_predictor">
            <h2>House Price Predictor</h2>
            <form className="form" onSubmit={Predict}>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        className="input_field"
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="province">Province:</label>
                    <input
                        className="input_field"
                        type="text"
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="latitude">Latitude:</label>
                    <input
                        className="input_field"
                        type="number"
                        id="latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                        step="any"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="longitude">Longitude:</label>
                    <input
                        className="input_field"
                        type="number"
                        id="longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                        step="any"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lease_term">Lease Term:</label>
                    <input
                        className="input_field"
                        type="text"
                        id="lease_term"
                        name="lease_term"
                        value={formData.lease_term}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type of House:</label>
                    <input
                        className="input_field"
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="beds">Number of Beds:</label>
                    <input
                        className="input_field"
                        type="number"
                        id="beds"
                        name="beds"
                        value={formData.beds}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="baths">Number of Baths:</label>
                    <input
                        className="input_field"
                        type="number"
                        id="baths"
                        name="baths"
                        value={formData.baths}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sq_feet">Square Feet:</label>
                    <input
                        className="input_field"
                        type="number"
                        id="sq_feet"
                        name="sq_feet"
                        value={formData.sq_feet}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="furnishing">Furnishing:</label>
                    <select
                        className="input_field"
                        id="furnishing"
                        name="furnishing"
                        value={formData.furnishing}
                        onChange={handleChange}
                        required
                    >
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Partially Furnished">Partially Furnished</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="smoking">Smoking:</label>
                    <select
                        className="input_field"
                        id="smoking"
                        name="smoking"
                        value={formData.smoking}
                        onChange={handleChange}
                        required
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="pets">Pets:</label>
                    <input
                        type="checkbox"
                        id="pets"
                        name="pets"
                        checked={formData.pets}
                        onChange={handleChange}
                    />
                </div>
                <button className="predictor_button" type="submit">Predict</button>
            </form>
            {predictedPrice !== null && (
                <div className="prediction_result">
                    <p>Predicted Rent Price: ${predictedPrice.toFixed(2)}</p>
                </div>
            )}
            {errorMessage && (
                <div className="error_messages">
                    <p className="error_message">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default HousePricePredictor;