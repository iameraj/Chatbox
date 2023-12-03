import React from "react";
import "./ChatBox.css";

const ChatBox = ({ userId }) => {
    return (
        <div className="chat-box-container">
            <div className="chat-box-content">
                <p>Hi{userId}</p>
                <p>You will see your chats here</p>
            </div>
        </div>
    );
};

export default ChatBox;
