import React, { Component } from 'react';

export default class Wishlist extends Component {
    render() {
        return (
            <div className="right_col" role="main" style={{ minHeight: '100vh' }}>
                <section className="mt-5 pt-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Wishlist</h3>
                                    </div>
                                    <div className="card-body pb-5">
                                        <h5 className="text-center">Book List</h5>
                                        <div className="table-responsive">
                                            <table id="wishlist_table" className="table table-white" style={{ width: '100%' }}>
                                                <thead>
                                                    <tr>
                                                        <th>ID Book</th>
                                                        <th>Cover</th>
                                                        <th>Title</th>
                                                        <th>Author</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr id="data1">
                                                        <td>10100733</td>
                                                        <td className="text-center">
                                                            <img height="100" src="assets/images/segitiga.jpg" />
                                                        </td>
                                                        <td>Segi Tiga</td>
                                                        <td>Sapardi Djoko Damono</td>
                                                        <td>
                                                            <span className="badge badge-danger">
                                                                Tidak Dapat Dipinjam
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="detailpageUser.html"
                                                                className="btn shadow btn-sm btn-light"><i
                                                                    className="fa fa-info"></i></a>
                                                            <a id="btn-data1" href="#"
                                                                className="btn shadow btn-sm btn-danger"><i
                                                                    className="fa fa-trash"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr id="data2">
                                                        <td>10100785</td>
                                                        <td className="text-center">
                                                            <img height="100" src="assets/images/misteri.jpg" />
                                                        </td>
                                                        <td>Misteri Terakhir #1</td>
                                                        <td>S. Mara Gd.</td>
                                                        <td>
                                                            <span className="badge badge-success">
                                                                Dapat Dipinjam
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <a href="detailpageUser.html"
                                                                className="btn shadow btn-sm btn-light"><i
                                                                    className="fa fa-info"></i></a>
                                                            <a id="btn-data2" href="#" className="btn btn-sm btn-danger"><i
                                                                className="fa fa-trash"></i></a>
                                                            <a id="btn-pinjam2" href="#"
                                                                className="btn shadow btn-sm btn-success">
                                                                Borrow
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        )
    }
}