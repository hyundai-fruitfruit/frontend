/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:31
 * @modify date 2024-02-14 00:18:12
 * @desc [description]
 */
import React from 'react';
import QrScanner from 'react-qr-scanner';

const QRScannerComponent = () => {
  //   const [scanResult, setScanResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      console.log('Scan Result:', data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%', height: '100%' }}
        facingMode={'environment'}
      />
    </div>
  );
};

export default QRScannerComponent;
