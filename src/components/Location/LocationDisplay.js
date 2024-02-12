import React from 'react';
import useCurrentLocation from '../../hooks/useCurrentLocation';

const LocationDisplay = () => {
  const { location, error } = useCurrentLocation();

  console.log('LocationDisplay 렌더링...', { location, error });

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDisplay;
