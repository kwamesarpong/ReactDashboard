import React, { Component } from 'react'
import Sidenav from '../common/sidenav'
import Topnav from '../common/topnav'
import IndentureImg from '../common/img/inde.png'
import AgencyImg from '../common/img/agen.png'
import FamilyImg from '../common/img/fam.png'
import SizeImg from '../common/img/cube.png'


class Dashboard extends Component {
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
                                <div className="col-md-3 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-4 dashboard-card-icon text-center">
                                            <img src={ IndentureImg } alt="" />
                                        </div>
                                        <div className="col-md-8 dashboard-card-details">
                                            <h5>INDENTURES</h5>
                                            <p>212645</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-4 dashboard-card-icon text-center">
                                            <img src={ AgencyImg } alt="" />
                                        </div>
                                        <div className="col-md-8 dashboard-card-details">
                                            <h5>AGENCIES</h5>
                                            <p>1055</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-4 dashboard-card-icon text-center">
                                            <img src={ FamilyImg } alt="" />
                                        </div>
                                        <div className="col-md-8 dashboard-card-details">
                                            <h5>FAMILIES</h5>
                                            <p>23645</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-4 dashboard-card-icon-df text-center">
                                            <img src={ SizeImg } alt="" />
                                        </div>
                                        <div className="col-md-8 dashboard-card-details">
                                            <h5>TOTAL LAND SIZE</h5>
                                            <p>19087</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-12 dashboard-graph-card">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-12 dashboard-graph-card">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;