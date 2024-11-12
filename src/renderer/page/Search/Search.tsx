/* eslint-disable no-undef */
import React, {
  useCallback,
  useEffect,
  useState,
  MouseEvent,
  useRef,
} from 'react';
import Map from '../../component/Map';
import TabComponent from '../../component/Tab';
import './style.css';

interface SearchData {
  query: string;
  num: number;
  radius: number;
  lat: number;
  lng: number;
}

interface SearchProps {
  result: any; // Adjust according to your data structure
  getResult: (data: SearchData) => void;
  exportResult: (data: any) => Promise<string>;
  saveResult: (data: SearchData) => void;
  favorite: (id: any) => void;
}

interface Coordinate {
  lat: number;
  lng: number;
}

function Search({
  result,
  getResult,
  exportResult,
  saveResult,
  favorite,
}: SearchProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [coordinate, setCoordinate] = useState<Coordinate>();
  const [range, setRangeValue] = useState(50);
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(10);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLng | null>(null);
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLng | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      const x = event.pageX - rect.left; // Get x position relative to the viewport
      const y = 0; // Get y position relative to the viewport

      setTooltipPosition({ x: x - 25, y: y + 20 }); // Offset for visibility
    }
  };

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
      setCoordinate({ lat, lng });
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
      radius: range,
      lat: coordinate?.lat || -34,
      lng: coordinate?.lng || 150,
    };

    if (typeof getResult === 'function') {
      await getResult(searchData);
    } else {
      console.error('getResult is not a function');
    }
  };

  const handleSave = async () => {
    saveResult(result);
  };

  return (
    <div className="flex flex-row mx-8">
      <div className="w-1/3 map">
        <Map
          currentLocation={currentLocation || null}
          markerPosition={markerPosition || null}
          onMapClick={onMapClick}
        />
        <div className="input-container w-full">
          <p className="mt-3">Range</p>
          <input
            type="range"
            min={0}
            max="200"
            value={range}
            onChange={handleRangeChange}
            onMouseEnter={() => setTooltipVisible(true)}
            // onMouseLeave={() => setTooltipVisible(false)}
            onMouseMove={handleMouseMove}
            className="range range-primary w-full mt-4"
            ref={inputRef} // Attach ref to the input element
          />
          {tooltipVisible && (
            <div
              className="tooltip"
              style={{
                position: 'absolute',
                left: tooltipPosition.x,
                top: tooltipPosition.y,
                backgroundColor: '#333',
                color: '#fff',
                padding: '5px',
                borderRadius: '5px',
                pointerEvents: 'none', // Prevents mouse events on the tooltip
                zIndex: 10,
              }}
            >
              {range}km
            </div>
          )}
        </div>
        <div className="flex-col my-5 p-5 rounded-3xl search-limits">
          <input
            type="number"
            value={count}
            onChange={handleCountChange}
            className="flex rounded-md w-full"
          />
          <input
            value={query}
            onChange={handleSearchChange}
            className="rounded-md w-full search mt-5"
            type="text"
            placeholder="Search here..."
          />
          <div className="flex flex-row justify-between mt-5">
            <button
              onClick={handleSearch}
              className="flex search-button p-3"
              type="button"
            >
              Search
            </button>
            <button
              onClick={handleSave}
              className="flex save-button p-3"
              type="button"
            >
              Save Results
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 w-2/3 ml-5 search-result">
        <TabComponent
          data={result}
          exportResult={exportResult}
          favorite={favorite}
        />
      </div>
    </div>
  );
}

export default Search;
