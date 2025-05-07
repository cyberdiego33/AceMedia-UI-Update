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

function ChatCard() {
  return (
    <div className="relative w-[200px] p-3 bg-blue-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In commodi
      numquam hic, magni nemo necessitatibus, nobis, debitis enim fugiat laborum
      aspernatur placeat praesentium porro maiores omnis est! Beatae, omnis
      magni.
    </div>
  );
}

function BodyChat() {
  return (
    <div className="p-4">
      <ChatCard />
    </div>
  );
}

function startApp() {
  const message = document.querySelector("input").value;
  alert(`${message}`);
}

function InputArea() {
  return (
    <div className="bg-white p-4 border-t border-gray-200 flex items-center space-x-2 absolute bottom-0 inset-x-0">
      <input
        className="input-area flex-1 p-2 border border-gray-300 rounded-full outline-none"
        type="text"
        placeholder="Type a message"
      />
      <button
        className="send-btn bg-purple-500 hover:bg-purple-600 p-2 rounded-md transition-colors text-white"
        onClick={startApp}
      >
        Send
      </button>
    </div>
  );
}

export default NavBar;
export { BodyChat, InputArea };
