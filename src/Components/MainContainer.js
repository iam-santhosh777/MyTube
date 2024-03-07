import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";


// const MainContainer = () => {
//     return (
//         <div className="py-1 px-2 m-3">
//             <ButtonList />
//             <VideoContainer />
//         </div>
//     )
// }

const MainContainer = () => {
    return (
        <div className="flex">
            <div className="flex flex-col w-[8vw] justify-between items-center">
                <ul className="mx-2">
                    <li className="flex flex-col justify-around items-center my-4">
                        <img className="h-6" alt="HomeIcon" src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709791194/n8o6m5br7ih7xcmoyflm.png" />
                        <h1 className="text-xs">Home</h1>
                    </li>
                    <li className="flex flex-col justify-around items-center my-4">
                        <img className="h-6" alt="ShortsIcon" src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709746082/youtube-shorts-logo-15251_ivziom.png" />
                        <h1 className="text-xs">Shorts</h1>
                    </li>
                    <li className="flex flex-col justify-around items-center my-4">
                        <img className="h-6" alt="SubIcon" src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709791415/youtube_cgwnzm.png" />
                        <h1 className="text-xs">Subscriptions</h1>
                    </li>
                    <li className="flex flex-col justify-around items-center my-4">
                        <img className="h-6" alt="YouIcon" src="https://res.cloudinary.com/dd5vs48c2/image/upload/v1709791855/8656196_collection_youtube_video_media_social_media_icon_qbvi70.png" />
                        <h1 className="text-xs">You</h1>
                    </li>
                </ul>
            </div>
            <div className="py-1 px-2">
             <ButtonList />
             <VideoContainer />
         </div>

        </div>
    )
};

export default MainContainer;