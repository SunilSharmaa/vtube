import { Link } from "react-router-dom";

const Video = ({video}) => {
    
    const {videoId} = video?.id;
    const {channelTitle, title} = video?.snippet
    const {thumbnails} = video?.snippet;

    return (
        <Link to={`/watch?v=${videoId}`}>
        <div className=" w-94 h-80 rounded-xl overflow-hidden shadow-sm cursor-pointer">
            <img src={thumbnails?.high.url} alt="title" className="w-full h-52 rounded-xl object-cover" />
            <div className="mt-4 px-2">
            <h2 className="font-semibold line-clamp-2">{title}</h2>
            <p className="text-neutral-500">{channelTitle}</p>
            </div>

        </div>
        </Link>
    )
}

export default Video;