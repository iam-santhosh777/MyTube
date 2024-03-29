import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/Constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {

    const [videos, setVideos] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const Data = await fetch(YOUTUBE_API);
        const jsonData = await Data.json();
        // console.log(jsonData.items);
        setVideos(jsonData.items);
    }

    return (
        <div className="flex flex-wrap">
            {
                videos.map((video) => (
                    <Link to={"/MyTube/watch?v=" + video.id} key={video.id}>
                        <VideoCard info={video} />
                        
                    </Link>
                ))
            }
        </div>
    );
};
export default VideoContainer;