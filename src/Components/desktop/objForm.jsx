import React, { Component } from 'react';
import "../../css/desktop/obj.css"

class ObjForm extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Objective
            </span>
            <div className="main_cont_form">
                <span className="form_input" id='objective'>
                    <label htmlFor="">Objective</label>
                    <input type="text" />
                </span>
            </div>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-1' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-3' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default ObjForm;