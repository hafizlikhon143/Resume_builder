import React, { Component } from 'react';
import "../../css/desktop/psForm.css";

class PersonalForm extends Component {
    state = {
        choices: ""
    }
    componentDidMount() {
        var choices = fetch("http://192.168.56.1:8000/choices")
            .then(d => {
                return d.json();
            })
            .then(res => {
                this.setState({ choices: res.choices })
            })
    }
    handlePost = e => {
        var handlePsFormPost = fetch("http://192.168.56.1:8000/create_cv", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: '{"name": "Likhon"}'
        })
    }
    getChoices() {
        var blood_group = document.getElementById("blood_type_input");
        var i;
        for (i = 0; i < (this.state.choices).length;i++){
            var opElm = document.createElement("option");
            opElm.innerHTML = `<option value="${(this.state.choices)[i].id}">${(this.state.choices)[i].desc}</option>`;
            blood_group.appendChild(opElm);
            console.log("Success");
        }

    }
    render() { 
        return <React.Fragment>
            <h4>Fill The Form With All Info</h4>
            <span className="label_main_cont">
                Personal Info
            </span>
            <div className="main_cont_form">
                <span className="form_input">
                    <label htmlFor="">Full Name</label>
                    <input type="text" id='first_name_input' />
                </span>
                {/* <span className="form_input">
                    <label htmlFor="">Last Name</label>
                    <input type="text" id='last_name_input' />
                </span> */}
                <span className="form_input">
                    <label htmlFor="">age</label>
                    <input type="number" id='age_input' />
                </span>
                <span className="form_input">
                    <label className="form_label" htmlFor="">Blood Type</label>
                    <select type="text" id='blood_type_input' >
                        <option value={null} defaultValue={null}>None</option>
                        {this.getChoices()}
                    </select>
                </span>
                <span className="form_input">
                    <label htmlFor="">Phone</label>
                    <input type="number" id='phone_input' />
                </span>
                <span className="form_input">
                    <label htmlFor="">Email</label>
                    <input type="email" id='email_input' />
                </span>
                <span className="form_input">
                    <label htmlFor="">Address 1</label>
                    <input type="text" id='Address_1' />
                </span>
                <span className="form_input">
                    <label htmlFor="">Address 2</label>
                    <input type="text" id='Address 2' />
                </span>
                <span className="form_input">
                    <label htmlFor="">Nationality</label>
                    <input type="text" id='nationality_input' />
                </span>
                <span className="form_input">
                    <label htmlFor="">Marital Status</label>
                    <input type="text" id='marital_status_input' />
                </span>
            </div>
            <div className="btn_cont">
                <div className="btn_cont_inner">
                    <a href='#form-bx-1' className='n_btn' id='btn-1' disabled>Prev</a>
                </div>
                <div className="btn_cont_inner">
                    <a href='#form-bx-2' className='n_btn' id='btn-2' onClick={this.handlePost}>Next</a>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default PersonalForm;