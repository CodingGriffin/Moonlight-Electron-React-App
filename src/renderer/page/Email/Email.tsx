import React, { useState } from 'react';

import OpenAI from 'openai';
import axios from 'axios';
import EmailTable from '../../component/EmailTable';
import binSvg from '../../../../assets/images/email/bin.svg';
import pencilSvg from '../../../../assets/images/email/pencil.svg';
import Header from '../../component/Header';

// const { Configuration, OpenAIApi } = require('openai');
const openai = new OpenAI({
  apiKey:
    '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', // Replace with your OpenAI API key
  dangerouslyAllowBrowser: true,
});

interface EmailProps {
  sendEmail: (data: any) => void;
  emails: any;
}
function Email({ sendEmail, emails }: EmailProps) {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isWriting, setIsWriting] = useState(false);

  const handleGpt = async () => {
    try {
      // const completion = await openai.chat.completions.create({
      //   model: 'gpt-3.5',
      //   messages: [
      //     { role: 'system', content: 'You are a helpful assistant.' },
      //     {
      //       role: 'user',
      //       content: 'Write a haiku about recursion in programming.',
      //     },
      //   ],
      // });

      const completion = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            // Example hardcoded message, should be adjusted according to real application logic
            {
              role: 'user',
              content: `Write a haiku about recursion in programming.`,
            },
          ],
          model: 'gpt-4-0125-preview',
          response_format: { type: 'json_object' },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers':
              'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'OPTIONS,POST',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'X-Requested-With': '*',
            Authorization: `Bearer sk-proj-vEC7LFZKrZmlyJwOUwMeT3BlbkFJXI6I5oxlbNddcqP46ayg`,
          },
        },
      );

      console.log(completion.choices[0].message);
      // const response = await openai.chat.completions.create({
      //     model: 'text-davinci-003',
      //     prompt: `Write a polite email to a business describing the following problem:\n\n${subject}\n\nThe email should be concise and clear.`,
      //     max_tokens: 200,
      // });
      // console.log( response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Error generating email:', error);
      throw new Error('Failed to generate email. Please try again.');
    }
  };

  const handleSendBtn = () => {
    const tokens = localStorage.getItem('token');
    const parsedTokens = JSON.parse(tokens || '');
    const accessToken: string = parsedTokens?.access_token;
    const refreshToken: string = parsedTokens?.refresh_token;
    sendEmail({
      recipientEmail: recipient,
      subject,
      message,
      accessToken,
      refreshToken,
    });

    setIsWriting(!isWriting);
  };

  return (
    <div>
      <Header title="Message Inbox" />
      <div className="rounded-xl pb-10 bg-gray-200 dark:bg-gray-900 mx-3 lg:mx-10">
        <div className="sm:py-3 lg:py-10 px-8 flex justify-between">
          <h2 className="flex text-xl font-bold">Inbox</h2>
          <div className="flex">
            <button
              className="flex flex-row items-center bg-[#ff6767] focus:outline-none text-white bg-[#ff6767] hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              type="button"
            >
              <img className="mr-5" src={binSvg} alt="delete" />
              <span className="text-md">Delete</span>
            </button>
            <button
              className="flex flex-row items-center focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              onClick={() => {
                setIsWriting(!isWriting);
              }}
              type="button"
            >
              <img className="mr-5" src={pencilSvg} alt="compose" />
              <span className="text-black">Compose</span>
            </button>
          </div>
        </div>
        <EmailTable data={emails} />

        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          /> */}
          <div
            className="fixed inset-0 z-10 w-screen overflow-y-auto"
            style={!isWriting ? { display: 'none' } : {}}
          >
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#424242] px-3 py-3 text-white">
                  New Message
                </div>
                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-gray-900 ">
                  <input
                    className="block py-1.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    type="text"
                    value={recipient}
                    onChange={(e) => {
                      setRecipient(e.target.value);
                    }}
                    placeholder="Recipients"
                  />
                  <input
                    className="block py-1.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    type="text"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    placeholder="Subject"
                  />
                  <textarea
                    className="block mt-5 py-1.5 ps-6 pe-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer sm:min-h-[15rem] lg:min-h-[25rem]"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Body Text"
                  />
                </div>
                <div className="bg-[#424242] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={handleSendBtn}
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    onClick={handleGpt}
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                  >
                    GPT Generate
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsWriting(!isWriting);
                    }}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
