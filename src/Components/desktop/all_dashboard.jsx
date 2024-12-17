import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../../css/mobile/dashboard_nav.css';
import Dashboard from './dashboard';
import Profile from './profile';
class AllDashboard extends Component {
    state = {}
    
    underLine = {
        borderBottom: "2px var(--bs-dark) solid",
        textDecoration: "none",
        color: "var(--bs-dark)",
    }

    render() { 
        return <React.Fragment>
            <div className="mx-3">
                <div className="row" style={{
                    marginTop: "120px",
                }}>
                    <div id="option_list_cont" className='row m-0 col-4 col-lg-3 col-md-4 bg-light border' style={{
                        padding: "20px 20px 40px 20px",
                        maxHeight: "200px"
                    }}>
                        <Link className="col-12 fs-6 p-2 fw-bold" style={this.underLine} to="cv_dashboard">CV Dashboard</Link>
                        <Link className="col-12 fs-6 p-2 fw-bold" style={this.underLine} to="profile">User Profile</Link>
                        <div className="col-12 fs-6 p-2 fw-bold" style={this.underLine}>Logout</div>
                    </div>
                    <div id="view_cont" className="col-12 col-lg-9 col-md-8 m-auto">
                        <Outlet/>
                    </div>
                </div>
                </div>
        </React.Fragment>;
    }
}
 
export default AllDashboard;