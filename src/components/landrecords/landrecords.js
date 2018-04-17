import React, { Component } from 'react'
import Sidenav from '../common/sidenav'
import Topnav from '../common/topnav'
import LandRecordsList from './landrecordslist'
import Addrecord from './addrecord'


class LandRecords extends Component {
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
                                                    <h3>Land Records</h3>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <button className="button-style" data-toggle="modal" data-target="#recModal">Add New</button>
                                                </div>
                                            </div>
                                            <LandRecordsList />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Addrecord />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandRecords;