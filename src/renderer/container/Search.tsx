/* eslint-disable no-unused-expressions */
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
        'http://45.12.134.112:5000/api/search/search',
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
      localStorage.setItem(
        'search-result',
        JSON.stringify(response.data.scrapedData),
      );
      setResult(response.data.scrapedData); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const addSheet = async (results: any, query: string) => {
    const data = {};
    data['name'] = query;
    data['results'] = results;

    const token = localStorage.getItem('access_token');

    try {
      await axios.post(
        'http://45.12.134.112:5000/api/sheet/add',
        { data },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );
    } catch (error) {
      console.error('Error adding to sheet', error);
    }
  };

  const exportResult = async (data: any) => {
    try {
      const response = await axios.post(
        'http://45.12.134.112:5000/api/result/export',
        { data },
      );
      return response.data.url;
    } catch (error) {
      console.error('Error exporting to GoogleSheet:', error);
    }

    return 'result';
  };

  const saveResult = async (data: any) => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.post(
        'http://45.12.134.112:5000/api/result/save',
        { data },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token || '')}`,
            'Content-Type': 'application/json', // Optional, depending on your API
          },
        },
      );

      console.log(response);

      // await setEmails(response.data);
    } catch (error) {
      console.error('Error Sending Email:', error);
    }
  };

  const favorite = async (id: any) => {
    const token = localStorage.getItem('access_token');

    try {
      if (id.name) {
        await axios.put(
          `http://45.12.134.112:5000/api/result/favorite/${'999999999999999999999999'}`,
          { id },
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token || '')}`,
              'Content-Type': 'application/json', // Optional, depending on your API
            },
          },
        );
      } else {
        await axios.put(
          `http://45.12.134.112:5000/api/result/favorite/${id}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token || '')}`,
              'Content-Type': 'application/json', // Optional, depending on your API
            },
          },
        );
      }
    } catch (error) {
      console.error('Error Sending Email:', error);
    }
  };

  useEffect(() => {
    const savedSearchResult = localStorage.getItem('search-result');
    savedSearchResult
      ? setResult(JSON.parse(savedSearchResult || ''))
      : setResult([]);
    // You can perform side effects here if needed
  }, []);

  return (
    <Search
      result={result}
      getResult={getResult}
      exportResult={exportResult}
      saveResult={saveResult}
      favorite={favorite}
      addSheet={addSheet}
    />
  );
}

export default SearchContainer;
