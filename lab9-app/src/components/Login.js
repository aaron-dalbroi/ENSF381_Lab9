

function Login() {
    return (
        <div>
            <div className="container_login">

                <form className="form">
                <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input className="input_field" type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input className="input_field" type="password" id="password" name="password" />
                    </div>
                    <button className="login_button" type="submit">Submit</button>
                </form>
            </div>
            <div className="error_messages">
                <p className="error_message">Example Error</p>
            </div>

        </div>
    );
}

export default Login;