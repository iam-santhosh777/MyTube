import React from 'react';
import { useSelector } from 'react-redux';
import { toggleSidebar } from "../utils/appSlice";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isSidebarOpen);
  const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleSidebar());
        
    }

  //Early Return
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48 inset-0 z-50 fixed bg-white overflow-auto'>
        <div className='flex items-center fixed'>
        <img onClick={() => toggleMenuHandler()} alt="hamburgerMenuLogo" src="https://www.svgrepo.com/show/313139/hamburger-menu.svg" className="h-8 cursor-pointer"/>
        <img alt="youtubeLogo" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" className="h-6 mx-3"/>
        </div>
      <ul className='mt-[13vh] flex flex-col gap-2'>
        <Link to='/MyTube'><li className='flex ml-2'> <img className='h-6 pr-3' alt='SideHomeIcon' src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709791194/n8o6m5br7ih7xcmoyflm.png" /> Home</li></Link>
        <li className='flex ml-2 items-center'> 
          <img className='h-9 ' alt='shortsIcon' src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709833241/shorts_xxy6tn.jpg'/>
          Shorts</li>
        <li className='flex ml-2'>
          <img className='h-6 pr-3' alt='trendingIcon' src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709791415/youtube_cgwnzm.png'/>
          Subscriptions</li>
      </ul>
      <h1 className='font-bold my-2'>You</h1>
        <ul className='py-1 '>
          <li className='flex ml-2 mt-2'>
            <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709801524/jb1hal9gqnhn520j44yy.png' alt='HistoryLogo' className='h-6 pr-3'/>
            History</li>
          <li className='flex ml-2 mt-2'>
            <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709801835/clock_iaegh4.png' alt='WatchLaterLogo' className='h-6 pr-3' />
            Watch Later</li>
          <li className='flex ml-2 mt-2'>
            <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709802100/like_p93rp4.png' alt='LikedVideosLogo' className='h-6 pr-3' />
            Liked Videos</li>
          <li className='flex ml-2 mt-2'>
            <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709802287/playlist_efjoon.png' alt='PlaylistLogo' className='h-6 pr-3' />
            Playlists</li>

        </ul>
      

      <h1 className='font-bold my-2'>
        Explore
      </h1>
      <ul className='py-1'>
        <li className='flex ml-2 mt-2'>
          <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709802528/clapperboard_r1iwck.png' alt='MoviesLogo' className='h-6 pr-3' />
          Movies</li>
        <li className='flex ml-2 mt-2'>
          <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709802711/live_vluloo.png' alt='LiveLogo' className='h-6 pr-3' />
          Live</li>
        <li className='flex ml-2 mt-2'>
          <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709802810/musical-note_yzaqch.png' alt='MusicLogo' className='h-6 pr-3' />
          Music</li>
        <li className='flex ml-2 mt-2'>
          <img src='https://res.cloudinary.com/dd5vs48c2/image/upload/v1709802895/newspaper-folded_o9ieze.png' alt='NewsLogo' className='h-6 pr-3' />
          News</li>
        
        </ul>
        
    </div>
  )
}

export default Sidebar