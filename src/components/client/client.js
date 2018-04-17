import React, { Component } from 'react'
import Sidenav from '../common/sidenav'
import Topnav from '../common/topnav'
import ClientList from './clientlist'
import Addclient from './addclient'


class Client extends Component {
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
                                                    <h3>Clients</h3>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <button className="button-style" data-toggle="modal" data-target="#clientModal">Add New</button>
                                                </div>
                                            </div>
                                            <ClientList />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Addclient />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Client;