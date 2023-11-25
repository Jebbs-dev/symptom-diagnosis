import React from "react";
import { Message } from "./message";
import { chatMessages } from "./message";

export const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {chatMessages.map((msg) => (
          <Message key={msg.id} sender={msg.sender} message={msg.message} />
        ))}
      </div>
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button className="ml- hover:text-violet-800 text-violet-600 font-bold py-2 px-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
