import React, { Component } from 'react'


class Addpurchase extends Component {
    render() {
        return (
            <div>
                <div id="purModal" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-md">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Add Purchase</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="general-padding-bottom">
                                            <p><b>Transaction</b></p>
                                            <input type="text" className="general-input" placeholder="Transaction" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Client</b></p>
                                            <input type="text" className="general-input" placeholder="Client" />
                                        </div>
                                        <div className="general-padding-bottom">
                                            <p><b>Date</b></p>
                                            <input type="text" className="general-input" placeholder="Date" />
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

export default Addpurchase;