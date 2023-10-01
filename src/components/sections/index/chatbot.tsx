/*
 * Copyright (c) 2023 [Muhammad Fiaz](https://github.com/muhammad-fiaz/)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS.md OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentAlt, faPaperPlane, faTimes} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import Image from 'next/image';

const server_port = 'http://localhost:8000/api/chat/'; // change this to your server port

interface ChatMessage {
    text: string;
    sender: 'user' | 'bot';
    senderName: string;
    senderImage: string;
}

const Chatbot: React.FC = () => {
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const welcomeMessage: ChatMessage = {
            text: 'Hi there! I am your Chat Assistant.',
            sender: 'bot',
            senderName: 'Chat Assistant',
            senderImage: '/img/logo.jpg',
        };
        setChatMessages([welcomeMessage]);

        const storedUserId = Cookies.get('userId'); // get the user ID from cookies
        if (storedUserId) {
            setUserId(storedUserId);
            const storedMessages = Cookies.get(`chatMessages_${storedUserId}`);
            if (storedMessages) {
                setChatMessages(JSON.parse(storedMessages));
            }
        } else {
            const newUserId = generateUserId();
            setUserId(newUserId);
            Cookies.set('userId', newUserId);
            Cookies.remove('chatMessages');
        }
    }, []);

    useEffect(() => {
        Cookies.set(`chatMessages_${userId}`, JSON.stringify(chatMessages));
    }, [chatMessages, userId]);

    const toggleChat = () => {
        setIsChatVisible(!isChatVisible);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage: ChatMessage = {
                text: message,
                sender: 'user',
                senderName: 'User',
                senderImage: '/img/user.jpg',
            };
            setChatMessages([...chatMessages, newMessage]);
            setMessage('');

            sendMessageToServer(message, userId)
                .then((response) => {
                    const botResponse: ChatMessage = {
                        text: response,
                        sender: 'bot',
                        senderName: 'Chat Assistant',
                        senderImage: '/img/logo.jpg',
                    };
                    setChatMessages((prevMessages) => [...prevMessages, botResponse]);
                })
                .catch(() => {
                    const errorMessage: ChatMessage = {
                        text: `Hey ${userId}\n An error occurred. Please try again later.`,
                        sender: 'bot',
                        senderName: 'Chat Assistant',
                        senderImage: '/img/logo.jpg',
                    };
                    setChatMessages((prevMessages) => [...prevMessages, errorMessage]);
                });
        }
    };

  /*  const handleChatClose = () => {
        setIsChatVisible(false);
    };
*/
    const sendMessageToServer = (message: string, userId: string) => {
        return fetch(server_port, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, userId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((data) => {
                return data.response;
            });
    };

    const generateUserId = () => {
        // Generate a unique user ID (you can modify this logic as per your requirement)
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `user_${timestamp}_${random}`;
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
                            <div key={index} className={`message ${chatMessage.sender === 'bot' ? 'bot' : 'user'}`}>
                                {chatMessage.sender === 'bot' && (
                                    <div className="sender-info">
                                        <Image className="sender-image" height={16} width={16} src={chatMessage.senderImage} alt="bot image" loading="eager" />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                {chatMessage.sender === 'user' && (
                                    <div className="sender-info user-sender">
                                        <Image className="sender-image" height={16} width={16} src={chatMessage.senderImage} alt="Sender image" loading="eager" />
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
                        <FontAwesomeIcon icon={faPaperPlane} className="send-icon" onClick={handleSendMessage} />
                    </div>
                </div>
            )}
            <div className={`chatbot-button ${isChatVisible ? 'active' : ''}`} onClick={toggleChat}>
                {isChatVisible ? <FontAwesomeIcon icon={faTimes} className="close-icon" /> : <FontAwesomeIcon icon={faCommentAlt} />}
            </div>
        </div>
    );
};

export default Chatbot;
