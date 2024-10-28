import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10%',
};

const center = {
  lat: -34.397,
  lng: 150.644,
};

// eslint-disable-next-line react/function-component-definition
const Map: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD8pk2ZnpR82LXx3IJUXFbaRnhZ27hR4ZY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
