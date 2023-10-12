/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrashCan } from '@fortawesome/free-solid-svg-icons';


function Education({data,handleEduData,removeEducation,addEducation}){
    return(
        <div className="card-main-div">
            <div className="card-contents">
                <h2 className="card-heading">Education</h2>
                {data.education.map((element,index)=>(
                    <div key={element.id} className="card-contents">
                        {data.education.length>1&&(<div className='card-subHeading'>
                            <h3>Education {index+1}</h3>

                            <FontAwesomeIcon onClick={() => removeEducation(element.id)} icon={faTrashCan}  className="icon" style={{color: "#183D3D",cursor:'pointer'}}/>
                        </div>)}
                        <input type="text" value={element.place} onChange={(x)=>handleEduData(x,element.id)} name="place" id="" placeholder="Place"/>
                        <input type="text" value={element.degree} onChange={(x)=>handleEduData(x,element.id)} name="degree" id="" placeholder="Education"/>
                    </div>
                ))}
                 <div onClick={addEducation} className="addmore-button">
                    <FontAwesomeIcon  icon={faPlus} />
                </div>
            </div>
        </div>
    )
}

export default Education;