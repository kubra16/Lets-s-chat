import React, { useEffect } from "react";
import axios from "axios";
const ChatPage = () => {
  const fetchchats = async () => {
    const data = await axios.get("/api/chat");
    console.log(data);
  };
  useEffect(() => {
    fetchchats();
  }, []);
  return <div>ChatPage</div>;
};

export default ChatPage;
