import { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../Utils/constants";
import Video from "./Video";

const VideoContainer = () => {
    let [videosData, setVideosData] = useState(null);

    useEffect(()=> {
        const fetchData = async() => {
            const data = await fetch(POPULAR_VIDEOS_API);
            const json = await data.json();
            
            setVideosData(json.items);
        }

        fetchData();
    },[])

    if (!videosData) return;

    return (
       <div className="flex flex-wrap space-x-4 space-y-6 mt-10">
        {videosData.map((item) => <Video key={item.id.videoId} video={item} />)}
       </div>
    )
}

export default VideoContainer;