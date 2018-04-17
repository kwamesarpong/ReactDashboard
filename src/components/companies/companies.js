import React, { Component } from 'react'
import Sidenav from '../common/sidenav'
import Topnav from '../common/topnav'
import CompaniesList from './companieslist'
import Addcompany from './addcompany'


class Companies extends Component {
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
                                                    <h3>Real Estate Agencies</h3>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <button className="button-style" data-toggle="modal" data-target="#compModal">Add New</button>
                                                </div>
                                            </div>
                                            <CompaniesList />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Addcompany />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Companies;