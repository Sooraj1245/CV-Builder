/* eslint-disable react/prop-types */

function Contacts({data,handleContactData}){
    return(
        <div className="card-main-div">
            <div className="card-contents">
                <h2 className="card-heading">Contact Information</h2>
                <input type="text" name="address" placeholder="Address"/>
                <div className="row_input">
                    <input type="text" name="email" placeholder="Email" value={data.info.email} onChange={handleContactData}/>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" value={data.info.phoneNumber} onChange={handleContactData}/>
                </div>
                <input type="text" value={data.info.portfolioLink} name="portfolioLink" placeholder="Link to PortFolio" onChange={handleContactData}/>
            </div>
        </div>
    )
}

export default Contacts;