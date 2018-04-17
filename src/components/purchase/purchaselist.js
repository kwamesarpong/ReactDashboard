import React, { Component } from 'react'


class PurchaseList extends Component {
    render() {
        return (
            <div>
                <div class="table-responsive">          
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Transaction</th>
                            <th>Client</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Buy</td>
                            <td>Femi Bilesanmi</td>
                            <td>13 Mar, 2018</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Sale</td>
                            <td>Kwame Sarpong</td>
                            <td>14 Mar, 2018</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PurchaseList;