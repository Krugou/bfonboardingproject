'use client';

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [messages, setMessages] = useState<{text: string; isUser: boolean}[]>(
    [],
  );
  const [inputValue, setInputValue] = useState('');
  const [randomReplies, setRandomReplies] = useState<
    {trigger: string; response: string}[]
  >([]);
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const replies = [
    {trigger: 'hello', response: 'Hi there!'},
    {trigger: 'how are you', response: 'I am fine, thank you!'},
    {trigger: 'bye', response: 'Goodbye!'},
    {trigger: 'oletko sinä ihminen?', response: 'En, olen botti.'},
    {
      trigger: 'mikä on nimesi?',
      response: 'Nimeni on My Business Finland botti',
    },
    {
      trigger: 'mikä on tehtäväsi?',
      response:
        'Autan sinua löytämään tietoa yrityksen perustamisesta Suomessa.',
    },
    {
      trigger: 'mikä on yrityksen perustaminen?',
      response:
        'Yrityksen perustaminen on prosessi, jossa perustetaan uusi yritys.',
    },
    {
      trigger: 'miten perustan yrityksen?',
      response: 'Sinun täytyy rekisteröityä yrittäjäksi ja perustaa yritys.',
    },
    {
      trigger: 'mikä on y-tunnus?',
      response:
        'Y-tunnus on yrityksen tunnus, jota käytetään verotuksessa ja viranomaisasioinnissa.',
    },
    {
      trigger: 'mikä on prh?',
      response:
        'PRH on Patentti- ja rekisterihallitus, joka vastaa yritysten rekisteröinnistä.',
    },
    {
      trigger: 'mitä tarkoittaa osakeyhtiö?',
      response:
        'Osakeyhtiö on yritysmuoto, jossa omistajat vastaavat rajoitetusti yrityksen veloista.',
    },
    {
      trigger: 'miten perustan osakeyhtiön?',
      response:
        'Sinun täytyy rekisteröityä yrittäjäksi ja perustaa osakeyhtiö.',
    },
    {
      trigger: 'mikä on toiminimi?',
      response:
        'Toiminimi on yritysmuoto, jossa yrityksen ja omistajan taloudellinen vastuu on yksi ja sama.',
    },
    {
      trigger: 'miten perustan toiminimen?',
      response: 'Sinun täytyy rekisteröityä yrittäjäksi ja perustaa toiminimi.',
    },
    // Add more preset replies as needed
  ];

  useEffect(() => {
    generateRandomReplies();
  }, []);

  const generateRandomReplies = () => {
    const shuffled = replies.sort(() => 0.5 - Math.random());
    setRandomReplies(shuffled.slice(0, 3));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessages = [...messages, {text: inputValue, isUser: true}];
      setMessages(newMessages);
      setInputValue('');

      // Check for preset messages and add a reply
      const lowerCaseInput = inputValue.toLowerCase().trim();
      const reply = replies.find(
        (r) => r.trigger.toLowerCase() === lowerCaseInput,
      );
      if (reply) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {text: reply.response, isUser: false},
          ]);
        }, 500); // Delay to simulate response time
      }

      // Generate new random replies
      generateRandomReplies();
    }
  };

  const handleReplyClick = async (reply:string) => {
    await setInputValue(reply);
    handleSendMessage();
  };
  const handleReset = () => {
    setMessages([]);
    setInputValue('');
    generateRandomReplies();
  };
  return (
    <div className='flex flex-col items-center justify-between min-h-screen '>
      <header className='bg-blue-500 flex justify-between h-20 w-full'>
        <div>
          <p className='w-10 mx-2 text-white'>My Business Finland</p>
        </div>
      </header>
      <main className='flex-grow w-full max-w-screen-lg p-4'>
        <h1 className='font-mainFont text-center text-2xl'>
          Testing next.js with a fake chatbot
        </h1>
        <div className='mt-4 h-full w-full'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 my-2 rounded w-full   flex ${
                message.isUser ? 'justify-end' : 'justify-start'
              }`}>
              <p
                className={`p-2 rounded max-w-[50%] ${
                  message.isUser
                    ? 'bg-blue-200 text-right'
                    : 'bg-gray-200 text-left'
                }`}>
                {capitalizeFirstLetter(message.text)}
              </p>
            </div>
          ))}
        </div>
      </main>
      <div className='w-full p-4 bg-gray-100 flex flex-col max-w-screen-lg items-center'>
        <div className='mb-4 flex space-x-2'>
          {randomReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => {
                handleReplyClick(reply.trigger);
              }}
              style={{userSelect: 'none'}}
              className='p-2 bg-blue-500 text-white rounded'>
              {capitalizeFirstLetter(reply.trigger)}
            </button>
          ))}
        </div>
        <div className='w-full flex items-center'>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            className='flex-grow p-2 border border-gray-300 rounded'
            placeholder='Type your message...'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button
            onClick={handleSendMessage}
            className='ml-2 p-2 bg-blue-500 text-white rounded'>
            Send
          </button>
          <button
            onClick={handleReset}
            className='ml-2 p-2 bg-red-500 text-white rounded'>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
