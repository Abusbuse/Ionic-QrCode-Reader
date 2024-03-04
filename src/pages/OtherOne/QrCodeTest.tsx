import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonToast } from '@ionic/react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import React, { useEffect, useState } from 'react';

const QrCodeTest: React.FC = () => {
  let scanner: Html5QrcodeScanner;

  useEffect(() => {
    scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250, 
        height: 250,
      }, 
      fps: 20,
    }, false);
  }, []);

  function success(result: string) {
    document.getElementById('result')!.innerHTML = `
    <h2>Success</h2>
    <p><a href="${result}">${result}</a></p>
    `;

    scanner.clear();
    document.getElementById('reader')?.remove();
  }

  function error(err: any) {
    console.error(err);
  }
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>QrCodeTest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={() => scanner.render(success, error)}>Scanner votre QrCode</IonButton>
        <div id="reader"></div>
        <div id="result"></div>
      </IonContent>
    </IonPage>
  );
};

export default QrCodeTest;