const Comments = ({commentsData}) => {
    return(
        <div>
            <h1>Comments</h1>
            {
                commentsData?.items?.map((item) => {
                // check length of how many comments
                console.log(commentsData.items.length);
                    return (
                        <div className="flex p-2 items-start bg-slate-200">
                            <img 
                                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} 
                                alt="profileImg" 
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-4">
                                <h1 className="font-medium">{item.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                            </div>
                        </div>
                    )
                    
                })
            }

        </div>
    )
}

export default Comments;