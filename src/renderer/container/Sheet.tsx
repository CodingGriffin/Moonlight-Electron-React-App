import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sheet from '../page/Sheet/Sheet';

function SheetContainer() {
  const [results, setResults] = useState([]);

  const getResults = async () => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.get(
        'http://45.12.134.112:5000/api/sheet',
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );
      const data = response.data.map((item: any) => {
        item.results = null;
        return item;
      });
      console.log(response.data);
      await setResults(data);
    } catch (error) {
      console.error('Error Sending Result:', error);
    }
  };

  const combineSheets = async (targetId: string, droppedId: string) => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.post(
        'http://45.12.134.112:5000/api/sheet/combine',
        { targetId, droppedId },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );
      const data = response.data.map((item: any) => {
        item.results = null;
        return item;
      });
      console.log(response.data);
      await setResults(data);
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

  return <Sheet result={results} combineSheets={combineSheets} />;
}

export default SheetContainer;
