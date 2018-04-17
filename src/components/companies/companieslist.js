import React, { Component } from 'react'


class CompaniesList extends Component {
    render() {
        return (
            <div>
                <div class="table-responsive">          
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Gapson Company Limited</td>
                            <td>Cantonments, Accra</td>
                            <td>0241234567</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Asanduff Group of Companies</td>
                            <td>Adenta, Accra</td>
                            <td>0241234567</td>
                            <td><a href="">View more ...</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CompaniesList;