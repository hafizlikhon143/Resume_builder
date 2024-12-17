import React, { Component } from 'react';
import { ArrowLeft, ArrowRight, X } from 'react-bootstrap-icons';
// Import CSS
import "../../css/desktop/main_body.css";
import "../../css/mobile/main_body.css";
import "../../css/opt_temp.css";
// Icon Import
import Personal_Img from "../../Icon/user.png";
import Eye_Img from "../../Icon/translate.png";
import Download_Img from "../../Icon/download.png";
import Files_Img from "../../Icon/files.png";
import Thinking_Img from "../../Icon/logical-thinking.png";
import Mortarboard_Img from "../../Icon/mortarboard.png";
import PaintBucket_Img from "../../Icon/paint-bucket.png";
import Refer_Img from "../../Icon/refer.png";
import Skill_Img from "../../Icon/skills.png";
import Target_Img from "../../Icon/target.png";
import Translate_Img from "../../Icon/translate.png"
import Work_Img from "../../Icon/work.png";
// Import Forms
import PersonalForm from './psForm';
import ObjForm from './objForm';
import ExpForm from './expForm';
import EducationForm from './eduForm';
import LanguageForm from './langForm';
import AOEForm from './aoeForm';
import ReferenceForm from './refForm';
import CMTSkill from './cmtSkill';
// Import IMG
import CV1 from "../../cv_image/cv_style_1.jpeg";





class MainBody extends Component {
    state = {} 

    componentDidMount() {
        console.clear();
    }
    
    handleSidebarToggle = () => {
        var btn_toggle = document.querySelector("#side_bar_2");
        btn_toggle.classList.toggle("btn_active");
    }
    handleChangeTemplate = () => {
        var chng_temp_opt = document.getElementById("change_template_opt");
        chng_temp_opt.classList.toggle("active_opt");
    }
    handleChangeClr = () => {
        var chng_temp_opt = document.querySelector(".change_template_color");
        chng_temp_opt.classList.toggle("active_opt");
    }
    handleScrollLeft = () => {
        var scrollLeft = document.querySelector(".cont_opt_img");
        scrollLeft.scrollLeft = scrollLeft.scrollLeft + 240;
    }
    handleScrollRight = () => {
        var scrollLeft = document.querySelector(".cont_opt_img");
        scrollLeft.scrollLeft = scrollLeft.scrollLeft - 240;
    }
    render() { 
        return (
            <div className="main_body">
                {/* Sidebar One */}
                <button id="btn_sidebar" onClick={this.handleSidebarToggle}>{ ">"}</button>
                <div className="side_bar" id="side_bar_1">
                    <h2>Form Section</h2>
                    <p>Write Proper information for cv each section</p>
                    <div className="inner_cont">
                        <a href='#form-bx-1' className="inner_item">
                            <img src={Personal_Img} alt="" className="cv_img" />
                            <span className="img_text">Personal Blog</span>
                        </a>
                        <a href='#form-bx-2' className="inner_item">
                            <img src={Target_Img} alt="" className="cv_img" />
                            <span className="img_text">Objective</span>
                        </a>
                        <a href='#form-bx-3' className="inner_item">
                            <img src={Work_Img} alt="" className="cv_img" />
                            <span className="img_text">Work Experience</span>
                        </a>
                        <a href='#form-bx-4' className="inner_item">
                            <img src={Mortarboard_Img} alt="" className="cv_img" />
                            <span className="img_text">Education</span>
                        </a>
                        <a href='#form-bx-5' className="inner_item">
                            <img src={Translate_Img} alt="" className="cv_img" />
                            <span className="img_text">Language</span>
                        </a>
                        <a href='#form-bx-6' className="inner_item">
                            <img src={Thinking_Img} alt="" className="cv_img" />
                            <span className="img_text">Area of Expertise</span>
                        </a>
                        <a href='#form-bx-7' className="inner_item">
                            <img src={Refer_Img} alt="" className="cv_img" />
                            <span className="img_text">Reference</span>
                        </a>
                        <a href='#form-bx-8' className="inner_item">
                            <img src={Skill_Img} alt="" className="cv_img" />
                            <span className="img_text">Computer Skills</span>
                        </a>
                    </div>
                </div>
                {/* Main Container */}
                <div className="main_cont">
                    <div className="form_cont_outter">
                        <div className="form_cont" id='form-bx-1'>
                            <PersonalForm/>
                        </div>
                        <div className="form_cont" id='form-bx-2'>
                            <ObjForm/>
                        </div>
                        <div className="form_cont" id='form-bx-3'>
                            <ExpForm/>
                        </div>
                        <div className="form_cont" id='form-bx-4'>
                            <EducationForm/>
                        </div>
                        <div className="form_cont" id='form-bx-5'>
                            <LanguageForm/>
                        </div>
                        <div className="form_cont" id='form-bx-6'>
                            <AOEForm/>
                        </div>
                        <div className="form_cont" id='form-bx-7'>
                            <ReferenceForm/>
                        </div>
                        <div className="form_cont" id='form-bx-8'>
                            <CMTSkill/>
                        </div>
                        <div className="form_cont" id='form-bx-8'>
                            <CMTSkill/>
                        </div>
                    </div>
                </div>
                {/* Sidebar 2 */}
                <div className="side_bar" id="side_bar_2">
                    <h2>Resume Setting</h2>
                    <p>Configure how CV will look</p>
                    <h4>Templates</h4>
                    <div className="template_img_cont" onClick={this.handleChangeTemplate}>
                        <img src={CV1} alt="template Img" className="temp_img" />
                        <span style={{"fontSize": "12px"}}>Change Template</span>
                    </div>
                    <h4>Template Option</h4>
                    <div className="temp_opt_cont">
                        <div className="temp_opt_btn" onClick={this.handleChangeClr}>
                            <img src={PaintBucket_Img} alt="" />
                            Change Fill Color
                        </div>
                        <div className="temp_opt_btn">
                            <img src={Download_Img} alt="" />
                            Download
                        </div>
                        <div className="temp_opt_btn">
                            <img src={Eye_Img} alt="" />
                            Preview
                        </div>
                        <div className="temp_opt_btn" onClick={this.handleChangeTemplate}>
                            <img src={Files_Img} alt="" />
                            Change Template
                        </div>
                    </div>
                </div>
                {/* Change Template Option */}
                <div id="change_template_opt" className='active_opt'>
                    {/* <button className='btn_change_deactivate'></button> */}
                    <X className='btn_change_deactivate' onClick={this.handleChangeTemplate} />
                    <div className="template_inner_cont">
                        <div className="cont_opt_img">
                            <img src={CV1} className="temp_opt_img" alt="" />
                            <img src={CV1} className="temp_opt_img" alt="" />
                            <img src={CV1} className="temp_opt_img" alt="" />
                            <img src={CV1} className="temp_opt_img" alt="" />
                            <img src={CV1} className="temp_opt_img" alt="" />
                            <img src={CV1} className="temp_opt_img" alt="" />
                        </div>
                        <button className="btn_chng btn_left" onClick={this.handleScrollLeft}><ArrowLeft/></button>
                        <button className="btn_chng btn_right" onClick={this.handleScrollRight}><ArrowRight/></button>
                    </div> 
                </div>
                {/* Change Color */}
                <div className="change_template_color active_opt">
                    <X className='chng_temp_clr_btn' onClick={this.handleChangeClr} />
                    <input type="color" className='temp_color_input' name='template_color' />
                </div>
            </div>
        );
    }
}
export default MainBody;