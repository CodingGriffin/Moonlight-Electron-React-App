/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import Map from '../../component/Map';
import TabComponent from '../../component/Tab';
import './style.css';

interface SearchData {
  query: string;
  num: number;
}

interface SearchProps {
  result: any; // Adjust according to your data structure
  getResult: (data: SearchData) => void;
}

function Search({ result, getResult }: SearchProps) {
  const [range, setRangeValue] = useState(50);
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(10);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLng | null>(null);
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLng | null>(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation(new google.maps.LatLng(latitude, longitude));
          setMarkerPosition(new google.maps.LatLng(latitude, longitude));
        },
        () => {
          console.log('Error getting location');
        },
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    const { latLng } = event;
    if (latLng) {
      const lat = latLng.lat();
      const lng = latLng.lng();
      setMarkerPosition(new google.maps.LatLng(lat, lng));
      setCurrentLocation(new google.maps.LatLng(lat, lng));
    }
  }, []);

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(event.target.value));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    const searchData: SearchData = {
      query,
      num: count,
    };

    if (typeof getResult === 'function') {
      await getResult(searchData);
    } else {
      console.error('getResult is not a function');
    }
  };

  return (
    <div className="flex flex-row mx-8">
      <div className="w-1/3 map">
        <Map
          currentLocation={currentLocation || null}
          markerPosition={markerPosition || null}
          onMapClick={onMapClick}
        />
        <input
          type="range"
          min={0}
          max="200"
          value={range}
          onChange={handleRangeChange}
          className="range range-primary w-full mt-4"
        />
        <div className="flex-col my-5 p-5 rounded-3xl search-limits">
          <p className="mb-3">Scraping Limits</p>
          <input
            type="number"
            value={count}
            onChange={handleCountChange}
            className="flex rounded-md w-full"
          />
        </div>
        <input
          value={query}
          onChange={handleSearchChange}
          className="rounded-full w-full search"
          type="text"
          placeholder="Search here..."
        />
        <div className="flex flex-row justify-between my-10">
          <button
            onClick={handleSearch}
            className="flex search-button p-3"
            type="button"
          >
            Search
          </button>
          <button className="flex save-button p-3" type="button">
            Save Results
          </button>
        </div>
      </div>
      <div className="flex-1 w-2/3 ml-5 search-result">
        <TabComponent data={result} />
      </div>
    </div>
  );
}

export default Search;
