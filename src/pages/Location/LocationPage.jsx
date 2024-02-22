/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-13 02:24:19
 * @modify date 2024-02-13 02:24:20
 * @desc gps 결과 확인용 페이지
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
