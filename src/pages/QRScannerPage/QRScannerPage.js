/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:06
 * @modify date 2024-02-14 00:18:46
 * @desc [description]
 */
import React from 'react';
import QRScannerComponent from '../../components/QRScanner/QRScannerComponent';

const QRScannerPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <QRScannerComponent />
    </div>
  );
};

export default QRScannerPage;
