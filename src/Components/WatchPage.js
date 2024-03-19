import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closdeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoContainer from './VideoContainer';
import Comments from './Comments';


const WatchPage = () => {
  const dispatch = useDispatch();

  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentsData, setCommentsData] = useState(null);
  let [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  

  useEffect(() => {
    dispatch(closdeSidebar());
    fetchData();
  }, [videoData]);
  

  const fetchData = async () => {
    const json = await fetch("https://www.googleapis.com/youtube/v3/videos?id=" + videoId +   "&key=AIzaSyB9JYAwiEPhKHsQblSWtxJ1gWYaKQjkUSU&part=snippet,contentDetails,statistics,status");
    const data = await json.json();
    setVideoData(data);

    const jsonChannel = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + data?.items[0].snippet.channelId +"&key=AIzaSyB9JYAwiEPhKHsQblSWtxJ1gWYaKQjkUSU");
    const jsonChannelData = await jsonChannel.json();
    setChannelData(jsonChannelData);
    
    const commentsData = await fetch("https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyB9JYAwiEPhKHsQblSWtxJ1gWYaKQjkUSU&textFormat=plainText&part=snippet&videoId=" + videoId + "&maxResults=50");
    const jsonCommentsData = await commentsData.json();
    setCommentsData(jsonCommentsData);
  }
  
  const channelImg = channelData?.items[0]?.snippet?.thumbnails?.default?.url;

  if (!videoData) return <div>Loading...</div>
  return (
    <div className='flex px-10'>
      <div className='p-3'>
      <iframe
      className='rounded-lg mb-4'
      width="714" 
      height="402" 
      src={"https://www.youtube.com/embed/" + videoId + "?si=rzenGQpBo_NT4ahp"}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>

      </iframe>
      <h1 className='font-bold text-xl'>{videoData?.items[0].snippet.title}</h1>
      <div className='py-2 flex items-center justify-between'>
          <img className="h-10 rounded-full" alt="channelLogo" src={channelImg} />
          <div className='px-2'>
              <h1 className='font-bold text-xm'>{channelData?.items[0].snippet.title}</h1>
              <p className='text-sm text-gray-700'>{channelData?.items[0].statistics.subscriberCount > 1000000 ? (channelData?.items[0].statistics.subscriberCount / 1000000).toFixed(1) + "M" : channelData?.items[0].statistics.subscriberCount} <span className='text-[12px]'>Subscribers</span></p>
          </div>
          <button className='bg-black mx-5 px-5 py-2 rounded-full text-white'>Subscribe</button>
          <div className='flex'>
          <button className='flex items-center border-r-2 border-r-slate-300 bg-zinc-100 rounded-l-full p-2 hover:bg-zinc-200'>
            <img className='h-6' alt='like' src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709843012/icons8-like-48_gm3g3r.png' />
            <p className='px-2'>{videoData?.items[0].statistics.likeCount > 10000 ? (videoData?.items[0].statistics.likeCount / 1000).toFixed(1) + "K" : videoData?.items[0].statistics.likeCount}</p>
          </button>
          <button className='flex items-center bg-zinc-100 rounded-r-full p-2 hover:bg-zinc-200'>
            <img className='h-6' alt='like' src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709843808/icons8-dislike-50_rwwxwp.png' />
          </button>
          </div>
          <button className='flex items-center mx-[5%] p-2 bg-zinc-100 rounded-full hover:bg-zinc-200'>
            <img className='h-6' alt='like' src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709844105/share_dqwxuv.png' />
            <p className='font-semibold px-2'>Share</p>
          </button>
          <button className=' text-center rounded-full p-2 bg-zinc-100  hover:bg-zinc-200'>
            <p className='font-extrabold flex mb-1'>. . .</p>
          </button>
        
      </div>
      <h1>{videoData?.items[0].statistics.viewCount} Views</h1>
      <div>
          <Comments commentsData={commentsData} />
      </div>
      
      </div>
      
      <div>
          <VideoContainer />
      </div>
      
    </div>
  )
}

export default WatchPage;