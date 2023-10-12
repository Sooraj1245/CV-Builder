/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function PersonalSection({data,handleData,handlePic}){
    return(
        <div className="card-main-div">
            <div className="card-contents">
                <h2 className="card-heading">Personal Information</h2>
                <div className="row_input">
                    <input type="text" name="firstname" placeholder="First Name" maxLength={15} value={data.info.firstname} onChange={handleData}/>

                    <input type="text" name="lastname" placeholder="Last Name" value={data.info.lastname}onChange={handleData}/>
                </div>
                <input type="email" name="email" id="" placeholder="Email" value={data.info.email} onChange={handleData}/>

                <label 
                htmlFor="file" 
                id="filepicture">
                {data.fileName ? data.fileName : "Choose Picture"}
                </label>
                
                <input 
                 type="file" 
                 id="file" 
                accept="image/*" 
                onChange={handlePic}
                 />

                <input type="number" name="phoneNumber" id="" placeholder="Phone Number" value={data.info.phoneNumber} onChange={handleData}/>
                <input type="text" value={data.info.address} name="address" onChange={handleData} placeholder="Address"/>
                <input type="url" name="portfolioLink" id="" placeholder="Link to your Site" value={data.info.phoneNumber} onChange={handleData}/>

                <textarea name="about" id="" cols="25" rows="10" placeholder="Tell a bit about yourself." value={data.info.about} onChange={handleData}></textarea>
            </div>
        </div>
    )
}

export default PersonalSection;

