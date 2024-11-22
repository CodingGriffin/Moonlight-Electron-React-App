import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Email from '../page/Email/Email';

function EmailContainer() {
  const [emails, setEmails] = useState([]);

  const getEmails = async () => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.get(
        'http://192.168.145.241:5000/api/email',
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );

      await setEmails(response.data);
    } catch (error) {
      console.error('Error Sending Email:', error);
    }
  };
  const sendEmail = async (data: any) => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.post(
        'http://192.168.145.241:5000/api/email/send_email',
        { data },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );

      console.log(response);

      await setEmails(response.data);
    } catch (error) {
      console.error('Error Sending Email:', error);
    }
  };

  useEffect(() => {
    getEmails();
  }, []);

  useEffect(() => {
    // You can perform side effects here if needed
  }, [emails]);

  return <Email sendEmail={sendEmail} emails={emails} />;
}

export default EmailContainer;
