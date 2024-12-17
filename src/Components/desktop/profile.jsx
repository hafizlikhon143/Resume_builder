import React, { Component } from 'react';
import "../../css/desktop/profile.css";
import avatar_pic from "../../Icon/my-pic.jfif";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";


class Profile extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <div id="profile_cont" className='row border border-dark g-2 border-2 m-auto'>
                <div className="col-md-6 col-12 m-auto overflow-hidden">
                    <img id='profile_img_cont' src={avatar_pic} className="m-auto rounded-circle border border-dark border-2" alt="profile avater" />
                </div>
                <div className="row col-12 col-md-6 g-2">
                    <div className="col-md-12 fs-6 fw-bold px-1 fs-2">Nurul Hafiz Likhon</div>
                    <div className="col-md-4 fs-6 fw-bold px-1">Age: 21</div>
                    <div className="col-md-12 fs-6 fw-bold px-1">hafizlikhon143@gmail.com</div>
                    <div className="col-md-12 fs-6 fw-bold px-1">Birthdate: 10/02/2001</div>
                    <div className="col-6 fs-6 fw-bold d-flex"><button className="btn btn-outline-success">Edit</button></div>
                    <div className="col-6 fs-6 fw-bold d-flex"><button className="btn btn-outline-danger">Deactivate</button></div>
                </div>
            </div>
        </React.Fragment>;
    }
}

export default Profile;