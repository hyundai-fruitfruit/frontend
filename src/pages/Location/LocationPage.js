import React from 'react';
import LocationDisplay from '../../components/Location/LocationDisplay';

const LocationPage = () => {
  console.log('LocationPage 렌더링...');

  return (
    <div>
      <h1>Current Location</h1>
      <LocationDisplay />
    </div>
  );
};

export default LocationPage;
