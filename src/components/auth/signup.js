import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Signup extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid auth-height">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <h2><b>Indenture</b></h2>
                                <h4 className="auth-padding">Sign Up</h4>
                                <form>
                                    <div className="auth-padding">
                                        <input type="text" className="general-input" placeholder="Company Name" required="true" />
                                    </div>
                                    <div className="auth-padding">
                                        <input type="email" className="general-input" placeholder="Email" required="true" />
                                    </div>
                                    <div className="auth-padding">
                                        <input type="password" className="general-input" placeholder="Password" required="true" />
                                    </div>
                                    <div className="auth-padding">
                                        <input type="password" className="general-input" placeholder="Confirm password" required="true" />
                                    </div>
                                    <div className="auth-padding">
                                        <button type="submit" className="auth-button">Login</button>
                                    </div>
                                </form>
                                <p>Have an account? <Link to="/login">Log in here.</Link></p>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Signup;