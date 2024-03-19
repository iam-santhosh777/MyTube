import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { search_suggestion_api } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const dispatch = useDispatch();

    const searchCache = useSelector((state) => state.search);

    useEffect(() => {
        // api call 
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSearchSuggestions(searchCache[searchQuery])
            } else{
                getSearchSuggestions()
            }

            getSearchSuggestions()
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        console.log("API call - " + searchQuery);
        // api call
        const data = await fetch(search_suggestion_api + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSearchSuggestions(json[1]);
        dispatch(cacheResults({[searchQuery]: json[1]}));
    }

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
                <div>
                <input type="text" className="w-1/2 border border-gray-400 rounded-l-3xl p-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() => setShowSuggestion(false)}
                />
                <button className="border border-gray-400 p-2 px-4 bg-gray-100 rounded-r-3xl"> 
                <FontAwesomeIcon icon={faSearch} />
                </button>
                </div>
                { showSuggestion &&
                    (<div>
                    <ul className="absolute bg-white w-[37%] rounded-lg px-5 py-2">
                        {
                            searchSuggestions.map((suggestion) => (
                                <li key={suggestion} className="flex gap-2 items-center hover:bg-gray-100 cursor-pointer"><FontAwesomeIcon icon={faSearch} />{suggestion}</li>
                            ))
                        }
                        
                    </ul>
                </div>)
                }
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