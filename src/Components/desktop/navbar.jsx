import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Avater from "../../Icon/user.png";
import "../../css/desktop/navbar.css"

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div id="main_nav" className="nav_bar">
                    <div id="nav_header">
                        WevCV
                    </div>
                    {/* nav Menu */}
                    <ul className="nav_items">
                        <li className="nav_item">
                            <Link to="/" className='nav_link'>Build CV</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/all_dashboard/cv_dashboard" className='nav_link'>Dashboard</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/" className='nav_link'>Upgrade</Link>
                        </li>
                        {/*  */}
                        <li className="nav_item u_cont">
                            <img src={Avater} alt="avater" id="u_avater" width="40px" />
                            <span className='u_menu'>
                                <span className='u_name'>Likhon</span>
                                <span className='u_status'>ADMIN</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <ul className="user_nav_dropdown">
                    <h3 className='menu_header'>User Menu</h3>
                    <li><a href="#">PROFILE</a></li>
                    <li><a href="#">SETTINGS</a></li>
                    <li><a href="#">Share a CV</a></li>
                    <li><a href="#">LOGOUT</a></li>
                </ul>
            </React.Fragment>
        );
    }
}
 
export default Navbar;