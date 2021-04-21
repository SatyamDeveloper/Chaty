import { ChatEngine } from "react-chat-engine";

// import ChatFeed from "./components/ChatFeed.jsx";

// Css File
import "./App.css";

const App = () => {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="20c67708-2e5d-400d-a2aa-c94d2c30c9fa"
        userName="abc@abc.com"
        userSecret="123"
        // renderChatFeed={(chatAppProps) => {
        //   // <ChatFeed {...chatAppProps} />;
        // }}
      />
    </>
  );
};

export default App;
