import React, { Component } from 'react'
import Logout from './img/logout.png'


class Topnav extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2 topnav-height topnav-logo text-center">
                        <p>Indenture</p>
                    </div>
                    <div className="col-md-10 topnav-height topnav-logout">
                        <img src={ Logout } alt="" /> Log out
                    </div>
                </div>
            </div>
        );
    }
}

export default Topnav;