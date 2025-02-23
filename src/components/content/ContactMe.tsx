'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { Button, Input, Textarea } from '@nextui-org/react';
import SectionHeader from '@/src/components/ui/SectionHeader';

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0); // In seconds
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (siteConfig.contact.debug) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch('https://ipapi.co/json/');
          const data = await res.json();
          const browserInfo = {
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            timezone: data.timezone,
            isp: data.org,
            browser: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            os: navigator.platform,
            chromeVersion: navigator.userAgent.match(
              /Chrom(e|ium)\/([0-9]+)\./
            )?.[2],
            domain: window.location.href
          };
          setUserInfo(browserInfo);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };

      fetchUserInfo();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user is trying to send an email before the ratelimit window is up
    const lastSubmittedTime = sessionStorage.getItem('lastSubmittedTime');
    const lastEmail = sessionStorage.getItem('lastEmail');
    const currentTime = Date.now();
    const rateLimit = siteConfig.contact.rateLimit;
    const FIVE_MINUTES = rateLimit * 60 * 1000; // default 10 minutes in milliseconds

    if (
      lastSubmittedTime &&
      currentTime - parseInt(lastSubmittedTime) < FIVE_MINUTES
    ) {
      // If less than 10 minutes have passed since last submission
      setIsWaiting(true);
      setWaitTime(
        Math.ceil(
          (FIVE_MINUTES - (currentTime - parseInt(lastSubmittedTime))) / 1000
        )
      ); // Show wait time in seconds
      return;
    }

    if (lastEmail && lastEmail !== email) {
      // If email is different and already used
      setIsWaiting(true);
      setWaitTime(Math.ceil(FIVE_MINUTES / 1000)); // Show 5 minutes wait time
      return;
    }

    // Simulate form submission and success
    setTimeout(() => {
      setIsSubmitted(true);
      sessionStorage.setItem('lastSubmittedTime', currentTime.toString());
      sessionStorage.setItem('lastEmail', email);
    }, 500);
  };

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Fill out the form below to contact me. Please, no spam. I strive to respond to all legitimate inquiries, but please be clear and concise in your message. Whether you have a question about my work, a project collaboration, or just want to connect, feel free to reach out. I look forward to hearing from you!"
      />

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <div className="w-full rounded-xl border border-gray-800 hover:border-gray-900 bg-white dark:bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h3 className="font-bold text-1xl tracking-tight text-foreground dark:text-white text-start">
              Email
            </h3>
            <p className="text-base mt-2 text-foreground dark:text-white">
              {siteConfig.social.email}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4"
            method="POST"
            encType="multipart/form-data"
          >
            <div>
              <Input
                isClearable={true}
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div>
                <Input
                  isClearable={true}
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Input
                  isClearable={true}
                  label="Phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  required
                />
              </div>
            </div>

            <div>
              <Textarea
                isClearable={true}
                label="Message"
                placeholder="Enter your message"
                rows={4}
                required
              />
            </div>

            {siteConfig.contact.debug && (
              <div>
                <Input
                  type="hidden"
                  name="userInfo"
                  value={JSON.stringify(userInfo)}
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="flex items-center justify-center rounded-xl px-5 py-3 text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm transition ease mx-auto"
            >
              <span className="font-medium text-base">Send</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </form>

          {/* Show warning message if the user tries to submit before waiting */}
          {isWaiting && (
            <div className="mt-4 text-red-500">
              <p>
                You need to wait {waitTime} second{waitTime !== 1 && 's'} before
                sending another message.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-bold text-lg text-foreground dark:text-white mb-4">
              Thank you, {name}!{' '}
              <span className="text-black dark:text-white">🎉</span>
            </h3>
            <p className="text-base text-foreground dark:text-gray-400">
              Your message has been sent to {siteConfig.social.email}{' '}
              successfully.
            </p>
            <Button
              onPress={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition ease"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </AnimationContainer>
  );
};

export default ContactMe;
