export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

export const VIDEO_OVERVIEW_API = (videoId) => {
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
}

export const SEARCH_API = (query) => {
    return `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;
}