import React from 'react'

interface IAvatar {
  user: string;
  other: string;
}

export const chatMessages = [
  { id: 1, sender: "You", message: "Hey there!" },
  { id: 2, sender: "HealthBot", message: "Hi! How can I help you?" },
  { id: 1, sender: "You", message: "Hey there!" },
  { id: 2, sender: "HealthBot", message: "Hi! How can I help you?" },
  // Add more messages as needed
];

// Sample avatars for users (replace these with actual avatar URLs)
export const avatars = {
  user: "user-avatar-url.jpg",
  other: "other-avatar-url.jpg",
  // Add more avatars as needed
};

// Individual message component with avatars
export const Message = ({ sender, message }: { sender: string; message: string }) => {
  const isUser = sender === "You";
  return (
    <div
      className={`flex items-start mb-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <img
        src={avatars[sender as keyof IAvatar]}
        alt={`${sender} avatar`}
        className="w-5 h-5 rounded-full mr-2"
      />
      <div className="flex flex-col">
        <p>{sender}</p>
        <div
          className={`p-2 rounded-lg ${
            isUser ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};
