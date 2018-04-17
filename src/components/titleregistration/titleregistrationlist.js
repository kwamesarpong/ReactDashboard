import React, { Component } from 'react'


class TitleRegistrationList extends Component {
    render() {
        return (
            <div>
                <div class="table-responsive">          
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Document ID</th>
                            <th>Land Code</th>
                            <th>Client</th>
                            <th>Contact</th>
                            <th>Registration Point</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>100000221</td>
                            <td>63FG7E</td>
                            <td>Femi Bilesanmi</td>
                            <td>0241234567</td>
                            <td>Lands Commission</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>100000222</td>
                            <td>63FG7E</td>
                            <td>Kwame Sarpong</td>
                            <td>0241234547</td>
                            <td>Lands Commission</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TitleRegistrationList;