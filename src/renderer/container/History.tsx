import React, { useEffect, useState } from 'react';
import axios from 'axios';
import History from '../page/History/History';

function HistoryContainer() {
  const [results, setResults] = useState([]);

  const getResults = async () => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.get('http://localhost:5000/api/result', {
        headers: {
          Authorization: `Bearer ${JSON.parse(token || '')}`,
          'Content-Type': 'application/json', // Optional, depending on your API
        },
      });

      await setResults(response.data);
    } catch (error) {
      console.error('Error Sending Result:', error);
    }
  };

  const favorite = async (id: any) => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.put(
        `http://localhost:5000/api/result/favorite/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );

      await setResults(response.data);
    } catch (error) {
      console.error('Error Sending Email:', error);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  useEffect(() => {
    // You can perform side effects here if needed
  }, [results]);

  return <History result={results} favorite={favorite} />;
}

export default HistoryContainer;
