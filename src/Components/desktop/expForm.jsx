import React, { Component } from 'react';
import "../../css/desktop/expForm.css";
import "../../css/mobile/expForm.css";


class ExpForm extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Work Experience
            </span>
            <form className="main_cont_form">
                <span className="form_input">
                    <label htmlFor="" style={{flex: 0}}>Company</label>
                    <input type="text" name='company_input'/>
                </span>
                <span className="form_input">
                    <label htmlFor="" style={{flex: 0}}>Date</label>
                    <input type="date" name='date_input'/>
                </span>
                <span className="form_input">
                    <label htmlFor="">Experience Description</label>
                    <input type="text" name='experience_input'/>
                </span>
                    <button className="btn_add">Add</button>
            </form>
            <span className="note" style={{marginLeft: "30px"}}>#Only five Experience Max can be Added.</span>
            <ul className="list_of_exp" style={{fontWeight: "bold"}}>
                List of Experience
                <li style={{width: "90%", fontWeight: "lighter"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur nemo placeat. Quos asperiores nostrum porro excepturi illum! Ut, officiis.</li>
                <li>10/11/2018</li>
                <li>Salse co ltd</li>
            </ul>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-2' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-4' className='n_btn' id='btn-2'>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default ExpForm;