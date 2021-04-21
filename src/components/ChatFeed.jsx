import MessageForm from "./MessageForm.jsx";
import MyMessage from "./MyMessage.jsx";
import TheirMessage from "./TheirMessage.jsx";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  console.log(chat, userName, messages);

  return <div>ChatFeed</div>;
};
export default ChatFeed;
