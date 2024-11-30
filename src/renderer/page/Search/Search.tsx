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
import SearchLoader from '../../component/SearchLoader';
import Header from '../../component/Header';

interface MapPosition {
  lat: number;
  lng: number;
}

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
  addSheet: (results: any, query: string) => Promise<void>;
}

// interface Coordinate {
//   lat: number;
//   lng: number;
// }

function Search({
  result,
  getResult,
  exportResult,
  saveResult,
  favorite,
  addSheet,
}: SearchProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const [coordinate, setCoordinate] = useState<Coordinate>();
  const [locationValue, setLocationValue] = useState('');
  const [range, setRangeValue] = useState(20);
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [markerPosition, setMarkerPosition] = useState<MapPosition | null>(
    null,
  );
  const [currentLocation, setCurrentLocation] = useState<MapPosition | null>(
    null,
  );

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
          setCurrentLocation({ lat: latitude, lng: longitude });
          setMarkerPosition({ lat: latitude, lng: longitude });
        },
        () => {
          console.log('Error getting location');
        },
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const getLocationByKeyword = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationValue)}&key=AIzaSyD8pk2ZnpR82LXx3IJUXFbaRnhZ27hR4ZY`,
      );
      const data = await response.json();

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setMarkerPosition({ lat, lng });
        setCurrentLocation({ lat, lng });
      }
    } catch (error) {
      console.log('Error fetching location. Please try again.');
    }
  };

  const onChangeHandle = async (e: any) => {
    await setLocationValue(e.target.value);
    if (locationValue !== '') {
      // setNoKeyWord(false);
      await getLocationByKeyword();
    }
  };

  // const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
  //   const { latLng } = event;
  //   if (latLng) {
  //     const lat = latLng.lat();
  //     const lng = latLng.lng();
  //     setCoordinate({ lat, lng });
  //     setMarkerPosition({ lat, lng });
  //     setCurrentLocation({ lat, lng });
  //   }
  // }, []);

  const sentCenterClick = async ({ lat, lng }: MapPosition) => {
    if (lat) {
      await setCurrentLocation({ lat, lng });
    }
  };

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
      lat: currentLocation?.lat || -34,
      lng: currentLocation?.lng || 150,
    };

    if (typeof getResult === 'function') {
      await setLoading(true);
      await getResult(searchData);
      await setLoading(false);
    } else {
      console.error('getResult is not a function');
    }
  };

  const handleSave = async () => {
    saveResult(result);
  };

  const handleAddSheetButton = () => {
    addSheet(result, query);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
}

  return (
    <>
      <Header title={'Business Search'} />
      <div className="flex flex-row sm:mx-4 lg:mx-8 transition-all duration-300">
        <div className="w-1/3">
          <Map
            currentLocation={currentLocation || null}
            // markerPosition={markerPosition || null}
            range={range * 1000 || 10000}
            // onMapClick={onMapClick}
            sentCenter={sentCenterClick}
          />
          <input
            value={locationValue}
            onChange={onChangeHandle}
            className="rounded-md w-full search sm:mt-3 h-[2rem] lg:mt-5 lg:h-[3rem] dark:bg-gray-700"
            type="text"
            placeholder="location..."
          />
          <div className="relative w-full">
            <p className="font-semibold sm:mt-1 text-sm lg:mt-3">Range:</p>
            <input
              type="range"
              min={0}
              max="200"
              value={range}
              onChange={handleRangeChange}
              onMouseEnter={() => setTooltipVisible(true)}
              // onMouseLeave={() => setTooltipVisible(false)}
              onMouseMove={handleMouseMove}
              className="range range-primary w-full sm:mt-1 lg:mt-4"
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
          <div className="flex-col rounded-3xl sm:p-1 lg:p-3 dark:bg-[#161717]">
            <input
              type="number"
              value={count}
              onChange={handleCountChange}
              className="flex rounded-md w-full sm:h-[2rem] lg:h-[3rem] dark:bg-gray-700"
            />
            <input
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              className="rounded-md w-full mt-5 sm:h-[2rem] lg:h-[3rem] dark:bg-gray-700"
              type="text"
              placeholder="Search here..."
            />
            <div className="flex flex-row justify-between mt-5">
              <button
                onClick={handleSearch}
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                type="button"
              >
                Search
              </button>
              <button
                onClick={handleSave}
                className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                type="button"
              >
                Save Results
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex-1 w-2/3 ml-5 rounded-lg bg-gray-200 border border-indigo-600 mb-2 dark:bg-gray-700 sm:overflow-x-scroll lg:overflow-x-auto">
          {loading ? (
            <div className="absolute left-1/2 top-1/2">
              <SearchLoader />
            </div>
          ) : (
            <TabComponent
              data={result}
              exportResult={exportResult}
              favorite={favorite}
              addSheet={handleAddSheetButton}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
