import { useState } from "react";
import "./App.css";

function NavBar() {
  return (
    <header className="sticky top-0 bg-white p-4 shadow-md flex items-center">
      <div className="rounded-full mr-4">
        <img src="/assets/main-logo.png" alt="main logo" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-800">Oga Patrick</h1>
        <p className="text-sm text-gray-500">Your Sassy Pidgin Nigga</p>
      </div>
    </header>
  );
}

function BodyChat() {
  return <p></p>;
}

function InputArea() {
  return (
    <div className="bg-white p-4 border-t border-gray-200 flex items-center space-x-2 absolute bottom-0 inset-x-0">
      <input className="input-area flex-1 p-2 border border-gray-300 rounded-full outline-none" type="text" placeholder="Type a message" />
      <button className="send-btn bg-purple-500 hover:bg-purple-600 p-2 rounded-md transition-colors text-white">Send</button>
    </div>
  );
}


export default NavBar;
export { BodyChat, InputArea };
