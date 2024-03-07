import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleSidebar());
        
    }
    return (
        <div className="grid grid-flow-col p-2 m-2 items-center">
            <div className="flex col-span-1 items-center">
                <img 
                onClick={() => toggleMenuHandler()}

                alt="hamburgerMenuLogo" src="https://www.svgrepo.com/show/313139/hamburger-menu.svg" className="h-8 cursor-pointer"/>
                <img alt="youtubeLogo" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" className="h-6 mx-3"/>
            </div>

            <div className="col-span-10 items-center">
                <input type="text" className="w-1/2 border border-gray-400 rounded-l-3xl p-2"/>
                <button className="border border-gray-400 p-2 px-4 bg-gray-100 rounded-r-3xl"> 
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            <div className="col-span-1 flex justify-between">
                {/* <img alt="notificationLogo" src=""/> */}
                
                <img src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709803519/video_ip1npi.png" alt="videoLogo" className="h-8"/>
                <img alt="noticationBellLogo" src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709803200/notification_cnmafv.png" className="h-8"/>
                <img className="h-8" alt="userLogo" src="https://cdn.iconscout.com/icon/free/png-512/free-user-1648810-1401302.png?f=webp&w=512" />
            </div>
        </div>

    )
}

export default Header;