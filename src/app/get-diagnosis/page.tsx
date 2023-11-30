"use client";

import React, { useState } from "react";
import { Message } from "@/modules/chat/message";
import { chatMessages } from "@/modules/chat/message";

const Chat = () => {
  const [message, setMessage] = useState("");

  // const changeHandler = (event: {
  //   [x: string]: any;
  //   preventDefault: () => void;
  // }) => {
  //   event.preventDefault();

  //   setMessage(event.target.value);
  // };

  return (
    <>
      <div className="mx-auto w-full max-w-xl pt-24 pb-10 flex flex-col stretch h-[90vh]">
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {chatMessages.map((msg) => (
            <Message key={msg.id} sender={msg.sender} message={msg.message} />
          ))}
        </div>

        <div className="sticky bottom-0 w-5/6 sm:w-full mx-auto mt-3 max-w-md">
          <textarea
            placeholder="Type a message..."
            rows={1}
            name="messageInput"
            id="messageInput"
            // value={message}
            className="w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600 rounded-lg p-2 pr-8 sm:pl-8 dark:text-black border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
          <button className="absolute right-2 top-2 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 hover:text-violet-800"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
