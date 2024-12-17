import React, { Component } from 'react';
import "../../css/desktop/refForm.css";

class ReferenceForm extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Reference
            </span>
            <form className="main_cont_form" id='ref_form'>
                <span className="form_input">
                    <label htmlFor="">Name</label>
                    <input type="text" name='ref_name_input'/>
                </span>
                <span className="form_input">
                    <label htmlFor="">Phone</label>
                    <input type="number" name='ref_number_input'/>
                </span>
                    <button className="btn_add" id='ref_btn'>Add</button>
                <ol id='aoe_list' className='order_list_design'>
                    <span className='list_header'>Area of Expertise</span>
                    <li>Microsoft Word</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Power Point</li>
                    <li>Programming in JAVA</li>
                </ol>
            </form>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-6' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-8' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default ReferenceForm;