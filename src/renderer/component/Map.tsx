/* eslint-disable no-undef */
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useEffect, useRef } from 'react';
import { GOOGLE_API_KEY } from '../config';

interface MapPosition {
  lat: number;
  lng: number;
}

interface MapComponentProps {
  currentLocation: MapPosition | null;
  range: number;
  sentCenter: (point: MapPosition) => void;
}

const containerStyle = {
  width: '100%',
  borderRadius: '5%',
  position: 'relative',
  paddingTop: '100%',
};

const customMapStyle = [
  // ... (add the rest of your styles here)
];

// eslint-disable-next-line react/function-component-definition
const Map: React.FC<MapComponentProps> = ({
  currentLocation,
  range,
  sentCenter,
}: MapComponentProps) => {
  const circleRef = useRef<google.maps.Circle | null>(null); // Circle reference
  const mapRef = useRef<google.maps.Map | null>(null); // Map reference

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map; // Save map reference

    // Initialize circle
    const circle = new google.maps.Circle({
      strokeColor: '#0000ff',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000ff',
      fillOpacity: 0.35,
      map,
      center: currentLocation || { lat: -34.397, lng: 150.644 },
      radius: range, // Set initial range
    });

    circleRef.current = circle; // Save circle reference

    // Listen for the 'idle' event
    map.addListener('idle', () => {
      if (mapRef.current) {
        const newCenter = mapRef.current.getCenter();
        if (newCenter) {
          const newCenterLatLng = {
            lat: newCenter.lat(),
            lng: newCenter.lng(),
          };
          sentCenter(newCenterLatLng); // Notify the parent only after interaction ends
        }
      }
    });

    map.addListener('center_changed', () => {
      if (circleRef.current && mapRef.current) {
        const newCenter = mapRef.current.getCenter();
        if (newCenter) {
          const newCenterLatLng = {
            lat: newCenter.lat(),
            lng: newCenter.lng(),
          };

          circleRef.current.setCenter(newCenterLatLng); // Update circle center
        }
      }
    });
  };

  const mapOptions = {
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    // styles: customMapStyle,
  };

  // Use effect to update the circle's radius when the range changes
  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setRadius(range); // Update the radius dynamically
    }
  }, [range]); // Dependency on range

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || { lat: -34.397, lng: 150.644 }}
        zoom={8}
        onLoad={onLoad}
        options={mapOptions}
      />
    </LoadScript>
  );
};

export default Map;
