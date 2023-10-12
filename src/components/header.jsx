/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function HeaderBox({loadSample,reset,toggleTheme}){
    return(
        <div className="header">
            <div className="logo-div">
                <h1 className="company-name">CV</h1>
                <h1>Builder</h1>
            </div>
            <div className="icon-div">
                <FontAwesomeIcon className='icon' onClick={loadSample} icon={faPenToSquare}  />
                <FontAwesomeIcon className='icon' onClick={reset} icon={faXmark}  />
                <FontAwesomeIcon className='icon' icon={faMoon} onClick={toggleTheme}  />
\            </div>
        </div>
    )
}

export default HeaderBox;