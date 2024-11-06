// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Email from '../page/Email/Email';

function EmailContainer() {
  // const [result, setResult] = useState([]);

  // const getResult = async (data: {
  //   query: string;
  //   num: number;
  //   lat: number;
  //   lng: number;
  //   radius: number;
  // }) => {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost:5000/api/search/search',
  //       {
  //         params: {
  //           q: data.query,
  //           num: data.num,
  //           lat: data.lat,
  //           lng: data.lng,
  //           radius: data.radius,
  //         },
  //       },
  //     );

  //     setResult(response.data.scrapedData); // Adjust according to your API response structure
  //   } catch (error) {
  //     console.error('Error fetching search results:', error);
  //   }
  // };

  const sendEmail = async (data: any) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/email/send_email',
        { data },
      );
      return response.data.msg;
    } catch (error) {
      console.error('Error exporting to GoogleSheet:', error);
    }

    return 'result';
  };

  // useEffect(() => {
  //   // You can perform side effects here if needed
  // }, [result]);

  return <Email sendEmail={sendEmail} />;
}

export default EmailContainer;
