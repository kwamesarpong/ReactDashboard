import React, { Component } from 'react'


class Addcompany extends Component {
    render() {
        return (
            <div>
                <div id="compModal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-md">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Add Company</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="general-padding-bottom">
                                            <p><b>Name</b></p>
                                            <input type="text" className="general-input" placeholder="Company Name" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Address</b></p>
                                            <input type="text" className="general-input" placeholder="Company Address" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Phone Number</b></p>
                                            <input type="text" className="general-input" placeholder="Phone Number" />
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

export default Addcompany;