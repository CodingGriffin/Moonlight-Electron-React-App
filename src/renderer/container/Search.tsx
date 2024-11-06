import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../page/Search/Search';

function SearchContainer() {
  const [result, setResult] = useState([]);

  const getResult = async (data: {
    query: string;
    num: number;
    lat: number;
    lng: number;
    radius: number;
  }) => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/search/search',
        {
          params: {
            q: data.query,
            num: data.num,
            lat: data.lat,
            lng: data.lng,
            radius: data.radius,
          },
        },
      );

      setResult(response.data.scrapedData); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const exportResult = async (data: any) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/result/export',
        { data },
      );
      return response.data.url;
    } catch (error) {
      console.error('Error exporting to GoogleSheet:', error);
    }

    return 'result';
  };

  useEffect(() => {
    // You can perform side effects here if needed
  }, [result]);

  return (
    <Search result={result} getResult={getResult} exportResult={exportResult} />
  );
}

export default SearchContainer;
