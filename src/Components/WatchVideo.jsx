import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { VIDEO_OVERVIEW_API } from "../Utils/constants";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  if (!videoId) return null;

  useEffect(() => {
    const fetchVideoData = async () => {
      const response = await fetch(VIDEO_OVERVIEW_API(videoId));
      const data = await response.json();
      console.log(data);
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <div className="rounded-2xl  overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-video w-[60%] ml-20 mt-10  rounded-2xl"
      ></iframe>
    </div>
  );
};

export default WatchVideo;
