import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SheetDetail from '../page/Sheet/SheetDetail';
import { API } from '../config';

function SheetDetailContainer() {
  const [results, setResults] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.get(`${API}sheet/${id}`, {
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

  const favorite = async (resultId: any) => {
    const token = localStorage.getItem('access_token');

    try {
      const response = await axios.put(
        `${API}result/favorite/${resultId}`,
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
    getDetail();
  }, []);

  useEffect(() => {
    // You can perform side effects here if needed
  }, [results]);

  return <SheetDetail result={results} favorite={favorite} />;
}

export default SheetDetailContainer;
