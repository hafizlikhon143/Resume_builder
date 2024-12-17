import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './desktop/navbar';
import MainBody from './desktop/mainbody';
import Dashboard from './desktop/dashboard';
import Profile from './desktop/profile';
import CV from './desktop/cv';
import "../css/desktop/style.css"
import AllDashboard from './desktop/all_dashboard';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


class Main extends Component {
    state = {}

    render() { 
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<MainBody/>} />
                    <Route exact path='/all_dashboard' element={<AllDashboard />}>
                        <Route exact path='/all_dashboard/cv_dashboard' element={<Dashboard />} />
                        <Route exact path='/all_dashboard/cv/:int' element={
                            <div id="scrollable">
                                <CV />
                            </div>
                        } />
                        <Route exact path='/all_dashboard/profile' element={<Profile/>} />
                    </Route>
                </Routes>
            </Router>
        </React.Fragment>
        ;
    }
}
 
export default Main;