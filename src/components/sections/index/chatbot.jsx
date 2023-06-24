import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

{/*Chatbot -> this is still in development. It will be available soon,

TODO add a backend to chatbot and make it work.
TODO make it responsive.


*/}

const Chatbot = () => {
    {/*ChatBot it will pop up the chatbot container */}
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        // Display initial welcome message
        const welcomeMessage = {
            text: 'Hi there! I am your Chat Assistant.',
            sender: 'bot',
            senderName: 'Chat Assistant',
            senderImage: '/img/logo.jpg', // Replace with the actual bot image path
        };
        setChatMessages([welcomeMessage]);
    }, []);

    const toggleChat = () => {
        setIsChatVisible(!isChatVisible);
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage = {
                text: message,
                sender: 'user',
                senderName: 'User',
                senderImage: '/img/user.jpg', // Replace with the actual user image path
            };
            setChatMessages([...chatMessages, newMessage]);
            setMessage('');
        }
    };

    return (
        <div className="chatbot">
            {isChatVisible && (
                <div className="chatbot-container">
                    <div className="chat-header">
                        <h3>Chat Assistant</h3>
                    </div>
                    <div className="chat-body">
                        {chatMessages.map((chatMessage, index) => (
                            <div
                                key={index}
                                className={`message ${chatMessage.sender === 'bot' ? 'bot' : 'user'}`}
                            >
                                {chatMessage.sender === 'bot' && (
                                    <div className="sender-info">
                                        <img
                                            className="sender-image"
                                            src={chatMessage.senderImage}
                                            alt="Sender"
                                        />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                {chatMessage.sender === 'user' && (
                                    <div className="sender-info user-sender">
                                        <img
                                            className="sender-image"
                                            src={chatMessage.senderImage}
                                            alt="Sender"
                                        />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                <div className="message-content">{chatMessage.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={handleInputChange}
                        />
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            className="send-icon"
                            onClick={handleSendMessage}
                        />
                    </div>
                </div>
            )}
            <div className={`chatbot-button ${isChatVisible ? 'active' : ''}`} onClick={toggleChat}>
                <FontAwesomeIcon icon={faCommentAlt} />
            </div>


        </div>
    );
};

export default Chatbot;
