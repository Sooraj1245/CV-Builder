/* eslint-disable react/prop-types */
function EducationDetails({eduData}){
    return(
        <div className="education-div">
            <h3>{eduData.place}</h3>
            <h4>{eduData.degree}</h4>
            
        </div>
    )
}

export default EducationDetails;