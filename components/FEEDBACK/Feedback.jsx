"use client";
import React, { useState } from "react";

const Feedback = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate submission logic (replace with actual logic)
    alert(`Title: ${title}\nMessage: ${message}`);

    // Reset form fields
    setTitle("");
    setMessage("");
  };

  const maxMessageLength = 200; // Define your maximum message length

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChangeTitle}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter a title"
            required
          />
        </div>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          {/* ... existing code ... */}
          <textarea
            id="editor"
            rows="8"
            value={message}
            onChange={handleChangeMessage}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write an article..."
            maxLength={maxMessageLength}
            required
          ></textarea>
          <div className="text-sm text-gray-500 mt-2">
            {message.length} / {maxMessageLength} characters
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </form>
    </div>
  );
};

export default Feedback;
