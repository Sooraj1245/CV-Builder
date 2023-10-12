/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrashCan } from '@fortawesome/free-solid-svg-icons';
function Skills({data,handleskillData,addSkill,removeSkill}){
    return(
        <div className="card-main-div">
            <div className="card-contents">
                <h2 className="card-heading">Skills</h2>
                {
                    data.skills.map((element)=>(
                        <div key={element.id} className="skill-row">
                            <input onChange={(x)=>handleskillData(x,element.id)} 
                            value={element.text} type="text" name="text" id="" placeholder="Language or Technology"/>

                            {data.skills.length>1&&(<FontAwesomeIcon onClick={() => removeSkill(element.id)} icon={faTrashCan}  className="icon" />)}
                        </div>
                    ))
                }
                <div onClick={addSkill} className="addmore-button">
                    <FontAwesomeIcon className='icon' icon={faPlus} />
                </div>
            </div>
        </div>
    )
}

export default Skills;