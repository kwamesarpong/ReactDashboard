import React, { Component } from 'react'


class Addrecord extends Component {
    render() {
        return (
            <div>
                <div id="recModal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-md">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Add Land Record</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="general-padding-bottom">
                                            <p><b>Land Code</b></p>
                                            <input type="text" className="general-input" placeholder="Land Code" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Location</b></p>
                                            <input type="text" className="general-input" placeholder="Location" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Client</b></p>
                                            <input type="text" className="general-input" placeholder="Client Name" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Lease Duration</b></p>
                                            <input type="text" className="general-input" placeholder="Lease Duration" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <hr />
                                        <button type="submit" className="button-style">Save</button>
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

export default Addrecord;