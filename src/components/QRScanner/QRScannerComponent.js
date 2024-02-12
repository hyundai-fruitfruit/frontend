/**
 * @author OHsooyoung
 * @email osy9757@gmai.com
 * @create date 2024-02-13 02:24:31
 * @modify date 2024-02-13 02:24:32
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
    <div>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode={'environment'}
      />
      {/* <p>Scan Result: {scanResult}</p> */}
    </div>
  );
};

export default QRScannerComponent;
