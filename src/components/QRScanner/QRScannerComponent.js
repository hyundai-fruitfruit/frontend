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
      />
      {/* <p>Scan Result: {scanResult}</p> */}
    </div>
  );
};

export default QRScannerComponent;
