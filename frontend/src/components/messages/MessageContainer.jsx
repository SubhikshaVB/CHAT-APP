import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    //I am logged in and I opened Jack's conversation. Now if I log out and 
    //login back again into my account, I dont want to see same Jack's 
    //chat appearing, so to clear that off, this is used
    //cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? (
          <NoChatSelected /> 
        ) : (
          <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>

          <Messages/>
          <MessageInput/> 
      </>
        )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};