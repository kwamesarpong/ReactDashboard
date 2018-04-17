import React, { Component } from 'react'
import Sidenav from '../common/sidenav'
import Topnav from '../common/topnav'
import TitleRegistrationList from './titleregistrationlist'
import AddTitleReg from './addtitlereg'


class TitleRegistration extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Topnav />
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 sidenav-pad">
                            <Sidenav />
                        </div>
                        <div className="col-md-10 dashboard-bg">
                            <div className="row">
                                <div className="col-md-12 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-12 company-list-card">
                                            <div className="row company-list-padding">
                                                <div className="col-md-9">
                                                    <h3>Title Registration</h3>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <button className="button-style" data-toggle="modal" data-target="#trModal">Add New</button>
                                                </div>
                                            </div>
                                            <TitleRegistrationList />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AddTitleReg />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleRegistration;