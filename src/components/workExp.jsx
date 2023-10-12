/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faTrashCan } from '@fortawesome/free-solid-svg-icons';
function WorkExp({data,handleworkData,removeExperience,addExperience}){
    return(
        <div className="card-main-div">
            <div className="card-contents">
                <h2 className="card-heading">Work Experience</h2>

                {data.experiences.map((element,index)=>(
                    <div key={element.id} className="card-contents">
                        {data.experiences.length>1&&(<div className='card-subHeading'>
                            <h3>Experience {index+1}</h3>


                            <FontAwesomeIcon onClick={() => removeExperience(element.id)} icon={faTrashCan}  className="icon" />



                        </div>)}
                        <input onChange={(e)=>handleworkData(e,element.id)} value={element.position} type="text" name="position" placeholder="Position"/>

                        <input onChange={(e)=>handleworkData(e,element.id)} value={element.company} type="text" name="company" placeholder="Company"/>

                        <input onChange={(e)=>handleworkData(e,element.id)} value={element.startDate} type="number" name="startDate" placeholder="Start of Employment"/>

                        <input onChange={(e)=>handleworkData(e,element.id)} value={element.endDate} type="number" name="endDate" placeholder="End of Employment"/>

                        <textarea value={element.description} onChange={(e)=>handleworkData(e,element.id)} name="description" id="" cols="30" rows="10" placeholder="Your main occupation, daily tasks and work field"></textarea>
                    </div>
                ))}

                <div onClick={addExperience} className="addmore-button">
                    <FontAwesomeIcon  icon={faPlus} />
                </div>
            </div>
        </div>
    )
}

export default WorkExp;