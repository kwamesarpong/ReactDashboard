import React, { Component } from 'react'
import Sidenav from '../common/sidenav'
import Topnav from '../common/topnav'
import add from '../common/img/add.png'
import pro from '../common/img/pro.png'
import Addcollaborator from './addcollaborator'


class Settings extends Component {
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
                                        <div className="col-md-12 settings-card-details text-center">
                                            <h4>Add Collaborators</h4>
                                            <a data-toggle="modal" data-target="#collabModal">
                                                <img src={ add } alt="Add Collaborator" className="collaborator-img" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9 dashboard-card-height">
                                    <div className="row card-shadow">
                                        <div className="col-md-12 settings-card-details">
                                            <div className="row">
                                                <div className="col-md-2 text-center">
                                                    <img src={ pro } alt="" />
                                                </div>
                                                <div className="col-md-8">
                                                    <h4>Durachem Ghana limited</h4>
                                                    <p>Cantonments, Accra</p>
                                                    <hr />
                                                    <div className="data-div">
                                                        <p><b>Phone</b></p>
                                                        <p>030 397 5008 / 0243222127</p>
                                                    </div>
                                                    <div className="data-div">
                                                        <p><b>Website</b></p>
                                                        <p>www.durachemgh.com</p>
                                                    </div>
                                                    <div className="data-div">
                                                        <p><b>Company Manager</b></p>
                                                        <p>Martin Glover</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 text-center">
                                                    <button className="button-style">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Addcollaborator />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;