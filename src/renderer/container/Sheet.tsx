import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sheet from '../page/Sheet/Sheet';

function SheetContainer() {
  const [results, setResults] = useState([]);

  const getResults = async () => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.get('http://localhost:5000/api/sheet', {
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

  useEffect(() => {
    getResults();
  }, []);

  useEffect(() => {
    // You can perform side effects here if needed
  }, [results]);

  return <Sheet result={results} />;
}

export default SheetContainer;
