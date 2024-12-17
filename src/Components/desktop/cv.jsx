import React, { Component } from 'react';
import mypic from "../../Icon/my-pic.jfif";
import '../../css/desktop/cv.css';
import { PersonCircle, CardChecklist, BookFill, PersonWorkspace, TrophyFill, PersonBadgeFill } from "react-bootstrap-icons"



class CV extends Component {
    state = {
        data : {}
    } 
    componentDidMount() {
        var cv_data = fetch("http://192.168.56.1:8000/cv_body")
            .then(r => {
                return r.json();
            })
            .then(
                d => {
                    console.log(d.data.personal_info);
                    console.log(d.data.skill_info);
                    this.setState({
                        data: d.data.personal_info
                    })
                }
        ).catch(e => {
            console.log(e);
        }).finally(console.log("Sending request is completed!........."))
    }
    render() { 
        return (
            <React.Fragment>
                <div id="cv_cont">
                    <div className="cv_main">
                        <div className="img_cont">
                            <img src={mypic} alt="cv_pic" />
                        </div>
                        <div className="name_and_title">
                            <span className="full_name">{this.state.data.full_name }</span>
                            <span className="job_title">Software Engineer</span>
                            <span className="bios">
                                "My name is {this.state.data.full_name} and I am a Junior Web Developer for Oswald Technologies. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances that happen every day at Oswald Tech. I graduated from the California Institute of Technology in 2016 with a bachelor's degree in software development.
                            </span>
                        </div>
                        <div className="contact">
                            <span className="header"><PersonCircle/>Contact</span>
                            <span className="address">{this.state.data.address}</span>
                            <span className="email">{this.state.data.email}</span>
                            <span className="phone_number">{this.state.data.phone_no}</span>
                            <span className="facebook_link">https://www.facebook.com/NHL143</span>
                            <span className="linkedin_link">https://www.linkedin.com/in/nurul-hafiz-likhon</span>
                        </div>
                        <div className="skills_list">
                            <span className="header"><CardChecklist/>Skill List</span>
                            <ul>
                                <li><span>Teamwork</span><span className="bar" id='bar-teamwork'></span></li>
                                <li><span>Decision making</span><span className="bar" id='bar-Decision_making'></span></li>
                                <li><span>Computer Skill</span><span className="bar" id='bar-cmt_skill'></span></li>
                                <li><span>Teamwork</span><span className="bar" id='bar-teamwork'></span></li>
                                <li><span>Decision making</span><span className="bar" id='bar-Decision_making'></span></li>
                                <li><span>Computer Skill</span><span className="bar" id='bar-cmt_skill'></span></li>
                            </ul>
                        </div>
                        <div className="education">
                            <span className="header"><BookFill/>Education</span>
                            <ul>
                                <li>
                                    <span className="inst_name">Graphics Art Institute</span>
                                    <br />
                                    <span className="exam_name">Diploma In Engineering</span>
                                    <br />
                                    <span className="subject">Computer Engineering Technology</span>
                                    <br />
                                    <span className="passing_year">2023</span>
                                </li>
                                <li>
                                    <span className="inst_name">Monipur Highschool & College</span>
                                    <br />
                                    <span className="exam_name">S.S.C</span>
                                    <br />
                                    <span className="subject">Science</span>
                                    <br />
                                    <span className="passing_year">2018</span>
                                </li>
                                <li>
                                    <span className="inst_name">Monipur Highschool & College</span>
                                    <br />
                                    <span className="exam_name">S.S.C</span>
                                    <br />
                                    <span className="subject">Science</span>
                                    <br />
                                    <span className="passing_year">2018</span>
                                </li>
                            </ul>                            
                        </div>
                        <ul className='work_exp'>
                            <span className="header"><PersonWorkspace/>Work Experience</span>
                            <li>
                                <span className="work_pos_name">Junior Executive</span>
                                <br />
                                <span className="work_inst_name">Watermark Agency</span>
                                <br />
                                <span className="work_time">2022 - 2023</span>
                            </li>
                            <li>
                                <span className="work_pos_name">Junior Call Executive</span>
                                <br />
                                <span className="work_inst_name">FIFO TECH</span>
                                <br />
                                <span className="work_time">2022 - 2022</span>
                            </li>
                            <li>
                                <span className="work_pos_name">Freelancer</span>
                                <br />
                                <span className="work_inst_name">Fiverr</span>
                                <br />
                                <span className="work_time">2020 - 2023</span>
                            </li>
                        </ul>
                        <ul id="custom_list_1" className='custom_list'>
                            <span className="header"><TrophyFill/>Arechivement</span>
                            <li>I build a automatic CV creating website</li>
                            <li>I build a Blog website</li>
                            <li>I created a dashboard for counting product</li>
                        </ul>
                        <div id="custom_field_1" className='custom_field'>
                            <div className="header"><PersonBadgeFill/>Reference</div>
                            <p>Name: Sobuj <br /> Phone: 01531379620</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default CV;