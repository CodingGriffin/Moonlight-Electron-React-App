/* eslint-disable no-undef */
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface TabComponentProps {
  currentLocation: google.maps.LatLng | null; // Define currentLocation here
  markerPosition: google.maps.LatLng | null; // Define markerPosition here
  onMapClick: (event: google.maps.MapMouseEvent) => void;
}

const containerStyle = {
  width: '100%',
  borderRadius: '5%',
  position: 'relative',
  paddingTop: '100%',
};

// eslint-disable-next-line react/function-component-definition
const Map: React.FC<TabComponentProps> = ({
  currentLocation,
  markerPosition,
  onMapClick,
}) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD8pk2ZnpR82LXx3IJUXFbaRnhZ27hR4ZY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation || { lat: -34.397, lng: 150.644 }}
        zoom={8}
        onClick={onMapClick}
      >
        <Marker position={markerPosition || { lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
