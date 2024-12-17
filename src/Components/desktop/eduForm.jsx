import React, { Component } from 'react';
import "../../css/desktop/eduForm.css"


class EducationForm extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                        <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Education
            </span>
            <form className="main_cont_form" id='edu_form'>
                <span className="form_input">
                    <label htmlFor="">Institution Name</label>
                    <input type="text" name='institution_name'/>
                </span>
                <span className="form_input">
                    <label htmlFor="">Degree Name</label>
                    <input type="text" name='degree_name'/>
                </span>
                <span className="form_input">
                    <label htmlFor="">Start</label>
                    <input type="date" name='date_edu_start'/>
                </span>
                <span className="form_input">
                    <label htmlFor="">End</label>
                    <input type="date" name='date_edu_end'/>
                </span>
                    <button className="btn_add" id='edu_btn'>Add</button>
                <ul className='edu_list'>
                    <span className='list_header'>Education's</span>
                    <li style={{fontWeight: "bold"}}>Graphics Art Institute</li>
                    <li>2019 - 2022</li>
                    <li>Diploma in Computer</li>
                </ul>
            </form>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-3' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-5' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default EducationForm;