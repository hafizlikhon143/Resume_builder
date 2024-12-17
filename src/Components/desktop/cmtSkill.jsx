import React, { Component } from 'react';
import "../../css/desktop/cmtSkill.css";


class CMTSkill extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Soft Skills
            </span>
            <div className="main_cont_form">
                <span className="form_input" id='cmtskill_name_form'>
                    <label htmlFor="">Name</label>
                    <input type="text" id='cmtskill_input' />
                </span>
                <button id='cmtskill_btn' className='btn_add'>Add</button>
            </div>
            <ol id="cmtskill_list" className='order_list_design'>
                <span className="list_header">
                    Computer Skills List
                </span>
                <li>MS World</li>
                <li>MS Execl</li>
                <li>Typing speed 60 WPM</li>
            </ol>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-7' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-8' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
            <button className="commit_btn">Finish</button>
        </React.Fragment>;
    }
}
 
export default CMTSkill;