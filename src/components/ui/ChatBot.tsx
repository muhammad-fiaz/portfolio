'use client';
import React, { useEffect, useState } from 'react';
import { Button, Spinner, Textarea } from '@nextui-org/react';
import { getCookie, setCookie } from 'cookies-next'; // Import cookies
import { siteConfig } from '@/src/configs/config';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [isRateLimitReached, setIsRateLimitReached] = useState(false); // Track if rate limit is reached

  // Get rate limit from site config
  const rateLimit = siteConfig.chatbot.rateLimit;
  const currentTime = Date.now();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    // Get rate limit info from cookies
    const savedRequestCount =
      parseInt(getCookie('requestCount') as string) || 0;
    const savedLastRequestTime =
      parseInt(getCookie('lastRequestTime') as string) || Date.now();

    // Check if 1 minute has passed since the last request
    if (currentTime - savedLastRequestTime >= 60000) {
      // Reset request count after 1 minute and update the last request time
      setCookie('requestCount', '0', { maxAge: 60 });
      setCookie('lastRequestTime', currentTime.toString(), { maxAge: 60 });
    }

    // If request count exceeds rate limit, show rate limit modal
    if (savedRequestCount >= rateLimit) {
      setIsRateLimitReached(true); // Set the rate limit flag
      return;
    }

    const newMessages = [...messages, { text: message.trim(), sender: 'user' }];
    setMessages(newMessages);
    setLoading(true);

    // Increment request count and set the cookie for rate limit tracking
    setCookie('requestCount', (savedRequestCount + 1).toString(), {
      maxAge: 60
    });

    try {
      const res = await fetch('/api/fetch-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message.trim() })
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await res.json();
      setMessages([...newMessages, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([
        ...newMessages,
        {
          text: 'Sorry, something went wrong. Please try again later.',
          sender: 'bot'
        }
      ]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  // Add the initial bot message only once when the chatbot is opened
  useEffect(() => {
    if (!isOpen) return;

    // On page load (or refresh), check cookies and handle rate limit logic
    const savedRequestCount =
      parseInt(getCookie('requestCount') as string) || 0;
    const savedLastRequestTime =
      parseInt(getCookie('lastRequestTime') as string) || Date.now();
    const savedRateLimitStatus = savedRequestCount >= rateLimit;

    // If the saved request count is >= rate limit, set the rate limit flag
    if (savedRateLimitStatus) {
      setIsRateLimitReached(true);
    }

    if (messages.length === 0) {
      const initialMessage = {
        text: 'Hello, how can I assist you today?',
        sender: 'bot'
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length, rateLimit]); // Add messages.length and rateLimit as dependencies

  return (
    <>
      {/* Chatbot Button */}
      <div
        className={`fixed bottom-16 right-6 z-50 p-4 bg-black dark:bg-white dark:text-white text-black rounded-full shadow-lg cursor-pointer transition-all duration-300 transform ${
          isOpen ? 'rotate-180' : ''
        }`}
        onClick={toggleChat}
      >
        <span className="text-2xl">{isOpen ? '❌' : '🚀'}</span>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 sm:right-8 w-80 sm:w-[300px] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 flex flex-col h-[500px] sm:h-[400px]">
          {/* Chatbot Header */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Chatbot
            </h3>
          </div>

          {/* Messages */}
          <div className="mt-4 flex-grow overflow-y-auto max-h-[60%] sm:max-h-[70%] pr-2 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
              >
                <div
                  className={`p-2 max-w-[70%] rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-black dark:bg-gray-600 dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="mt-2 flex flex-col items-center justify-center gap-2">
            <Textarea
              className="w-[80%] mx-auto p-2 rounded-md text-sm dark:text-white dark:caret-white caret-black text-black"
              placeholder="Type a message..."
              value={message}
              onChange={(e) =>
                handleMessageChange(
                  e as unknown as React.ChangeEvent<HTMLTextAreaElement>
                )
              }
            />
            <Button
              className="w-[80%] mx-auto bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              onPress={handleSendMessage}
              disabled={loading || isRateLimitReached} // Disable button when rate limit is reached
            >
              {loading ? <Spinner color="default" size={'sm'} /> : 'Send'}
            </Button>
          </div>
        </div>
      )}

      {/* Rate Limit Modal */}
      {isRateLimitReached && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-bold text-lg text-foreground dark:text-white mb-4">
              Rate Limit Reached! 😬
            </h3>
            <p className="text-base text-foreground dark:text-gray-400">
              You have reached the rate limit of 10 messages per minute. Please
              wait before sending another request!⏳.
            </p>
            <Button
              onPress={() => setIsRateLimitReached(false)}
              className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition ease"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
