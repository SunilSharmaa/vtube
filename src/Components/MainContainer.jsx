import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    const isSideBarOpen = useSelector((store)=> store.appStore.isSideBarOpen)

    return (
        <div className={`${isSideBarOpen ? "col-span-10" : "col-span-12"} px-4`}>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;