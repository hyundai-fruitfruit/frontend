/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:19
 * @modify date 2024-02-13 02:24:20
 * @desc [description]
 */
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
