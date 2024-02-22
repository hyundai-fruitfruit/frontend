/**
 * @author 오수영
 * @email osy9757@gmail.com
 * @create date 2024-02-17 20:35:30
 * @modify date 2024-02-17 20:35:39
 * @desc QR코드 스캐너 페이지
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
