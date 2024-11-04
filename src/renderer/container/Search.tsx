import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '../page/Search/Search';

function SearchContainer() {
  const [result, setResult] = useState([]);

  const getResult = async (data: { query: string; num: number }) => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/search/search',
        {
          params: {
            q: data.query,
            num: data.num,
            // Add any other parameters you need here
          },
        },
      );

      setResult(response.data.scrapedData); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // const exportResult = async ()

  useEffect(() => {
    // You can perform side effects here if needed
  }, [result]);

  return <Search result={result} getResult={getResult} />;
}

export default SearchContainer;
