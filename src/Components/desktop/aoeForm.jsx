import React, { Component } from 'react';
import "../../css/desktop/aoeForm.css"


class AOEForm extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Area of Expertise
            </span>
            <form className="main_cont_form" id='aoe_form'>
                <span className="form_input">
                    <label htmlFor="">Institution Name</label>
                    <input type="text" name='aoe_input'/>
                </span>
                    <button className="btn_add" id='aoe_btn'>Add</button>
                <ol id='aoe_list' className='order_list_design'>
                    <span className='list_header'>List of Reference</span>
                    <li>Microsoft Word</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Power Point</li>
                    <li>Programming in JAVA</li>
                </ol>
            </form>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-5' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-7' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default AOEForm;