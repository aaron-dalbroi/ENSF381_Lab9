import React, { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    async function ValidateLogin(e) {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch("http://localhost:5000/validate_login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log("Login successful:", data);
                // Handle successful login (e.g., redirect or update UI)
            } else {
                setErrorMessage(data.message || "Invalid username or password");
            }
        } catch (error) {
            setErrorMessage("An error occurred during login");
            console.error(error);
        }
    }

    return (
        <div>
            <div className="container_login">
                <form className="form" onSubmit={ValidateLogin}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input
                            className="input_field"
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                            className="input_field"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="login_button" type="submit">Submit</button>
                </form>
            </div>
            {errorMessage && (
                <div className="error_messages">
                    <p className="error_message">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Login;