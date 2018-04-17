import React, { Component } from 'react'


class LandRecordsList extends Component {
    render() {
        return (
            <div>
                <div class="table-responsive">          
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Land Code</th>
                            <th>Location</th>
                            <th>Client</th>
                            <th>Lease Duration</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>63FG7E</td>
                            <td>Kasoa</td>
                            <td>Femi Bilesanmi</td>
                            <td>50 years</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>63FG7E</td>
                            <td>Kasoa</td>
                            <td>Femi Bilesanmi</td>
                            <td>50 years</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LandRecordsList;