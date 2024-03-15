import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const { snippet, statistics } = {...info};  //destructuring assignment
    const {channelTitle, title, thumbnails} = {...snippet};
    // const {snippet, statistics} = info;
    // const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
        <img className='rounded-lg' alt='thumbnailImg' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold text-sm py-2 w-full text-left'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard