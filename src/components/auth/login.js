import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Login extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid auth-height">
                        <div className="row">
                            <div className="hidden-xs col-md-4"></div>
                            <div className="col-xs-12 col-md-4">
                                <h2><b>Indenture</b></h2>
                                <h4 className="auth-padding">Login</h4>
                                <form>
                                    <div className="auth-padding">
                                        <input type="email" className="general-input" placeholder="Email" required="true" />
                                    </div>
                                    <div className="auth-padding">
                                        <input type="password" className="general-input" placeholder="********" required="true" />
                                    </div>
                                    <div className="auth-padding">
                                        <button type="submit" className="auth-button">Login</button>
                                    </div>
                                </form>
                                <p>No account yet? <Link to="/signup">Sign up here.</Link></p>
                            </div>
                            <div className="hidden-xs col-md-4"></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Login;