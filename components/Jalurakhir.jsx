"use client";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Ganti dengan URL server socket.io Anda

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Mengatur listener untuk menerima pesan baru dari server
    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Bersihkan listener saat komponen di-unmount
    return () => {
      socket.off("newMessage");
    };
  }, []);

  const sendMessage = () => {
    // Kirim pesan ke server
    socket.emit("sendMessage", newMessage);

    // Tambahkan pesan ke daftar pesan lokal
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: "me" },
    ]);

    // Reset input pesan
    setNewMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.sender === "me" ? "sent" : "received"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
