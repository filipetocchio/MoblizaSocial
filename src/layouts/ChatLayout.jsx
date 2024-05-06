import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Chat from "../component/Chat";
import ChatBar from "../component/Chatbar";

export function ChatLayout() {
  return (
    <div className="flex h-screen">
        <Navbar />
        <Chat className="flex-grow" />
        <ChatBar />
      <Outlet />
    </div>
  );
}
