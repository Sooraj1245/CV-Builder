/* eslint-disable react/prop-types */
function WorkExpRender({workelement}){
    return(
        <div className="workdetaildiv">
            {(<h3>{workelement.position+" || "+(workelement.startDate)+" - "+(workelement.endDate)+" | "+(workelement.company)}</h3>)}
            <p>{workelement.description}</p>
        </div>
    )
}

export default WorkExpRender;
