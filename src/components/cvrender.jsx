/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBook, faBriefcase, faGlobe, faPhone,faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import EducationDetails from "./eduRender";
import WorkExpRender from "./workexprender";
import '../App.css'


function CVrender({data}){
    return(
        <div id="cv-contents" className="cv-contents">
            <div className="left-cv">
                <div className="maindetails">
                    <div className="image-container" style={data.fileSrc ? {backgroundColor:"none"} : {background:"#183D3D"}}>
                        <img  src={data.fileSrc} alt={data.fileName} />
                    </div>
                    <div className="personaldetails">
                        <h2>{data.info.firstname.toUpperCase()}</h2>
                        <h2>{data.info.lastname.toUpperCase()}</h2>
                        <p>{data.info.niche}</p>
                    </div>
                </div>
                

                <div className="contactdetails">
                    <h3>CONTACT</h3>
                    <div className="contact-flex-div">
                        <FontAwesomeIcon className="icon" icon={faPhone}  />
                        <p>{data.info.phoneNumber}</p>
                    </div>
                    <div className="contact-flex-div">
                        <FontAwesomeIcon className="icon" icon={faEnvelope}  />
                        <p>{data.info.email}</p>
                    </div>
                    <div className="contact-flex-div">
                        <FontAwesomeIcon className="icon" icon={faGlobe}  />
                        <p>{data.info.portfolioLink}</p>
                    </div>
                    <div className="contact-flex-div">
                        <FontAwesomeIcon className="icon" icon={faLocationPin}  />
                        <p>{data.info.address}</p>
                    </div>
                </div>

                <div className="skilldetails">
                    <h3>SKILLS</h3>
                    <div className="skills">
                    <ul>
                        {data.skills.map(element => (
                            <li key={element.id}><p>{element.text}</p></li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
            <div className="right-cv">
                <div className="detailExtended">
                    <div className="title">
                        <h2>Personal Profile</h2>
                        <FontAwesomeIcon className="icon" icon={faUser}  />
                    </div>
                    <div className="detailed-content">
                            <p>{data.info.about}</p>
                    </div>
                </div>
                <div className="detailExtended">
                    <div className="title">
                        <h2>Education</h2>
                        <FontAwesomeIcon className="icon" icon={faBook} />
                    </div>
                    <div className="detailed-content">
                            {data.education.map(element => (
                                <EducationDetails key={element.id} eduData={element}></EducationDetails>       
                            ))}
                    </div>
                </div>
                <div className="detailExtended">
                    <div className="title">
                        <h2>Work Experience</h2>
                        <FontAwesomeIcon className="icon" icon={faBriefcase}  />
                    </div>
                    <div className="detailed-content">
                        {data.experiences&&(data.experiences.map(element=>(
                            <WorkExpRender key={element.id} workelement={element}></WorkExpRender>
                        )))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CVrender;