import {
    BarcodeScanner,
    BarcodeFormat,
    LensFacing,
  } from '@capacitor-mlkit/barcode-scanning';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/react';
import React, { useState } from 'react';

const QrCode: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");
      
      const startScan = async () => {
        document.querySelector('body')?.classList.add('barcode-scanner-active');
      
        // Add the `barcodeScanned` listener
        const listener = await BarcodeScanner.addListener(
          'barcodeScanned',
          async result => {
            console.log(result.barcode);
          },
        );
      
        // Start the barcode scanner
        await BarcodeScanner.startScan();
      };
      
      const stopScan = async () => {
        // Make all elements in the WebView visible again
        document.querySelector('body')?.classList.remove('barcode-scanner-active');
      
        // Remove all listeners
        await BarcodeScanner.removeAllListeners();
      
        // Stop the barcode scanner
        await BarcodeScanner.stopScan();
      };
      
      const scanSingleBarcode = async () => {
        return new Promise(async resolve => {
          document.querySelector('body')?.classList.add('barcode-scanner-active');
      
          const listener = await BarcodeScanner.addListener(
            'barcodeScanned',
            async result => {
              await listener.remove();
              document
                .querySelector('body')
                ?.classList.remove('barcode-scanner-active');
              await BarcodeScanner.stopScan();
              resolve(result.barcode);
            },
          );
      
          await BarcodeScanner.startScan();
        });
      };
      
      const scan = async () => {
        const { barcodes } = await BarcodeScanner.scan({
          formats: [BarcodeFormat.QrCode],
        });
        return barcodes;
      };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>QR Code</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonButton onClick={startScan}>Start Scan</IonButton>
                <IonButton onClick={stopScan}>Stop Scan</IonButton>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    );
};

export default QrCode;
