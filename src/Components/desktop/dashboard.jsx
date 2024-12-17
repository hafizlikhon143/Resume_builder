import React, { Component } from 'react';
import '../../css/desktop/dashboard.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import { Pencil, X } from 'react-bootstrap-icons';


class Dashboard extends Component {
    state = {}

    render() { 
        return <React.Fragment>
            <div className="container-md border pt-5" id="main_cont_dashboard">
                <div className="row">
                    <span className="fs-4 fw-bold text-center rounded col-11 m-auto text-dark mt-2 bg-light border">Dashboard</span>
                </div>
                <div className="row" id='cv_list'>
                    <div id='list_header' className="row col-11 mt-2 text-align-center m-auto text-uppercase fw-bold bg-light border">
                        <div className="col-3 text-center p-2 m-auto list_header">CV Name</div>
                        <div className="col-3 text-center p-2 m-auto list_header">Template Name</div>
                        <div className="col-3 text-center p-2 m-auto list_header">Created</div>
                        <div className="col-2 text-center p-2 m-auto list_header">Action</div>
                    </div>
                    <div className="cont p-0">

                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Hafiz Likhon</div>
                            <div className="col-3 text-center p-2 m-auto">Blue Classic</div>
                            <div className="col-3 text-center p-2 m-auto">2/5/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-1'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-1'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                        <div className="row mt-2 m-auto text-uppercase col-11 bg-light border">
                            <div className="col-3 text-center p-2 m-auto">Nurul Anwar Sumon</div>
                            <div className="col-3 text-center p-2 m-auto">Red Rock</div>
                            <div className="col-3 text-center p-2 m-auto">1/10/2023</div>
                            <div className="col-2 text-center p-2 m-auto">
                                <button className="btn btn-success mx-1 p-1 px-2" id='btn-update-2'><Pencil/></button>
                                <button className="btn btn-danger mx-1 p-0" id='btn-delete-2'><X className='fs-2'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default Dashboard;
