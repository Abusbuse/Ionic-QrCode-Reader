import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel } from "@ionic/react";
import { useHistory } from "react-router";

// CSS
import './QrCode.css';

// Page qui va permettre de scanner un QR Code
const QrCode: React.FC = () => {
    const history = useHistory();
    const goBack = () => {
        history.push("/tournee");
    };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="qrcode-title">Scanner un QR Code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonButton onClick={goBack}>
            <img src="./resources/left-arrow.png" alt="Retour" width={16} height={16}/>
          </IonButton>
        <div className="qrcode-content">
          <p>Vous pouvez scanner un QR Code</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default QrCode;
