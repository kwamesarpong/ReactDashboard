import React, { Component } from 'react'


class Addcollaborator extends Component {
    render() {
        return (
            <div>
                <div id="collabModal" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-md">

                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Add Collaborator</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="general-padding-bottom">
                                            <p><b>Collaborator Name</b></p>
                                            <input type="text" className="general-input" placeholder="Collaborator Name" />
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

export default Addcollaborator;