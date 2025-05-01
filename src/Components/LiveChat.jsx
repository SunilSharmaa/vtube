import { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { generateComment, generateName } from "../Utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../Redux/liveChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChat = useSelector((store) => store.liveChatStore.message);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      const userName = generateName();
      const chatMessage = generateComment();

      dispatch(
        addChatMessage({
          name: userName,
          chat: chatMessage,
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  const sendChat = () => {
    dispatch(
      addChatMessage({
        name: "sunil sharma",
        chat: inputText,
      })
    );
    setInputText("");
  };

  return (
    <div className="border col-span-4 rounded-lg p-2 ">
      <div>
        <h2 className="px-2 py-2 border-b-1 mb-2">Live chat</h2>
      </div>

      <div className="h-100 overflow-y-scroll flex flex-col-reverse border-b">
        {liveChat.map((chat, index) => (
          <ChatMessages key={index} name={chat.name} message={chat.chat} />
        ))}
      </div>
      <div className="w-full  h-14 ">
        <form
          className="w-full flex justify-center items-center h-full space-x-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="chat..."
            className="w-[60%] px-2 py-1 border"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="bg-neutral-300 px-4 py-1 rounded cursor-pointer"
            onClick={sendChat}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
