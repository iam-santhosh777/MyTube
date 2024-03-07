import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
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
            {/* <VideoCard info={videos[1]}/> */}
            {
                videos.map((video) => (
                    <VideoCard key={video.id} info={video} />
                ))
            }
        </div>
    );
};
export default VideoContainer;