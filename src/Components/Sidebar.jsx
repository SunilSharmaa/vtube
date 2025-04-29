import { useSelector } from "react-redux";

const Sidebar = () => {
    const isSideBarOpen = useSelector((store)=> store.appStore.isSideBarOpen)
    
    return (isSideBarOpen &&
        <div className="col-span-2 pl-10 pt-2 shadow-2xl">
            <ul className="space-y-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <ul className="space-y-2 pt-4">
                <span className="font-bold mb-2 inline-block">You</span>
                <li>History</li>
                <li>Playlists</li>
                <li>Your Videos</li>
                <li>Your Courses</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
        </div>
    )
}

export default Sidebar;