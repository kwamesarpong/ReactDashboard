import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardImg from './img/dashboard.png'
import CompanyImg from './img/company.png'
import RecordImg from './img/record.png'
import RegistrationImg from './img/registration.png'
import ClientImg from './img/client.png'
import PurchaseImg from './img/purchase.png'
import SettingsImg from './img/settings.png'


class Sidenav extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-sidenav">
                    <Link to="/" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ DashboardImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Dashboard
                            </div>
                        </div>
                    </Link>
                    <Link to="/companies" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ CompanyImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Companies
                            </div>
                        </div>
                    </Link>
                    <Link to="/landrecords" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ RecordImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Land Records
                            </div>
                        </div>
                    </Link>
                    <Link to="/registration" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ RegistrationImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Title Registration
                            </div>
                        </div>
                    </Link>
                    <Link to="/client" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ ClientImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Clients
                            </div>
                        </div>
                    </Link>
                    <Link to="/purchases" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ PurchaseImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Purchases
                            </div>
                        </div>
                    </Link>
                    <Link to="/settings" className="sidenav-link">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={ SettingsImg } alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;Settings
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sidenav;