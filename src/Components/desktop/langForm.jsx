import React, { Component } from 'react';
import "../../css/desktop/langForm.css"


class LanguageForm extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Language
            </span>
            <div className="main_cont_form">
                <span className="form_input" id='language_form'>
                    <label htmlFor="">Language</label>
                    <input type="text" id='language_input' />
                </span>
                <button id='lang_btn' className='btn_add'>Add</button>
            </div>
            <ol id="lang_list" className='order_list_design'>
                <span className="list_header">
                    Language List
                </span>
                <li>Bangla</li>
                <li>English</li>
                <li>Hindi</li>
            </ol>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-4' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-6' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default LanguageForm;