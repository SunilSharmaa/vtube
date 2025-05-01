import CommentsContainer from "../Components/CommentsContainer";
import LiveChat from "../Components/LiveChat";
import WatchVideo from "../Components/WatchVideo";

const WatchPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 w-[95%] mx-auto mt-4 space-x-4">
      <WatchVideo />
      <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
